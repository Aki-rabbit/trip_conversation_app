import { useState } from "react";

type PhraseCardProps = {
  localPhrase: string; // 現地の言葉
  nativePhrase: string; // 自分の言語（日本語）
};

export function PhraseCard({ localPhrase, nativePhrase }: PhraseCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const mainText = isFlipped ? nativePhrase : localPhrase;
  const subText = isFlipped ? localPhrase : nativePhrase;

  return (
    <button
      type="button"
      onClick={() => setIsFlipped((prev) => !prev)}
      style={{
        width: "100%",
        padding: "20px",
        borderRadius: 16,
        border: "none",
        background: "#fff",
        color: "var(--color-text-primary)",
        cursor: "pointer",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        {mainText}
      </div>
      <div
        style={{
          marginTop: 8,
          fontSize: 14,
          color: "var(--color-text-muted)",
        }}
      >
        {subText}
      </div>
    </button>
  );
}
