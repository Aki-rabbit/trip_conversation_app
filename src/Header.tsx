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
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px 24px 16px",
      }}
    >
      {showHowToUse && (
        <button
          type="button"
          onClick={onNavigateHowToUse}
          style={{
            position: "absolute",
            top: 32,
            right: 24,
            background: "none",
            border: "none",
            color: "#333",
            fontSize: 20,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          使い方
        </button>
      )}

      <button
        type="button"
        onClick={onNavigateHome}
        style={{
          background: "none",
          border: "none",
          color: "#333",
          fontSize: 28,
          fontWeight: 700,
          cursor: "pointer",
          marginBottom: 4,
        }}
      >
        Trip Phrases
      </button>
      <p
        style={{
          margin: 0,
          color: "#666",
          fontSize: 14,
        }}
      >
        A quick phrase for your trip.
      </p>
    </header>
  );
}
