export default function Keyboard({ onGuess, guessedLetters }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter)}
          className="key"
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
