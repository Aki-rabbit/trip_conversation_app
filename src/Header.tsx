type HeaderProps = {
  onNavigateHome: () => void;
  onNavigateHowToUse: () => void;
  showHowToUse?: boolean;
};

export function Header({
  onNavigateHome,
  onNavigateHowToUse,
  showHowToUse = true,
}: HeaderProps) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <button
        type="button"
        onClick={onNavigateHome}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: 20,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Trip Phrases
      </button>

      {showHowToUse && (
        <button
          type="button"
          onClick={onNavigateHowToUse}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 14,
            cursor: "pointer",
            opacity: 0.8,
          }}
        >
          使い方
        </button>
      )}
    </header>
  );
}
