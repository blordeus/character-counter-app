function CounterDisplay({ text, includeSpaces, charLimit }) {
  const charCount = includeSpaces ? text.length : text.replace(/\s/g, "").length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentenceCount = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
  const readingTime = Math.ceil(wordCount / 200);
  const lineCount = text ? text.split("\n").length : 0;


  return (
    <div className="w-full mb-8">
      <textarea
        className="w-full p-4 border border-[var(--color-border)] rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white placeholder-[var(--color-placeholder)]"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        aria-label="Text input for character counter"
        rows="6"
      />
      <div className="flex flex-col sm:flex-row justify-between mt-4 gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex items-center text-[var(--color-text)] dark:text-gray-200 text-base">
            <input
              type="checkbox"
              checked={!includeSpaces}
              onChange={() => setIncludeSpaces(!includeSpaces)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-[var(--color-border)] rounded"
              aria-label="Exclude spaces in character count"
            />
            Exclude Spaces
          </label>
          <div className="flex items-center">
            <label htmlFor="charLimit" className="mr-2 text-[var(--color-text)] dark:text-gray-200 text-base">Character Limit:</label>
            <input
              id="charLimit"
              type="number"
              value={charLimit}
              onChange={(e) => setCharLimit(Number(e.target.value))}
              className="w-20 p-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
              aria-label="Set character limit"
              min="1"
            />
          </div>
        </div>
        <p className="text-base text-[var(--color-text)] dark:text-gray-200">
          Reading Time: <span className="font-semibold">{readingTime} min</span>
        </p>
      </div>
    </div>
  );
}

export default CounterDisplay;