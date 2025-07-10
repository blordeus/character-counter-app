function CounterDisplay({ text, includeSpaces, charLimit }) {
  const charCount = includeSpaces ? text.length : text.replace(/\s/g, "").length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentenceCount = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
  const lineCount = text ? text.split("\n").length : 0;

  return (
    <div className="w-full mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="p-6 bg-[var(--color-card)] dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
        <p className="text-lg text-[var(--color-text)] dark:text-gray-200">
          Characters: <span className={charCount > charLimit ? "text-red-500 font-semibold" : "font-semibold"}>{charCount}</span> / {charLimit}
        </p>
        <img src="./assets/images/pattern-character-count.svg" alt="" />
        {/* <svg className="w-8 h-8 text-[var(--color-placeholder)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg> */}
      </div>
      <div className="p-6 bg-[var(--color-card)] dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
        <p className="text-lg text-[var(--color-text)] dark:text-gray-200">
          Words: <span className="font-semibold">{wordCount}</span>
        </p>
        <img src="./assets/images/pattern-word-count.svg" alt="" />

        {/* <svg className="w-8 h-8 text-[var(--color-placeholder)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg> */}
      </div>
      <div className="p-6 bg-[var(--color-card)] dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
        <p className="text-lg text-[var(--color-text)] dark:text-gray-200">
          Sentences: <span className="font-semibold">{sentenceCount}</span>
        </p>
        <img src="./assets/images/pattern-sentence-count.svg" alt="" />

        {/* <svg className="w-8 h-8 text-[var(--color-placeholder)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-4a2 2 0 012-2h10a2 2 0 012 2v4h-4" />
        </svg> */}
      </div>
      <div className="p-6 bg-[var(--color-card)] dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
        <p className="text-5xl text-[var(--color-text)] dark:text-gray-200">
          Lines: <span className="font-semibold">{lineCount}</span>
        </p>
        <svg className="w-8 h-8 text-[var(--color-placeholder)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </div>
  );
}

export default CounterDisplay;