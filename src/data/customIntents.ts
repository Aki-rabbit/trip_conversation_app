import type { CustomIntent } from "./phrases";

const STORAGE_KEY = "customIntents";

export function getCustomIntents(): CustomIntent[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCustomIntent(intent: {
  emoji: string;
  title: string;
}): CustomIntent {
  const customIntents = getCustomIntents();
  const newIntent: CustomIntent = {
    ...intent,
    key: `custom-${Date.now()}`,
    isCustom: true,
    createdAt: Date.now(),
  };
  customIntents.push(newIntent);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customIntents));
  return newIntent;
}

export function deleteCustomIntent(key: string): void {
  const customIntents = getCustomIntents().filter((i) => i.key !== key);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customIntents));
}
