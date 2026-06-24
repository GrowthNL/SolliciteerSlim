import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid | CVmaken.nu",
  description: "Lees hoe CVmaken.nu jouw persoonsgegevens verwerkt, bewaart en beschermt conform de AVG.",
};

export default function PrivacyPage() {
  return (
    <div className="container-shell py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-950 mb-4">Privacybeleid</h1>
      <p className="text-slate-500 text-sm mb-10">Laatst bijgewerkt: juni 2026</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">1. Welke gegevens verzamelen we</h2>
          <p className="text-slate-600 leading-7">
            CVmaken.nu verwerkt de volgende persoonsgegevens wanneer je gebruik maakt van onze dienst:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 mt-3">
            <li>E-mailadres en naam (bij aanmaken van een account)</li>
            <li>CV-inhoud die je invoert of uploadt (tekst, werkervaring, opleidingen, vaardigheden)</li>
            <li>Gebruiksgegevens met betrekking tot AI-functies (bijv. welke AI-verbeteringen je opvraagt)</li>
            <li>Betalingsgegevens verwerkt via Stripe (CVmaken.nu slaat zelf geen betaalkaartgegevens op)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">2. Waarvoor gebruiken we je gegevens</h2>
          <p className="text-slate-600 leading-7">
            We verwerken je gegevens uitsluitend voor de volgende doeleinden:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 mt-3">
            <li>Het leveren en verbeteren van de CVmaken.nu-dienst</li>
            <li>Het verwerken van je cv-inhoud met behulp van AI om suggesties te genereren</li>
            <li>Het versturen van transactionele e-mails (bevestigingen, herstellinks)</li>
            <li>Het beheren van je abonnement en betalingen</li>
            <li>Het voldoen aan wettelijke verplichtingen</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">3. Hoe lang bewaren we je gegevens</h2>
          <p className="text-slate-600 leading-7">
            We bewaren je persoonsgegevens niet langer dan noodzakelijk:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 mt-3">
            <li>Accountgegevens (naam, e-mail): zolang je account actief is</li>
            <li>CV-data: tot het moment dat je je account verwijdert</li>
            <li>Betalingsgegevens en facturen: 7 jaar conform de wettelijke bewaarplicht</li>
            <li>Na verwijdering van je account worden je persoonsgegevens binnen 30 dagen gewist</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">4. Delen we je gegevens</h2>
          <p className="text-slate-600 leading-7">
            CVmaken.nu verkoopt jouw gegevens nooit aan derden. We maken gebruik van de volgende verwerkers:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 mt-3">
            <li><strong>Supabase</strong>: databasehosting binnen de EU (opslag van accountgegevens en cv-data)</li>
            <li><strong>OpenAI</strong>: AI-verwerking van cv-inhoud; gegevens worden geanonimiseerd doorgegeven en niet gebruikt voor modeltraining conform onze verwerkersovereenkomst</li>
            <li><strong>Stripe</strong>: veilige verwerking van betalingen</li>
            <li><strong>Resend</strong>: verzending van transactionele e-mails</li>
          </ul>
          <p className="text-slate-600 leading-7 mt-3">
            Met alle verwerkers hebben wij een verwerkersovereenkomst gesloten conform de AVG.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">5. Jouw rechten</h2>
          <p className="text-slate-600 leading-7">
            Op grond van de AVG (artikelen 15-22) heb je de volgende rechten:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 mt-3">
            <li><strong>Inzage</strong>: je kunt opvragen welke gegevens we van je verwerken</li>
            <li><strong>Rectificatie</strong>: onjuiste gegevens kun je laten corrigeren</li>
            <li><strong>Verwijdering</strong>: je kunt vragen je gegevens te wissen (recht op vergetelheid)</li>
            <li><strong>Bezwaar</strong>: je kunt bezwaar maken tegen verwerking van je gegevens</li>
            <li><strong>Datatransport</strong>: je kunt je gegevens in een machine-leesbaar formaat opvragen</li>
          </ul>
          <p className="text-slate-600 leading-7 mt-3">
            Om een verzoek in te dienen, stuur een e-mail naar{" "}
            <a href="mailto:info@cvmaken.nu" className="text-emerald-700 underline underline-offset-2">
              info@cvmaken.nu
            </a>
            . We reageren binnen 30 dagen. Je hebt ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">6. Cookies</h2>
          <p className="text-slate-600 leading-7">
            CVmaken.nu gebruikt uitsluitend functionele cookies die noodzakelijk zijn voor het functioneren van de dienst, zoals het bijhouden van je inlogsessie. We plaatsen geen tracking-cookies of advertentiecookies. Er is dan ook geen cookiebanner nodig.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">7. Wijzigingen in dit beleid</h2>
          <p className="text-slate-600 leading-7">
            We kunnen dit privacybeleid van tijd tot tijd aanpassen, bijvoorbeeld bij nieuwe functies of wetswijzigingen. Bij wezenlijke wijzigingen informeren we je per e-mail of via een melding in de applicatie. De meest actuele versie vind je altijd op deze pagina.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">8. Contact</h2>
          <p className="text-slate-600 leading-7">
            Voor vragen over je privacy of dit beleid kun je contact opnemen met CVmaken.nu via:{" "}
            <a href="mailto:info@cvmaken.nu" className="text-emerald-700 underline underline-offset-2">
              info@cvmaken.nu
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
