import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
export default function DashboardLayout({ children }: { children: React.ReactNode }) { return <div className="flex min-h-screen bg-slate-50"><Sidebar /><div className="min-w-0 flex-1"><Topbar /><main className="p-4 sm:p-7 lg:p-9">{children}</main></div></div>; }
