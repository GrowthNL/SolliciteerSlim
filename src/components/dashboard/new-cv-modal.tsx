"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FileText, Upload, Sparkles, X, ArrowRight, Loader2 } from "lucide-react";
import { importCvFromFile, importCvFromText } from "@/app/actions/cv-import";

type Props = {
  onClose?: () => void;
  initialStep?: "choose" | "import";
};

export function NewCvModal({ onClose, initialStep = "choose" }: Props) {
  const router = useRouter();
  const [step, setStep] = useState<"choose" | "import">(initialStep);
  const [importMethod, setImportMethod] = useState<"file" | "paste">("file");
  const [pastedText, setPastedText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const fileRef = useRef<HTMLInputElement>(null);

  function handleImportFile() {
    setError(null);
    const file = fileRef.current?.files?.[0];
    if (!file) { setError("Selecteer eerst een bestand."); return; }

    startTransition(async () => {
      const fd = new FormData();
      fd.append("file", file);
      const result = await importCvFromFile(fd);
      if ("error" in result) { setError(result.error); return; }
      router.push(`/dashboard/cv/${result.resumeId}`);
    });
  }

  function handleImportPaste() {
    setError(null);
    if (!pastedText.trim()) { setError("Plak eerst je cv-tekst."); return; }

    startTransition(async () => {
      const result = await importCvFromText(pastedText);
      if ("error" in result) { setError(result.error); return; }
      router.push(`/dashboard/cv/${result.resumeId}`);
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#111113]/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-3xl border border-[#E5E3DA] bg-white p-8 shadow-2xl">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full text-[#9A9A92] transition-colors hover:bg-[#F2F1EC] hover:text-[#111113]"
          >
            <X className="size-4" />
          </button>
        )}

        {step === "choose" ? (
          <>
            <h2 className="text-2xl font-black tracking-[-0.03em] text-[#111113]">
              Hoe wil je beginnen?
            </h2>
            <p className="mt-1.5 text-sm text-[#56564F]">
              Kies hoe je je nieuwe cv wilt opstellen.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {/* Blank */}
              <Link
                href="/dashboard/cv/new?start=blank"
                className="group flex items-start gap-4 rounded-2xl border-2 border-[#E5E3DA] p-5 text-left transition-all hover:border-[#C6F24E] hover:bg-[#F8FCE8]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#F2F1EC] transition-colors group-hover:bg-[#C6F24E]">
                  <FileText className="size-5 text-[#111113]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#111113]">Begin met leeg cv</span>
                    <span className="rounded-full bg-[#FB5B36] px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white">
                      Aanbevolen
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-[#9A9A92]">
                    Vul stap voor stap in met AI-hulp bij elke sectie.
                  </p>
                </div>
                <ArrowRight className="size-4 shrink-0 self-center text-[#9A9A92] transition-colors group-hover:text-[#111113]" />
              </Link>

              {/* Example */}
              <Link
                href="/dashboard/cv/new?start=example"
                className="group flex items-start gap-4 rounded-2xl border-2 border-[#E5E3DA] p-5 text-left transition-all hover:border-[#111113] hover:bg-[#F8F8F6]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#F2F1EC] transition-colors group-hover:bg-[#111113]">
                  <Sparkles className="size-5 text-[#111113] transition-colors group-hover:text-[#C6F24E]" />
                </div>
                <div className="flex-1">
                  <span className="font-bold text-[#111113]">Start met een voorbeeld</span>
                  <p className="mt-0.5 text-sm text-[#9A9A92]">
                    Begin met een volledig ingevuld voorbeeldcv en pas het aan.
                  </p>
                </div>
                <ArrowRight className="size-4 shrink-0 self-center text-[#9A9A92] transition-colors group-hover:text-[#111113]" />
              </Link>

              {/* Import */}
              <Link
                href="/dashboard/cv/new?start=import"
                onClick={() => setStep("import")}
                className="group flex items-start gap-4 rounded-2xl border-2 border-[#E5E3DA] p-5 text-left transition-all hover:border-[#111113] hover:bg-[#F8F8F6]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#F2F1EC] transition-colors group-hover:bg-[#111113]">
                  <Upload className="size-5 text-[#111113] transition-colors group-hover:text-[#F2F1EC]" />
                </div>
                <div className="flex-1">
                  <span className="font-bold text-[#111113]">Importeer bestaand cv</span>
                  <p className="mt-0.5 text-sm text-[#9A9A92]">
                    Upload een PDF of .txt, of plak je cv-tekst. AI haalt de gegevens eruit.
                  </p>
                </div>
                <ArrowRight className="size-4 shrink-0 self-center text-[#9A9A92] transition-colors group-hover:text-[#111113]" />
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link
              href="/dashboard/cv/new"
              onClick={() => { setStep("choose"); setError(null); }}
              className="mb-4 flex items-center gap-1.5 text-sm font-semibold text-[#9A9A92] transition-colors hover:text-[#111113]"
            >
              ← Terug
            </Link>

            <h2 className="text-2xl font-black tracking-[-0.03em] text-[#111113]">
              Importeer je cv
            </h2>
            <p className="mt-1.5 text-sm text-[#56564F]">
              AI leest je cv en vult automatisch alle velden in. Daarna kun je alles bewerken.
            </p>

            {/* Toggle: file vs paste */}
            <div className="mt-5 flex gap-2">
              <button
                onClick={() => setImportMethod("file")}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  importMethod === "file"
                    ? "bg-[#111113] text-[#F2F1EC]"
                    : "border border-[#E5E3DA] text-[#56564F] hover:border-[#111113]"
                }`}
              >
                Bestand uploaden
              </button>
              <button
                onClick={() => setImportMethod("paste")}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  importMethod === "paste"
                    ? "bg-[#111113] text-[#F2F1EC]"
                    : "border border-[#E5E3DA] text-[#56564F] hover:border-[#111113]"
                }`}
              >
                Tekst plakken
              </button>
            </div>

            {importMethod === "file" ? (
              <div className="mt-5">
                <label
                  htmlFor="cv-file-upload"
                  className="flex cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-[#DDDBD1] bg-[#F8F8F6] p-8 text-center transition-colors hover:border-[#111113] hover:bg-[#F2F1EC]"
                >
                  <Upload className="size-8 text-[#9A9A92]" />
                  <div>
                    <span className="font-semibold text-[#111113]">Klik om een bestand te kiezen</span>
                    <p className="mt-0.5 text-xs text-[#9A9A92]">PDF of .txt · max 5 MB</p>
                  </div>
                  <input
                    id="cv-file-upload"
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.txt,text/plain,application/pdf"
                    className="hidden"
                  />
                </label>

                {error && (
                  <p className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </p>
                )}

                <button
                  onClick={handleImportFile}
                  disabled={isPending}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#111113] px-6 py-3.5 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C] disabled:opacity-60"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      AI verwerkt je cv…
                    </>
                  ) : (
                    <>
                      <Upload className="size-4" />
                      Importeren & bewerken
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="mt-5">
                <textarea
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                  rows={8}
                  placeholder="Plak hier de tekst van je huidige cv…"
                  className="w-full resize-none rounded-2xl border border-[#DDDBD1] bg-[#F8F8F6] px-4 py-3 text-sm text-[#111113] placeholder:text-[#9A9A92] focus:border-[#111113] focus:bg-white focus:outline-none transition-colors"
                />

                {error && (
                  <p className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </p>
                )}

                <button
                  onClick={handleImportPaste}
                  disabled={isPending}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#111113] px-6 py-3.5 text-sm font-bold text-[#F2F1EC] transition-colors hover:bg-[#2E2E2C] disabled:opacity-60"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      AI verwerkt je cv…
                    </>
                  ) : (
                    <>
                      <Sparkles className="size-4" />
                      Importeren & bewerken
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
