import type { Language } from "./data/phrases";

type HeaderProps = {
  onNavigateHome: () => void;
  onNavigateHowToUse: () => void;
  showHowToUse?: boolean;
  selectedLanguage: Language;
  onLanguageChange: (lang: Language) => void;
};

export function Header({
  onNavigateHome,
  onNavigateHowToUse,
  showHowToUse = true,
  selectedLanguage,
  onLanguageChange,
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
      <div
        style={{
          position: "absolute",
          top: 32,
          left: 24,
          display: "flex",
          gap: 4,
          background: "#f0f0f0",
          borderRadius: 8,
          padding: 4,
        }}
      >
        <button
          type="button"
          onClick={() => onLanguageChange("it")}
          style={{
            padding: "6px 12px",
            border: "none",
            borderRadius: 6,
            background: selectedLanguage === "it" ? "#fff" : "transparent",
            boxShadow: selectedLanguage === "it" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          🇮🇹 IT
        </button>
        <button
          type="button"
          onClick={() => onLanguageChange("de")}
          style={{
            padding: "6px 12px",
            border: "none",
            borderRadius: 6,
            background: selectedLanguage === "de" ? "#fff" : "transparent",
            boxShadow: selectedLanguage === "de" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          🇩🇪 DE
        </button>
      </div>

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
