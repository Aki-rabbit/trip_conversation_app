import { useState } from "react";
import { PhraseCard } from "./PhraseCard";
import { PHRASES } from "./data/phrases";
import type { IntentKey } from "./data/phrases";

type Screen = { name: "intentSelect" } | { name: "intent"; intent: IntentKey };

function App() {
  const [screen, setScreen] = useState<Screen>({ name: "intentSelect" });

  if (screen.name === "intentSelect") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          onClick={() => {
            setScreen({ name: "intent", intent: "thanks" });
          }}
          style={{
            padding: "14px 18px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Thanks
        </button>
      </div>
    );
  }

  // この時点で screen.name は必ず "intent"
  if (screen.name !== "intent") return null;

  const phrases = PHRASES.filter((p) => p.intent === screen.intent);

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ width: "min(520px, 92vw)", display: "grid", gap: 16 }}>
        <button
          type="button"
          onClick={() => setScreen({ name: "intentSelect" })}
          style={{
            justifySelf: "start",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>

        {phrases.length > 0 ? (
          phrases.map((phrase) => (
            <PhraseCard
              key={phrase.id}
              localPhrase={phrase.localPhrase}
              nativePhrase={phrase.nativePhrase}
            />
          ))
        ) : (
          <div style={{ color: "#fff" }}>no phrases</div>
        )}
      </div>
    </div>
  );
}

export default App;
