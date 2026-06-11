import assert from "node:assert/strict";
import test from "node:test";
import {
  createEmptyResumeDocument,
  RESUME_DOCUMENT_VERSION,
  validateResumeDocument,
} from "./model.ts";

test("maakt een geldig leeg CV-document", () => {
  const document = createEmptyResumeDocument();
  const result = validateResumeDocument(document);

  assert.equal(document.version, RESUME_DOCUMENT_VERSION);
  assert.equal(result.success, true);
});

test("accepteert een ingevuld document", () => {
  const document = createEmptyResumeDocument();
  document.personalDetails.firstName = "Sophie";
  document.workExperience.push({
    id: "experience-1",
    jobTitle: "Marketing specialist",
    company: "Voorbeeld BV",
    location: "Utrecht",
    startDate: "2023-01",
    endDate: "",
    isCurrent: true,
    bullets: ["Verhoogde de conversie met meetbare experimenten."],
  });

  const result = validateResumeDocument(document);
  assert.equal(result.success, true);
});

test("weigert onbekende modelversies", () => {
  const document = { ...createEmptyResumeDocument(), version: 2 };
  const result = validateResumeDocument(document);

  assert.equal(result.success, false);
  if (!result.success) assert.deepEqual(result.issues[0], {
    path: "version",
    message: "Alleen CV-modelversie 1 wordt ondersteund.",
  });
});

test("rapporteert het pad van ongeldige geneste velden", () => {
  const document = createEmptyResumeDocument() as unknown as Record<string, unknown>;
  document.workExperience = [{
    id: "experience-1",
    jobTitle: "Developer",
    company: "Voorbeeld BV",
    location: "Amsterdam",
    startDate: "2024-01",
    endDate: "",
    isCurrent: "ja",
    bullets: [42],
  }];

  const result = validateResumeDocument(document);
  assert.equal(result.success, false);
  if (!result.success) {
    assert.ok(result.issues.some((issue) => issue.path === "workExperience.0.isCurrent"));
    assert.ok(result.issues.some((issue) => issue.path === "workExperience.0.bullets.0"));
  }
});
