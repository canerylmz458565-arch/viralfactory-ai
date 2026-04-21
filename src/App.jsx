import { useState } from "react";

export default function App() {
  const [trend, setTrend] = useState("");
  const [result, setResult] = useState(null);

  function generate() {
    setResult({
      title: `${trend} Explained in 30 Seconds`,
      hook: "This will go viral...",
      script: `Breaking down ${trend} in simple terms.`,
      score: Math.floor(Math.random() * 25) + 75
    });
  }

  return (
    <div style={{ padding: 20, background: "#0f0f0f", color: "#fff", minHeight: "100vh" }}>
      <h1>🔥 ViralFactory AI</h1>

      <input
        placeholder="Trend yaz..."
        value={trend}
        onChange={(e) => setTrend(e.target.value)}
        style={{ padding: 10, width: "70%" }}
      />

      <button onClick={generate} style={{ padding: 10, marginLeft: 10 }}>
        Üret
      </button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h2>{result.title}</h2>
          <p>{result.hook}</p>
          <pre>{result.script}</pre>
          <h3>Score: {result.score}</h3>
        </div>
      )}
    </div>
  );
}
