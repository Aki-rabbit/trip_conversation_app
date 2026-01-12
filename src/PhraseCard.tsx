type PhraseCardProps = {
  localPhrase: string; // 現地の言葉
  nativePhrase: string; // 自分の言語（日本語）
};

export function PhraseCard({ localPhrase, nativePhrase }: PhraseCardProps) {
  return (
    <div
      style={{
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
