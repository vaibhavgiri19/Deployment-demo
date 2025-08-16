// App.jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("Neutral");

  return (
    <div className={`app ${mood.toLowerCase()}`}>
      <h1>My Mood: {mood}</h1>
      <div className="buttons">
        <button onClick={() => setMood("Happy")}>😊 Happy</button>
        <button onClick={() => setMood("Sad")}>😢 Sad</button>
        <button onClick={() => setMood("Excited")}>🤩 Excited</button>
      </div>
    </div>
  );
}

export default App;
