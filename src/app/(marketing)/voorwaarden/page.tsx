import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene voorwaarden | CVmaken.nu",
  description: "De algemene voorwaarden van CVmaken.nu. Lees wat je rechten en plichten zijn als gebruiker van onze dienst.",
};

export default function VoorwaardenPage() {
  return (
    <div className="container-shell py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-950 mb-4">Algemene voorwaarden</h1>
      <p className="text-slate-500 text-sm mb-10">Laatst bijgewerkt: juni 2026</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">1. Gebruik van de dienst</h2>
          <p className="text-slate-600 leading-7">
            CVmaken.nu is een online hulpmiddel voor het opstellen en verbeteren van cv&apos;s en sollicitatiebrieven. De dienst is uitsluitend bedoeld voor persoonlijk gebruik. Het is niet toegestaan om:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 mt-3">
            <li>De dienst te gebruiken voor commerciële doeleinden zonder voorafgaande schriftelijke toestemming</li>
            <li>Geautomatiseerde verzoeken te sturen (scraping, bots)</li>
            <li>De dienst te misbruiken op een manier die de werking voor andere gebruikers verstoort</li>
            <li>Valse of misleidende informatie in te voeren</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">2. Account</h2>
          <p className="text-slate-600 leading-7">
            Om gebruik te maken van de meeste functies dien je een account aan te maken. Je bent zelf verantwoordelijk voor:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 mt-3">
            <li>De vertrouwelijkheid van je inloggegevens</li>
            <li>Alle activiteit die plaatsvindt via jouw account</li>
            <li>Het direct melden van ongeautoriseerd gebruik via info@cvmaken.nu</li>
          </ul>
          <p className="text-slate-600 leading-7 mt-3">
            CVmaken.nu behoudt zich het recht voor accounts te blokkeren of te verwijderen bij schending van deze voorwaarden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">3. Abonnement en betalingen</h2>
          <p className="text-slate-600 leading-7">
            Betaalde abonnementen worden verwerkt via Stripe. Voor betalingen gelden de volgende voorwaarden:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 mt-3">
            <li>Abonnementen worden maandelijks of jaarlijks gefactureerd, afhankelijk van je keuze</li>
            <li>Je kunt je abonnement op elk moment opzeggen via je accountinstellingen</li>
            <li>Na opzegging behoud je toegang tot het einde van de betaalde periode</li>
            <li>Er vindt geen restitutie plaats voor de lopende betaalperiode</li>
            <li>Prijswijzigingen worden minimaal 30 dagen van tevoren aangekondigd</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">4. AI-gegenereerde inhoud</h2>
          <p className="text-slate-600 leading-7">
            CVmaken.nu maakt gebruik van AI om suggesties te doen voor je cv en sollicitatiebrief. Houd rekening met het volgende:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 mt-3">
            <li>AI-suggesties zijn indicatief en niet gegarandeerd correct of volledig</li>
            <li>Jij blijft te allen tijde eindverantwoordelijk voor de inhoud van je cv en sollicitatiebrief</li>
            <li>Controleer AI-gegenereerde tekst altijd voordat je deze gebruikt</li>
            <li>CVmaken.nu is niet aansprakelijk voor gevolgen van het gebruik van AI-suggesties</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">5. Aansprakelijkheid</h2>
          <p className="text-slate-600 leading-7">
            De dienst wordt geleverd op basis van &ldquo;as is&rdquo; en &ldquo;as available&rdquo;. CVmaken.nu geeft geen garanties met betrekking tot:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 mt-3">
            <li>De ononderbroken beschikbaarheid van de dienst</li>
            <li>Het behalen van sollicitatiesucces of het verkrijgen van een baan</li>
            <li>De juistheid of geschiktheid van AI-suggesties voor jouw specifieke situatie</li>
          </ul>
          <p className="text-slate-600 leading-7 mt-3">
            De aansprakelijkheid van CVmaken.nu is in alle gevallen beperkt tot het bedrag dat je in de afgelopen drie maanden voor de dienst hebt betaald.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">6. Intellectueel eigendom</h2>
          <p className="text-slate-600 leading-7">
            De software, het design, de templates en alle overige elementen van CVmaken.nu zijn eigendom van CVmaken.nu en zijn beschermd door intellectueel eigendomsrecht. Het is niet toegestaan deze te kopiëren, distribueren of te gebruiken zonder toestemming.
          </p>
          <p className="text-slate-600 leading-7 mt-3">
            De cv-inhoud die jij invoert, is en blijft jouw eigendom. Door de inhoud in te voeren geef je CVmaken.nu toestemming deze te verwerken met als enig doel het leveren van de dienst.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">7. Toepasselijk recht</h2>
          <p className="text-slate-600 leading-7">
            Op deze voorwaarden en het gebruik van CVmaken.nu is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Amsterdam, tenzij dwingend recht een andere rechter voorschrijft.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">8. Contact</h2>
          <p className="text-slate-600 leading-7">
            Heb je vragen over deze algemene voorwaarden? Neem contact op via:{" "}
            <a href="mailto:info@cvmaken.nu" className="text-emerald-700 underline underline-offset-2">
              info@cvmaken.nu
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
