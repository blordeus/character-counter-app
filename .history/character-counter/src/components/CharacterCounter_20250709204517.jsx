function CharacterCounter({ text, setText, includeSpaces, setIncludeSpaces, charLimit, setCharLimit }) {
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="w-full mb-8">
      <textarea
        className="bg-neutral-100 w-full p-4 border border-[var(--color-border)] rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm  dark:border-gray-600 text-black "
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        aria-label="Text input for character counter"
        rows="6"
      />
      {charCount > charLimit && (
        <div className="flex items-center mt-2 gap-2" aria-live="polite">
            <img src="" alt="" />
          <svg
            className="w-5 h-5 text-[var(--color-error)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm font-medium text-[var(--color-error)]">
            Limit reached! Your text exceeds 300 characters.
          </p>
        </div>
      )}
      <div className="flex flex-col sm:flex-row justify-between mt-4 gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex items-center text-[var(--color-text)] dark:text-gray-200 text-base">
            <input
              type="checkbox"
              checked={!includeSpaces}
              onChange={() => setIncludeSpaces(!includeSpaces)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-[var(--color-border)] rounded focus:outline-none"
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
              className="text-black w-20 p-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:[bg-gray-700] dark:text-white"
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

export default CharacterCounter;