/**
 * Renders a JSON-LD <script> block. Structured data helps Google rich results
 * and lets AI answer engines (GEO/LLM) parse and cite the content reliably.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
