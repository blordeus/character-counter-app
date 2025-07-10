function ThemeSwitcher({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="mb-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      Toggle {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

export default ThemeSwitcher;