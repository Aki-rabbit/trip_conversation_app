import { PhraseCard } from "./PhraseCard";
import { PHRASES } from "./data/phrases";

function App() {
  const scene = "restaurant";
  const phrases = PHRASES.filter((p) => p.scene === scene);

  const first = phrases[0];

  if (!first) return <div>no phrases</div>;

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <PhraseCard
        localPhrase={first.localPhrase}
        nativePhrase={first.nativePhrase}
      />
    </div>
  );
}

export default App;
