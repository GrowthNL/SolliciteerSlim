import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return NextResponse.next({ request });
  }

  let response = NextResponse.next({ request });

  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
            response = NextResponse.next({ request });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options),
            );
          },
        },
      },
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { pathname } = request.nextUrl;
    const isDashboard = pathname.startsWith("/dashboard");
    const isAuthPage = ["/login", "/registreren", "/wachtwoord-vergeten"].some((p) =>
      pathname.startsWith(p),
    );

    if (isDashboard && !user) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("van", pathname);
      return NextResponse.redirect(url);
    }

    if (isAuthPage && user) {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
  } catch {
    // If Supabase is unreachable or throws, continue without redirect.
    // Dashboard pages do a second server-side auth check in their layout.
  }

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/registreren", "/wachtwoord-vergeten"],
};
