export type IntentKey = "thanks";

export type Phrase = {
  id: string;
  intent: IntentKey;
  localPhrase: string;
  nativePhrase: string;
};

export const PHRASES: Phrase[] = [
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
];
