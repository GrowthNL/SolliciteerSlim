import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { Lightbulb, Check, X } from "lucide-react";
import { headingId, type Block } from "@/features/blog/types";

/**
 * Parses a limited inline syntax inside text:
 *  - [label](/url)  -> internal/external link (anchor or money page)
 *  - **bold**       -> strong
 * Everything else is plain text. Keeps content data-driven but allows
 * internal links to other blogs and money pages.
 */
function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Split on links first, then handle bold within the remaining text.
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;

  const pushText = (s: string) => {
    const parts = s.split(/(\*\*[^*]+\*\*)/g);
    parts.forEach((part) => {
      if (!part) return;
      if (part.startsWith("**") && part.endsWith("**")) {
        nodes.push(
          <strong key={`b-${key++}`} className="font-bold text-[#111113]">
            {part.slice(2, -2)}
          </strong>,
        );
      } else {
        nodes.push(<Fragment key={`t-${key++}`}>{part}</Fragment>);
      }
    });
  };

  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > last) pushText(text.slice(last, m.index));
    const [, label, href] = m;
    nodes.push(
      <Link
        key={`l-${key++}`}
        href={href}
        className="font-semibold text-[#111113] underline decoration-[#C6F24E] decoration-2 underline-offset-2 transition-colors hover:text-[#FB5B36]"
      >
        {label}
      </Link>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) pushText(text.slice(last));
  return nodes;
}

export function ArticleContent({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} id={headingId(block.text)} className="scroll-mt-28 pt-4 text-2xl font-black tracking-[-0.02em] text-[#111113]">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="pt-2 text-lg font-bold text-[#111113]">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-[15px] leading-7 text-[#2E2E2C]">
                {renderInline(block.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[15px] leading-7 text-[#2E2E2C]">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#FB5B36]" />
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[15px] leading-7 text-[#2E2E2C]">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#111113] text-xs font-black text-[#C6F24E]">
                      {j + 1}
                    </span>
                    <span className="pt-0.5">{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i} className="my-2 border-l-[3px] border-[#C6F24E] bg-[#F8FCE8] py-3 pl-5 pr-4 text-lg font-semibold italic leading-7 text-[#111113]">
                {renderInline(block.text)}
              </blockquote>
            );
          case "callout":
            return (
              <div key={i} className="my-2 flex gap-4 rounded-2xl border border-[#E5E3DA] bg-[#F2F1EC] p-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#C6F24E] text-[#111113]">
                  <Lightbulb className="size-5" />
                </span>
                <div>
                  <p className="font-bold text-[#111113]">{block.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[#56564F]">{renderInline(block.text)}</p>
                </div>
              </div>
            );
          case "stats":
            return (
              <div key={i} className="my-4">
                {block.caption && (
                  <p className="mb-3 font-mono-label text-xs text-[#9A9A92]">{block.caption}</p>
                )}
                <div className="grid gap-4 sm:grid-cols-3">
                  {block.items.map((s, j) => (
                    <div key={j} className="rounded-2xl border border-[#E5E3DA] bg-[#111113] p-5 text-center">
                      <div className="text-3xl font-black tracking-tight text-[#C6F24E]">{s.value}</div>
                      <div className="mt-1 text-xs leading-5 text-[#9A9A92]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          case "table":
            return (
              <div key={i} className="my-4 overflow-x-auto rounded-2xl border border-[#E5E3DA]">
                {block.caption && (
                  <p className="border-b border-[#E5E3DA] bg-[#F8F8F6] px-4 py-2 text-xs font-bold text-[#56564F]">
                    {block.caption}
                  </p>
                )}
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[#F2F1EC]">
                      {block.headers.map((h, j) => (
                        <th key={j} className="px-4 py-2.5 font-bold text-[#111113]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-t border-[#E5E3DA]">
                        {row.map((cell, c) => (
                          <td key={c} className="px-4 py-2.5 align-top leading-6 text-[#2E2E2C]">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "compare":
            return (
              <div key={i} className="my-4">
                {block.title && (
                  <p className="mb-3 font-bold text-[#111113]">{block.title}</p>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#C6F24E] bg-[#F8FCE8] p-5">
                    <p className="flex items-center gap-2 font-bold text-[#111113]">
                      <Check className="size-4 text-[#111113]" /> {block.good.label}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {block.good.items.map((it, j) => (
                        <li key={j} className="flex gap-2 text-sm leading-6 text-[#2E2E2C]">
                          <Check className="mt-1 size-3.5 shrink-0 text-[#111113]" /> {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-[#FFD9CC] bg-[#FFF3EF] p-5">
                    <p className="flex items-center gap-2 font-bold text-[#111113]">
                      <X className="size-4 text-[#FB5B36]" /> {block.bad.label}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {block.bad.items.map((it, j) => (
                        <li key={j} className="flex gap-2 text-sm leading-6 text-[#56564F]">
                          <X className="mt-1 size-3.5 shrink-0 text-[#FB5B36]" /> {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
