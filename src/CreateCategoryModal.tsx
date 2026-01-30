import { useState } from "react";

type CreateCategoryModalProps = {
  onCreate: (emoji: string, name: string) => void;
  onClose: () => void;
};

export function CreateCategoryModal({
  onCreate,
  onClose,
}: CreateCategoryModalProps) {
  const [emoji, setEmoji] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (emoji.trim() && name.trim()) {
      onCreate(emoji.trim(), name.trim());
    }
  };

  const isValid = emoji.trim() && name.trim();

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
          background: "#fff",
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
          <div style={{ fontSize: 18, fontWeight: 700 }}>New Category</div>
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
            Emoji
          </label>
          <input
            type="text"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            placeholder="🍕"
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ddd",
              fontSize: 20,
              boxSizing: "border-box",
              textAlign: "center",
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
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Restaurant"
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
          Create
        </button>
      </div>
    </div>
  );
}
