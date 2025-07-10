function CounterDisplay({ text, includeSpaces, charLimit }) {
  const charCount = includeSpaces ? text.length : text.replace(/\s/g, "").length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentenceCount = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
  const readingTime = Math.ceil(wordCount / 200);
  const lineCount = text ? text.split("\n").length : 0;

  return (
    <div className="w-full mb-8 p-6 bg-[var(--color-card)] dark:bg-gray-800 rounded-lg shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p className="text-base text-[var(--color-text)] dark:text-gray-200">
          Characters: <span className={charCount > charLimit ? "text-red-500 font-semibold" : "font-semibold"}>{charCount}</span> / {charLimit}
        </p>
        <p className="text-base text-[var(--color-text)] dark:text-gray-200">
          Words: <span className="font-semibold">{wordCount}</span>
        </p>
        <p className="text-base text-[var(--color-text)] dark:text-gray-200">
          Sentences: <span className="font-semibold">{sentenceCount}</span>
        </p>
        <p className="text-base text-[var(--color-text)] dark:text-gray-200">
          Reading Time: <span className="font-semibold">{readingTime} min</span>
        </p>
      </div>
    </div>
  );
}

export default CounterDisplay;