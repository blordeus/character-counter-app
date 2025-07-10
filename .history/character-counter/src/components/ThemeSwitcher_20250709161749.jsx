function ThemeSwitcher({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="mb-4 p-2 bg-blue-500 text-white rounded"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      Toggle {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

export default ThemeSwitcher;