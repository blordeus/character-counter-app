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
    <div className={`min-h-screen ${theme === "light" ? "bg-[var(--color-bg)]" : "bg-gray-900 text-white"} flex flex-col items-center justify-center p-4 sm:p-6 transition-colors duration-300`}>
      <div className="w-full max-w-4xl">
        <header className="flex justify-between items-center mb-8">
          <img
            src={theme === "light" ? "./assets/images/logo-light-theme.svg" : "./assets/images/logo-dark-theme.svg"} // Use the appropriate logo based on the theme/assets/logo-light.svg" : "/assets/logo-dark.svg"}
            alt="Character Counter Logo"
            className="h-10"
          />
          <ThemeSwitcher theme={theme} setTheme={setTheme} />
        </header>
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] dark:text-gray-100 mb-8 text-center">Analyze your text in real time</h1>
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
    </div>
  );
}

export default App;