function CounterDisplay({ text, includeSpaces, charLimit }) {
  const charCount = includeSpaces ? text.length : text.replace(/\s/g, "").length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentenceCount = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
  const readingTime = Math.ceil(wordCount / 200); // Approx 200 words per minute

  return (
    <div className="w-full max-w-md mb-4">
      <p>Characters: <span className={charCount > charLimit ? "text-red-500" : ""}>{charCount}</span> / {charLimit}</p>
      <p>Words: {wordCount}</p>
      <p>Sentences: {sentenceCount}</p>
      <p>Estimated Reading Time: {readingTime} min</p>
    </div>
  );
}

export default CounterDisplay;