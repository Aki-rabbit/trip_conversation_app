import { PhraseCard } from "./PhraseCard";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
      }}
    >
      <PhraseCard localPhrase="Grazie." nativePhrase="ありがとう" />
    </div>
  );
}

export default App;
