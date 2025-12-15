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
        width: "min(520px, 92vw)",
        padding: "28px 24px",
        borderRadius: 18,
        border: "1px solid rgba(0,0,0,0.1)",
        background: "#fff",
        color: "#111",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 44,
          fontWeight: 700,
          lineHeight: 1.1,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {mainText}
      </div>
      <div style={{ marginTop: 14, fontSize: 16, opacity: 0.7 }}>{subText}</div>
    </button>
  );
}
