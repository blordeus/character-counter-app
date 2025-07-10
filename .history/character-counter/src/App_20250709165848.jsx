import { useState } from "react";
import CharacterCounter from "./components/CharacterCounter";
import CounterDisplay from "./components/CounterDisplay";
import LetterDensityGraph from "./components/LetterDensityGraph";
import ThemeSwitcher from "./components/ThemeSwitcher";
import WordDensityGraph from "./components/WordDensityGraph";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [includeSpaces, setIncludeSpaces] = useState(true);
  const [charLimit, setCharLimit] = useState(280);
  const [theme, setTheme] = useState("light");

  return (
    <div className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"} flex flex-col items-center justify-center p-4`}>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <h1 className="text-3xl font-bold mb-4">Character Counter</h1>
      <CharacterCounter
        text={text}
        setText={setText}
        includeSpaces={includeSpaces}
        setIncludeSpaces={setIncludeSpaces}
        charLimit={charLimit}
        setCharLimit={setCharLimit}
      />
      <CounterDisplay text={text} includeSpaces={includeSpaces} charLimit={charLimit} />
      <LetterDensityGraph text={text} />
      <WordDensityGraph text={text} />
    </div>
  );
}

export default App;