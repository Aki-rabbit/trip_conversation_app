import type { CustomIntent } from "./data/phrases";

const DEFAULT_INTENTS = [
  { key: "greeting", emoji: "😊", title: "Greeting" },
  { key: "thanks", emoji: "🙏", title: "Thanks" },
  { key: "sorry", emoji: "🙇", title: "Sorry" },
  { key: "please", emoji: "🙌", title: "Please" },
  { key: "goodbye", emoji: "👋", title: "Goodbye" },
];

type SelectIntentModalProps = {
  customIntents: CustomIntent[];
  onSelect: (intentKey: string) => void;
  onNewCategory: () => void;
  onClose: () => void;
};

export function SelectIntentModal({
  customIntents,
  onSelect,
  onNewCategory,
  onClose,
}: SelectIntentModalProps) {
  const allIntents = [
    ...DEFAULT_INTENTS,
    ...customIntents.map((i) => ({ key: i.key, emoji: i.emoji, title: i.title })),
  ];

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
          <div style={{ fontSize: 18, fontWeight: 700 }}>Select Category</div>
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

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {allIntents.map((intent) => (
            <button
              key={intent.key}
              type="button"
              onClick={() => onSelect(intent.key)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 12,
                borderRadius: 10,
                border: "1px solid #eee",
                background: "#fff",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              <span style={{ fontSize: 20 }}>{intent.emoji}</span>
              <span>{intent.title}</span>
            </button>
          ))}

          <div
            style={{
              borderTop: "1px solid #eee",
              margin: "8px 0",
            }}
          />

          <button
            type="button"
            onClick={onNewCategory}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: 12,
              borderRadius: 10,
              border: "1px dashed #ccc",
              background: "transparent",
              cursor: "pointer",
              fontSize: 16,
              color: "#888",
            }}
          >
            <span style={{ fontSize: 20 }}>+</span>
            <span>New Category</span>
          </button>
        </div>
      </div>
    </div>
  );
}
