"use client";

import { useActionState } from "react";
import Link from "next/link";
import { MessageSquare, CheckCircle, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";

export default function ContactPage() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContactMessage, null);

  return (
    <div className="py-20 sm:py-28">
      {/* Hero */}
      <div className="container-shell">
        <div className="mx-auto max-w-xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111113]">
            <span className="size-2 rounded-full bg-[#FB5B36]" />
            Hulp nodig?
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#111113] sm:text-5xl">
            Neem contact op
          </h1>
          <p className="mt-4 text-lg leading-7 text-[#56564F]">
            We reageren doorgaans binnen één werkdag. Stel je vraag via het formulier hieronder.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-[1fr_320px]">
          {/* Form */}
          <div className="rounded-3xl border border-[#E5E3DA] bg-white p-8 sm:p-10">
            {state && "success" in state ? (
              <div className="flex flex-col items-center gap-5 py-12 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-[#EDF7C6]">
                  <CheckCircle className="size-8 text-[#111113]" />
                </div>
                <div>
                  <p className="text-xl font-black text-[#111113]">Bericht ontvangen!</p>
                  <p className="mt-2 text-sm leading-6 text-[#56564F]">
                    We nemen zo snel mogelijk contact met je op, doorgaans binnen één werkdag.
                  </p>
                </div>
              </div>
            ) : (
              <form action={action} className="space-y-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[#111113]">Naam</span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Je volledige naam"
                    className="w-full rounded-xl border border-[#DDDBD1] bg-[#F8F8F6] px-4 py-3 text-sm text-[#111113] placeholder:text-[#9A9A92] focus:border-[#111113] focus:bg-white focus:outline-none transition-colors"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[#111113]">E-mailadres</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jij@voorbeeld.nl"
                    className="w-full rounded-xl border border-[#DDDBD1] bg-[#F8F8F6] px-4 py-3 text-sm text-[#111113] placeholder:text-[#9A9A92] focus:border-[#111113] focus:bg-white focus:outline-none transition-colors"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[#111113]">Bericht</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Stel je vraag of beschrijf je probleem…"
                    className="w-full resize-none rounded-xl border border-[#DDDBD1] bg-[#F8F8F6] px-4 py-3 text-sm text-[#111113] placeholder:text-[#9A9A92] focus:border-[#111113] focus:bg-white focus:outline-none transition-colors"
                  />
                </label>

                {state && "error" in state && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {state.error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#111113] px-6 py-3.5 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C] disabled:opacity-60"
                >
                  <MessageSquare className="size-4" />
                  {pending ? "Versturen…" : "Verstuur bericht"}
                  {!pending && <ArrowRight className="size-4" />}
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-[#E5E3DA] bg-white p-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#EDF7C6]">
                <Clock className="size-5 text-[#111113]" />
              </div>
              <div className="mt-3 font-bold text-[#111113]">Reactietijd</div>
              <p className="mt-1 text-sm leading-6 text-[#56564F]">
                We reageren doorgaans binnen één werkdag op werkdagen van maandag t/m vrijdag.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E3DA] bg-white p-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#FFE3DA]">
                <ShieldCheck className="size-5 text-[#FB5B36]" />
              </div>
              <div className="mt-3 font-bold text-[#111113]">Privacy</div>
              <p className="mt-1 text-sm leading-6 text-[#56564F]">
                Je gegevens worden alleen gebruikt om je vraag te beantwoorden en nooit gedeeld met derden.
              </p>
            </div>

            <div className="rounded-2xl bg-[#111113] p-6">
              <div className="font-bold text-[#F2F1EC]">Veelgestelde vragen</div>
              <p className="mt-2 text-sm leading-6 text-[#9A9A92]">
                Misschien staat jouw vraag al in onze FAQ op de homepage.
              </p>
              <Link
                href="/#faq"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#C6F24E] transition-opacity hover:opacity-80"
              >
                Bekijk FAQ <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
