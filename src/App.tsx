import { useState } from "react";
import { Header } from "./Header";
import { PhraseCard } from "./PhraseCard";
import { PHRASES } from "./data/phrases";
import type { IntentKey } from "./data/phrases";

type Screen =
  | { name: "intentSelect" }
  | { name: "intent"; intent: IntentKey }
  | { name: "howToUse" };

function App() {
  const [screen, setScreen] = useState<Screen>({ name: "intentSelect" });

  if (screen.name === "intentSelect") {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Header
          onNavigateHome={() => setScreen({ name: "intentSelect" })}
          onNavigateHowToUse={() => setScreen({ name: "howToUse" })}
        />
        <div
          style={{
            minHeight: "calc(100vh - 64px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button
              type="button"
              onClick={() => setScreen({ name: "intent", intent: "greeting" })}
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
              Greeting
            </button>
            <button
              type="button"
              onClick={() => setScreen({ name: "intent", intent: "thanks" })}
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
            <button
              type="button"
              onClick={() => setScreen({ name: "intent", intent: "sorry" })}
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
              Sorry
            </button>
            <button
              type="button"
              onClick={() => setScreen({ name: "intent", intent: "please" })}
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
              Please
            </button>
            <button
              type="button"
              onClick={() => setScreen({ name: "intent", intent: "goodbye" })}
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
              Goodbye
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen.name === "howToUse") {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Header
          onNavigateHome={() => setScreen({ name: "intentSelect" })}
          onNavigateHowToUse={() => setScreen({ name: "howToUse" })}
          showHowToUse={false}
        />
        <div
          style={{
            minHeight: "calc(100vh - 64px)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div style={{ width: "min(520px, 92vw)", display: "grid", gap: 24 }}>
            <div style={{ color: "#fff", lineHeight: 1.8 }}>
              <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
                使い方
              </h1>

              <section style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>
                  このアプリについて
                </h2>
                <p style={{ fontSize: 16, opacity: 0.9 }}>
                  旅行先で「気持ちの一言」を現地の言葉で伝えるためのツールです。
                  <br />
                  完璧な会話ではなく、短い一言で相手に敬意を示すことを目的としています。
                </p>
              </section>

              <section style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>
                  使い方
                </h2>
                <ol style={{ fontSize: 16, opacity: 0.9, paddingLeft: 20 }}>
                  <li style={{ marginBottom: 8 }}>
                    伝えたい「意図」を選ぶ（挨拶・感謝・謝罪など）
                  </li>
                  <li style={{ marginBottom: 8 }}>表示されたフレーズを選ぶ</li>
                  <li style={{ marginBottom: 8 }}>
                    カードをタップすると現地語 ↔ 日本語が切り替わる
                  </li>
                  <li style={{ marginBottom: 8 }}>実際の場面で使ってみる</li>
                </ol>
              </section>

              <section>
                <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>
                  意図（Intent）とは
                </h2>
                <p style={{ fontSize: 16, opacity: 0.9 }}>
                  場所ではなく「何を伝えたいか」でフレーズを分類しています。
                  <br />
                  「感謝」は、レストランでもホテルでも同じ言葉を使えます。
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen.name !== "intent") return null;

  const phrases = PHRASES.filter((p) => p.intent === screen.intent);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header
        onNavigateHome={() => setScreen({ name: "intentSelect" })}
        onNavigateHowToUse={() => setScreen({ name: "howToUse" })}
      />
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "grid",
          placeItems: "center",
        }}
      >
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
    </div>
  );
}

export default App;
