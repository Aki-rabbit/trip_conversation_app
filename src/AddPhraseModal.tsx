import { useState } from "react";
import type { Language } from "./data/phrases";

type AddPhraseModalProps = {
  onAdd: (language: Language, localPhrase: string, nativePhrase: string) => void;
  onClose: () => void;
};

export function AddPhraseModal({ onAdd, onClose }: AddPhraseModalProps) {
  const [language, setLanguage] = useState<Language>("it");
  const [localPhrase, setLocalPhrase] = useState("");
  const [nativePhrase, setNativePhrase] = useState("");

  const handleSubmit = () => {
    if (localPhrase.trim() && nativePhrase.trim()) {
      onAdd(language, localPhrase.trim(), nativePhrase.trim());
    }
  };

  const isValid = localPhrase.trim() && nativePhrase.trim();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "var(--color-background)",
          borderRadius: 16,
          padding: 24,
          width: "100%",
          maxWidth: 320,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700 }}>Add Phrase</div>
          <button
            type="button"
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              fontSize: 20,
              color: "#888",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              display: "block",
              fontSize: 14,
              color: "#666",
              marginBottom: 6,
            }}
          >
            Language
          </label>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              type="button"
              onClick={() => setLanguage("it")}
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 8,
                border: language === "it" ? "2px solid #333" : "1px solid #ddd",
                background: language === "it" ? "#f5f5f5" : "#fff",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: language === "it" ? 600 : 400,
              }}
            >
              Italian
            </button>
            <button
              type="button"
              onClick={() => setLanguage("de")}
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 8,
                border: language === "de" ? "2px solid #333" : "1px solid #ddd",
                background: language === "de" ? "#f5f5f5" : "#fff",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: language === "de" ? 600 : 400,
              }}
            >
              German
            </button>
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              display: "block",
              fontSize: 14,
              color: "#666",
              marginBottom: 6,
            }}
          >
            Phrase
          </label>
          <input
            type="text"
            value={localPhrase}
            onChange={(e) => setLocalPhrase(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ddd",
              fontSize: 16,
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label
            style={{
              display: "block",
              fontSize: 14,
              color: "#666",
              marginBottom: 6,
            }}
          >
            Japanese
          </label>
          <input
            type="text"
            value={nativePhrase}
            onChange={(e) => setNativePhrase(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ddd",
              fontSize: 16,
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isValid}
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 10,
            border: "none",
            background: isValid ? "#333" : "#ccc",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            cursor: isValid ? "pointer" : "not-allowed",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
