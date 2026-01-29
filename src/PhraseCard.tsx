import type { Language } from "./data/phrases";

type PhraseCardProps = {
  localPhrase: string; // 現地の言葉
  nativePhrase: string; // 自分の言語（日本語）
  language: Language; // 言語コード
};

export function PhraseCard({ localPhrase, nativePhrase, language }: PhraseCardProps) {
  const speak = () => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(localPhrase);
    utterance.lang = language === "it" ? "it-IT" : "de-DE";
    utterance.rate = 0.85;
    speechSynthesis.speak(utterance);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        padding: "20px",
        borderRadius: 16,
        border: "none",
        background: "#fff",
        color: "var(--color-text-primary)",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <button
        type="button"
        onClick={speak}
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          padding: 4,
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#888"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <rect x="2" y="8" width="4" height="8" rx="1" />
          <polygon points="6,8 12,4 12,20 6,16" />
          <path d="M15 8c1.5 1.5 1.5 6.5 0 8" />
          <path d="M18 5c3 3 3 11 0 14" />
        </svg>
      </button>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        {localPhrase}
      </div>
      <div
        style={{
          marginTop: 8,
          fontSize: 14,
          color: "var(--color-text-muted)",
        }}
      >
        {nativePhrase}
      </div>
    </div>
  );
}
