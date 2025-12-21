export type IntentKey = "thanks" | "greeting" | "sorry" | "please" | "goodbye";

export type Phrase = {
  id: string;
  intent: IntentKey;
  localPhrase: string;
  nativePhrase: string;
};

export const PHRASES: Phrase[] = [
  // greeting
  {
    id: "greeting-it-1",
    intent: "greeting",
    localPhrase: "Buongiorno.",
    nativePhrase: "こんにちは",
  },
  {
    id: "greeting-it-2",
    intent: "greeting",
    localPhrase: "Ciao.",
    nativePhrase: "やあ（カジュアル）",
  },
  {
    id: "greeting-it-3",
    intent: "greeting",
    localPhrase: "Buonasera.",
    nativePhrase: "こんばんは",
  },

  // sorry
  {
    id: "sorry-it-1",
    intent: "sorry",
    localPhrase: "Scusa.",
    nativePhrase: "ごめん（カジュアル）",
  },
  {
    id: "sorry-it-2",
    intent: "sorry",
    localPhrase: "Mi dispiace.",
    nativePhrase: "申し訳ない",
  },

  // thanks
  {
    id: "thanks-it-1",
    intent: "thanks",
    localPhrase: "Grazie.",
    nativePhrase: "ありがとう",
  },
  {
    id: "thanks-it-2",
    intent: "thanks",
    localPhrase: "Grazie mille.",
    nativePhrase: "本当にありがとう",
  },

  // please
  {
    id: "please-it-1",
    intent: "please",
    localPhrase: "Per favore.",
    nativePhrase: "お願いします",
  },
  {
    id: "please-it-2",
    intent: "please",
    localPhrase: "Per piacere.",
    nativePhrase: "どうか（丁寧）",
  },

  // goodbye
  {
    id: "goodbye-it-1",
    intent: "goodbye",
    localPhrase: "Arrivederci.",
    nativePhrase: "さようなら",
  },
  {
    id: "goodbye-it-2",
    intent: "goodbye",
    localPhrase: "Ciao.",
    nativePhrase: "じゃあね",
  },
];
