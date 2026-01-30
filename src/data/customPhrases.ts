import type { CustomPhrase, Language } from "./phrases";

const STORAGE_KEY = "customPhrases";

export function getCustomPhrases(): CustomPhrase[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCustomPhrase(phrase: {
  intent: string;
  language: Language;
  localPhrase: string;
  nativePhrase: string;
}): CustomPhrase {
  const customPhrases = getCustomPhrases();
  const newPhrase: CustomPhrase = {
    ...phrase,
    id: `custom-${Date.now()}`,
    isCustom: true,
    createdAt: Date.now(),
  };
  customPhrases.push(newPhrase);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customPhrases));
  return newPhrase;
}

export function deleteCustomPhrase(id: string): void {
  const customPhrases = getCustomPhrases().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customPhrases));
}
