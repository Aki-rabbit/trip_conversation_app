export type SceneKey = "restaurant";

export type Phrase = {
  id: string;
  scene: SceneKey;
  localPhrase: string;
  nativePhrase: string;
};

export const PHRASES: Phrase[] = [
  {
    id: "thanks-1",
    scene: "restaurant",
    localPhrase: "Grazie.",
    nativePhrase: "ありがとう",
  },
];
