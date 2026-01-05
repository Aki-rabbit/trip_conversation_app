import { useState } from "react";
import { Header } from "./Header";
import { IntentCard } from "./IntentCard";
import { PhraseCard } from "./PhraseCard";
import { PHRASES } from "./data/phrases";
import type { IntentKey } from "./data/phrases";

const INTENTS: {
  key: IntentKey;
  emoji: string;
  title: string;
  description: string;
  color: string;
}[] = [
  {
    key: "greeting",
    emoji: "😊",
    title: "Greeting",
    description: "Let's go first.",
    color: "#A8D5A2",
  },
  {
    key: "thanks",
    emoji: "🙏",
    title: "Thanks",
    description: "Let's go first.",
    color: "#F5D98E",
  },
  {
    key: "sorry",
    emoji: "🙇",
    title: "Sorry",
    description: "Let's give sorry.",
    color: "#A7C7E7",
  },
  {
    key: "please",
    emoji: "🙌",
    title: "Please",
    description: "Let's give please.",
    color: "#FFCBA4",
  },
  {
    key: "goodbye",
    emoji: "👋",
    title: "Goodbye",
    description: "Let's goodbye.",
    color: "#FFE5A0",
  },
];

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
            display: "flex",
            justifyContent: "center",
            padding: "24px 16px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 360,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {INTENTS.map((intent) => (
              <IntentCard
                key={intent.key}
                emoji={intent.emoji}
                title={intent.title}
                description={intent.description}
                color={intent.color}
                onClick={() =>
                  setScreen({ name: "intent", intent: intent.key })
                }
              />
            ))}
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
            display: "flex",
            justifyContent: "center",
            padding: "24px 16px",
          }}
        >
          <div
            style={{ width: "100%", maxWidth: 360, display: "grid", gap: 24 }}
          >
            <div style={{ lineHeight: 1.8 }}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <button
                  type="button"
                  onClick={() => setScreen({ name: "intentSelect" })}
                  style={{
                    alignSelf: "flex-start",
                    padding: "8px 12px",
                    borderRadius: 8,
                    border: "none",
                    background: "transparent",
                    color: "var(--color-text-secondary)",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  ← Back
                </button>

                <h1
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    marginBottom: 16,
                    color: "var(--color-text-primary)",
                  }}
                >
                  使い方
                </h1>

                <section style={{ marginBottom: 32 }}>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      marginBottom: 12,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    このアプリについて
                  </h2>
                  <p
                    style={{
                      fontSize: 16,
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    旅行先で「気持ちの一言」を現地の言葉で伝えるためのツールです。
                    <br />
                    完璧な会話ではなく、短い一言で相手に敬意を示すことを目的としています。
                  </p>
                </section>

                <section style={{ marginBottom: 32 }}>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      marginBottom: 12,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    使い方
                  </h2>
                  <ol
                    style={{
                      fontSize: 16,
                      color: "var(--color-text-secondary)",
                      paddingLeft: 20,
                    }}
                  >
                    <li style={{ marginBottom: 8 }}>
                      伝えたい「意図」を選ぶ（挨拶・感謝・謝罪など）
                    </li>
                    <li style={{ marginBottom: 8 }}>
                      表示されたフレーズを選ぶ
                    </li>
                    <li style={{ marginBottom: 8 }}>
                      カードをタップすると現地語 ↔ 日本語が切り替わる
                    </li>
                    <li style={{ marginBottom: 8 }}>実際の場面で使ってみる</li>
                  </ol>
                </section>

                <section>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      marginBottom: 12,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    フレーズ分類について
                  </h2>
                  <p
                    style={{
                      fontSize: 16,
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    場所ではなく「何を伝えたいか」でフレーズを分類しています。
                    <br />
                    「感謝」は、レストランでもホテルでも同じ言葉を使えます。
                  </p>
                </section>
              </div>
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
          display: "flex",
          justifyContent: "center",
          padding: "24px 16px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 360, display: "grid", gap: 12 }}>
          <button
            type="button"
            onClick={() => setScreen({ name: "intentSelect" })}
            style={{
              justifySelf: "start",
              padding: "10px 12px",
              borderRadius: 10,
              border: "none",
              background: "transparent",
              color: "var(--color-text-secondary)",
              cursor: "pointer",
              fontWeight: 600,
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
            <div style={{ color: "var(--color-text-secondary)" }}>
              no phrases
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
