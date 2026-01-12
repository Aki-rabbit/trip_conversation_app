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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 16px 16px",
      }}
    >
      {/* 上段: 言語切り替え & 使い方ボタン */}
      <div
        style={{
          width: "100%",
          maxWidth: 360,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <div
          style={{
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
              boxShadow:
                selectedLanguage === "it"
                  ? "0 1px 3px rgba(0,0,0,0.1)"
                  : "none",
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
              boxShadow:
                selectedLanguage === "de"
                  ? "0 1px 3px rgba(0,0,0,0.1)"
                  : "none",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            🇩🇪 DE
          </button>
        </div>

        {showHowToUse ? (
          <button
            type="button"
            onClick={onNavigateHowToUse}
            style={{
              background: "none",
              border: "none",
              color: "#333",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            使い方
          </button>
        ) : (
          <div />
        )}
      </div>

      {/* 下段: タイトル */}
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
