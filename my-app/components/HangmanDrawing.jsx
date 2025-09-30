export default function HangmanDrawing({ wrongGuesses }) {
  return (
    <svg height="250" width="200" className="hangman-svg">
      {/* Base */}
      <line x1="10" y1="240" x2="150" y2="240" stroke="#333" strokeWidth="4" />
      <line x1="40" y1="240" x2="40" y2="20" stroke="#333" strokeWidth="4" />
      <line x1="40" y1="20" x2="120" y2="20" stroke="#333" strokeWidth="4" />
      <line x1="120" y1="20" x2="120" y2="40" stroke="#333" strokeWidth="4" />

      {/* Cabeça */}
      {wrongGuesses > 0 && <circle cx="120" cy="55" r="15" stroke="#333" strokeWidth="4" fill="transparent" />}
      {/* Corpo */}
      {wrongGuesses > 1 && <line x1="120" y1="70" x2="120" y2="130" stroke="#333" strokeWidth="4" />}
      {/* Braço esquerdo */}
      {wrongGuesses > 2 && <line x1="120" y1="80" x2="90" y2="100" stroke="#333" strokeWidth="4" />}
      {/* Braço direito */}
      {wrongGuesses > 3 && <line x1="120" y1="80" x2="150" y2="100" stroke="#333" strokeWidth="4" />}
      {/* Perna esquerda */}
      {wrongGuesses > 4 && <line x1="120" y1="130" x2="90" y2="170" stroke="#333" strokeWidth="4" />}
      {/* Perna direita */}
      {wrongGuesses > 5 && <line x1="120" y1="130" x2="150" y2="170" stroke="#333" strokeWidth="4" />}
    </svg>
  );
}
