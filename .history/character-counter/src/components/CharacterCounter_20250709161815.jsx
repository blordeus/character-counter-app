function CharacterCounter({ text, setText, includeSpaces, setIncludeSpaces, charLimit, setCharLimit }) {
  return (
    <div className="w-full max-w-md mb-4">
      <textarea
        className="w-full p-2 border rounded resize-y"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
        aria-label="Text input for character counter"
        rows="5"
      />
      <div className="flex justify-between mt-2">
        <label>
          <input
            type="checkbox"
            checked={includeSpaces}
            onChange={() => setIncludeSpaces(!includeSpaces)}
            aria-label="Include spaces in character count"
          />
          Include Spaces
        </label>
        <div>
          <label htmlFor="charLimit" className="mr-2">Limit:</label>
          <input
            id="charLimit"
            type="number"
            value={charLimit}
            onChange={(e) => setCharLimit(Number(e.target.value))}
            className="w-16 p-1 border rounded"
            aria-label="Set character limit"
          />
        </div>
      </div>
    </div>
  );
}

export default CharacterCounter;