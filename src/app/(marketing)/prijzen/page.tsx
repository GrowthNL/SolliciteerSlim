import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Shield, RefreshCw, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckoutButton, FreeButton } from "./checkout-buttons";
import type { PriceKey } from "@/app/actions/stripe";

export const metadata: Metadata = {
  title: "Prijzen | SolliciteerSlim",
  description: "Betaal alleen voor wat je gebruikt. Begin gratis en kies pas later een abonnement dat bij jouw situatie past.",
};

const tiers: {
  name: string; price: string; priceMonthly: string; period: string;
  description: string; cta: string; priceKey: PriceKey | null;
  featured: boolean; badge: string | null; features: { text: string; included: boolean }[];
}[] = [
  {
    name: "Gratis", price: "€0", priceMonthly: "€0", period: "/maand",
    description: "Alles wat je nodig hebt om je cv op te bouwen en te beoordelen, zonder ook maar een cent te betalen.",
    cta: "Gratis starten", priceKey: null, featured: false, badge: null,
    features: [
      { text: "1 cv maken & bewerken", included: true },
      { text: "Alle 3 templates (bekijk)", included: true },
      { text: "Web-preview van je cv", included: true },
      { text: "Geen creditcard nodig", included: true },
      { text: "PDF download", included: false },
      { text: "ATS-check", included: false },
      { text: "AI-verbeteringen", included: false },
    ],
  },
  {
    name: "Starter", price: "€7", priceMonthly: "€9", period: "/maand",
    description: "Voor iedereen die actief solliciteert en een verzorgde PDF wil kunnen versturen.",
    cta: "Start Starter", priceKey: "starter_monthly", featured: true, badge: "Meest gekozen",
    features: [
      { text: "Alles van Gratis", included: true },
      { text: "3 cv's opslaan", included: true },
      { text: "PDF download", included: true },
      { text: "ATS-check (1x per maand)", included: true },
      { text: "E-mailondersteuning", included: true },
      { text: "AI-verbeteringen", included: false },
      { text: "Sollicitatiebrieven met AI", included: false },
    ],
  },
  {
    name: "Pro", price: "€15", priceMonthly: "€19", period: "/maand",
    description: "Voor de serieuze sollicitant die alles uit zijn kandidatuur wil halen.",
    cta: "Start Pro", priceKey: "pro_monthly", featured: false, badge: null,
    features: [
      { text: "Alles van Starter", included: true },
      { text: "Onbeperkt cv's opslaan", included: true },
      { text: "AI-verbeteringen (10x per maand)", included: true },
      { text: "Sollicitatiebrieven met AI", included: true },
      { text: "Vacaturetracking", included: true },
      { text: "Prioriteitsondersteuning", included: true },
      { text: "Vroeg toegang tot nieuwe functies", included: true },
    ],
  },
];

const faqs = [
  {
    question: "Kan ik op elk moment opzeggen?",
    answer: "Ja, je kunt je abonnement op elk moment opzeggen via je accountinstellingen. Er zijn geen opzegtermijnen. Na opzegging behoud je toegang tot het einde van je betaalde periode.",
  },
  {
    question: "Is mijn cv-data veilig?",
    answer: "Ja. SolliciteerSlim is AVG-conform en je gegevens worden alleen verwerkt voor de diensten die je uitdrukkelijk gebruikt. We delen nooit persoonsgegevens met derden zonder jouw toestemming. Je kunt je data op elk moment exporteren of verwijderen.",
  },
  {
    question: "Kan ik SolliciteerSlim gratis blijven gebruiken?",
    answer: "Absoluut. Het gratis abonnement heeft geen tijdslimiet. Je kunt één cv aanmaken, bewerken en bekijken zolang je wilt. Betaalde functies zoals PDF-export en AI-verbeteringen zijn optioneel en worden pas relevant als je meer wilt doen.",
  },
  {
    question: "Wanneer komen de AI-functies beschikbaar?",
    answer: "AI-verbeteringen en AI-sollicitatiebrieven zijn momenteel in de laatste testfase. Starter-gebruikers krijgen als eerste toegang. Pro-abonnees ontvangen automatisch 10 AI-credits per maand zodra de functie live gaat, zonder extra kosten.",
  },
];

const trustItems = [
  { icon: CreditCard, text: "Geen creditcard bij aanmelding" },
  { icon: RefreshCw, text: "Annuleer op elk moment" },
  { icon: Shield, text: "AVG-conform & privacy-first" },
];

export default function PrijzenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(135deg,#fbfcfa_45%,#edf8f1)] py-18 sm:py-24">
        <div className="container-shell text-center">
          <Badge>Transparante prijzen</Badge>
          <h1 className="font-display mt-6 text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Betaal alleen voor wat je gebruikt
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Begin gratis en kies pas later wat je nodig hebt. Geen verborgen kosten, geen automatische upgrades, geen gedoe.
          </p>

          {/* Billing toggle — static, annual shown */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-sm font-semibold shadow-sm">
            <span className="rounded-full px-4 py-1.5 text-slate-500">Per maand</span>
            <span className="rounded-full bg-emerald-700 px-4 py-1.5 text-white">
              Jaarlijks <span className="ml-1.5 rounded-full bg-emerald-600 px-1.5 py-0.5 text-xs">−25%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16 sm:py-20">
        <div className="container-shell">
          <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-3">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={tier.featured ? "relative border-emerald-600 ring-2 ring-emerald-600/20" : ""}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <span className="rounded-full bg-emerald-700 px-4 py-1 text-xs font-semibold text-white shadow">
                      {tier.badge}
                    </span>
                  </div>
                )}
                <CardHeader className={tier.badge ? "pt-8" : ""}>
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="font-display text-4xl font-bold text-slate-950">{tier.price}</span>
                    <span className="mb-1 text-slate-500">{tier.period}</span>
                  </div>
                  {tier.price !== tier.priceMonthly && (
                    <p className="text-xs text-slate-500">
                      {tier.priceMonthly}/maand bij maandelijkse betaling
                    </p>
                  )}
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {tier.priceKey ? (
                    <CheckoutButton priceKey={tier.priceKey} variant={tier.featured ? "default" : "secondary"}>
                      {tier.cta}
                    </CheckoutButton>
                  ) : (
                    <FreeButton />
                  )}
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature.text} className="flex items-center gap-3 text-sm">
                        {feature.included ? (
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                            <Check className="size-3.5 text-emerald-700" />
                          </span>
                        ) : (
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-slate-100">
                            <X className="size-3.5 text-slate-400" />
                          </span>
                        )}
                        <span className={feature.included ? "text-slate-800" : "text-slate-400"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-slate-100 bg-slate-50 py-8">
        <div className="container-shell flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
              <Icon className="size-4 text-emerald-600" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <Badge>Veelgestelde vragen</Badge>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Antwoorden voordat je begint
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Staat je vraag er niet bij? Stuur ons een e-mail op{" "}
              <a href="mailto:hallo@solliciteerslim.nl" className="text-emerald-700 underline underline-offset-2">
                hallo@solliciteerslim.nl
              </a>
            </p>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-950">
                  {question}
                  <span className="shrink-0 text-xl font-normal text-emerald-700 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-8 text-sm leading-6 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="container-shell overflow-hidden rounded-3xl bg-emerald-800 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="font-display mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Klaar om te beginnen?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-emerald-100">
            Maak gratis je eerste cv. Geen creditcard, geen proefperiode, gewoon beginnen.
          </p>
          <Button asChild className="mt-7 bg-white text-emerald-900 hover:bg-emerald-50" size="lg">
            <Link href="/registreren">
              Gratis starten <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
