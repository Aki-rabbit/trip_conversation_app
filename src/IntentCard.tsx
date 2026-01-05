type IntentCardProps = {
  emoji: string;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
};

export function IntentCard({
  emoji,
  title,
  description,
  color,
  onClick,
}: IntentCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: "100%",
        padding: "16px 20px",
        borderRadius: 16,
        border: "none",
        background: "#fff",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        borderLeft: `4px solid ${color}`,
      }}
    >
      <span style={{ fontSize: 32 }}>{emoji}</span>
      <div style={{ flex: 1, textAlign: "left" }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#333" }}>
          {title}
        </div>
        <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>
          {description}
        </div>
      </div>
      <span style={{ fontSize: 20, color: "#ccc" }}>›</span>
    </button>
  );
}
