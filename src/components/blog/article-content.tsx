import { Lightbulb } from "lucide-react";
import type { Block } from "@/features/blog/types";

/**
 * Renders blog article blocks as semantic, styled HTML.
 * Uses brand colors and proper heading hierarchy (h2/h3) for on-page SEO.
 */
export function ArticleContent({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="scroll-mt-24 pt-4 text-2xl font-black tracking-[-0.02em] text-[#111113]"
              >
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
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[15px] leading-7 text-[#2E2E2C]">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#FB5B36]" />
                    {item}
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
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-2 border-l-[3px] border-[#C6F24E] bg-[#F8FCE8] py-3 pl-5 pr-4 text-lg font-semibold italic leading-7 text-[#111113]"
              >
                {block.text}
              </blockquote>
            );
          case "callout":
            return (
              <div
                key={i}
                className="my-2 flex gap-4 rounded-2xl border border-[#E5E3DA] bg-[#F2F1EC] p-5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#C6F24E] text-[#111113]">
                  <Lightbulb className="size-5" />
                </span>
                <div>
                  <p className="font-bold text-[#111113]">{block.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[#56564F]">{block.text}</p>
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
