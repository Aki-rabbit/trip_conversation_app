import { useState } from "react";
import { PhraseCard } from "./PhraseCard";
import { PHRASES } from "./data/phrases";
import type { SceneKey } from "./data/phrases";

type Screen = { name: "sceneSelect" } | { name: "scene"; scene: SceneKey };

function App() {
  const [screen, setScreen] = useState<Screen>({ name: "sceneSelect" });

  if (screen.name === "sceneSelect") {
    return (
      <div
        style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}
      >
        <button
          type="button"
          onClick={() => setScreen({ name: "scene", scene: "restaurant" })}
          style={{
            padding: "14px 18px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Restaurant
        </button>
      </div>
    );
  }

  const phrases = PHRASES.filter((p) => p.scene === screen.scene);
  const first = phrases[0];

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ width: "min(520px, 92vw)", display: "grid", gap: 16 }}>
        <button
          type="button"
          onClick={() => setScreen({ name: "sceneSelect" })}
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

        {first ? (
          <PhraseCard
            localPhrase={first.localPhrase}
            nativePhrase={first.nativePhrase}
          />
        ) : (
          <div style={{ color: "#fff" }}>no phrases</div>
        )}
      </div>
    </div>
  );
}

export default App;
