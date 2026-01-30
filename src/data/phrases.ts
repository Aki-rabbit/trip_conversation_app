export type IntentKey = "thanks" | "greeting" | "sorry" | "please" | "goodbye";

export type Language = "it" | "de";

export type Phrase = {
  id: string;
  intent: IntentKey;
  language: Language;
  localPhrase: string;
  nativePhrase: string;
};

export type CustomIntent = {
  key: string;
  emoji: string;
  title: string;
  isCustom: true;
  createdAt: number;
};

export type CustomPhrase = {
  id: string;
  intent: string;
  language: Language;
  localPhrase: string;
  nativePhrase: string;
  isCustom: true;
  createdAt: number;
};

export const PHRASES: Phrase[] = [
  // ===== Italian (it) =====

  // greeting
  {
    id: "greeting-it-1",
    intent: "greeting",
    language: "it",
    localPhrase: "Buongiorno.",
    nativePhrase: "こんにちは",
  },
  {
    id: "greeting-it-2",
    intent: "greeting",
    language: "it",
    localPhrase: "Ciao.",
    nativePhrase: "やあ（カジュアル）",
  },
  {
    id: "greeting-it-3",
    intent: "greeting",
    language: "it",
    localPhrase: "Buonasera.",
    nativePhrase: "こんばんは",
  },

  // sorry
  {
    id: "sorry-it-1",
    intent: "sorry",
    language: "it",
    localPhrase: "Scusa.",
    nativePhrase: "ごめん（カジュアル）",
  },
  {
    id: "sorry-it-2",
    intent: "sorry",
    language: "it",
    localPhrase: "Mi dispiace.",
    nativePhrase: "申し訳ない",
  },

  // thanks
  {
    id: "thanks-it-1",
    intent: "thanks",
    language: "it",
    localPhrase: "Grazie.",
    nativePhrase: "ありがとう",
  },
  {
    id: "thanks-it-2",
    intent: "thanks",
    language: "it",
    localPhrase: "Grazie mille.",
    nativePhrase: "本当にありがとう",
  },

  // please
  {
    id: "please-it-1",
    intent: "please",
    language: "it",
    localPhrase: "Per favore.",
    nativePhrase: "お願いします",
  },
  {
    id: "please-it-2",
    intent: "please",
    language: "it",
    localPhrase: "Per piacere.",
    nativePhrase: "どうか（丁寧）",
  },

  // goodbye
  {
    id: "goodbye-it-1",
    intent: "goodbye",
    language: "it",
    localPhrase: "Arrivederci.",
    nativePhrase: "さようなら",
  },
  {
    id: "goodbye-it-2",
    intent: "goodbye",
    language: "it",
    localPhrase: "Ciao.",
    nativePhrase: "じゃあね",
  },

  // ===== German (de) =====

  // greeting
  {
    id: "greeting-de-1",
    intent: "greeting",
    language: "de",
    localPhrase: "Guten Tag.",
    nativePhrase: "こんにちは",
  },
  {
    id: "greeting-de-2",
    intent: "greeting",
    language: "de",
    localPhrase: "Hallo.",
    nativePhrase: "やあ（カジュアル）",
  },
  {
    id: "greeting-de-3",
    intent: "greeting",
    language: "de",
    localPhrase: "Guten Abend.",
    nativePhrase: "こんばんは",
  },

  // sorry
  {
    id: "sorry-de-1",
    intent: "sorry",
    language: "de",
    localPhrase: "Entschuldigung.",
    nativePhrase: "ごめん（カジュアル）",
  },
  {
    id: "sorry-de-2",
    intent: "sorry",
    language: "de",
    localPhrase: "Es tut mir leid.",
    nativePhrase: "申し訳ない",
  },

  // thanks
  {
    id: "thanks-de-1",
    intent: "thanks",
    language: "de",
    localPhrase: "Danke.",
    nativePhrase: "ありがとう",
  },
  {
    id: "thanks-de-2",
    intent: "thanks",
    language: "de",
    localPhrase: "Vielen Dank.",
    nativePhrase: "本当にありがとう",
  },

  // please
  {
    id: "please-de-1",
    intent: "please",
    language: "de",
    localPhrase: "Bitte.",
    nativePhrase: "お願いします",
  },
  {
    id: "please-de-2",
    intent: "please",
    language: "de",
    localPhrase: "Bitte schön.",
    nativePhrase: "どうか（丁寧）",
  },

  // goodbye
  {
    id: "goodbye-de-1",
    intent: "goodbye",
    language: "de",
    localPhrase: "Auf Wiedersehen.",
    nativePhrase: "さようなら",
  },
  {
    id: "goodbye-de-2",
    intent: "goodbye",
    language: "de",
    localPhrase: "Tschüss.",
    nativePhrase: "じゃあね",
  },
];
