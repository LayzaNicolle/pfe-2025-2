export default function Attempts({ wrongLetters }) {
  return (
    <div className="attempts">
      <p>Letras erradas: {wrongLetters.join(", ")}</p>
    </div>
  );
}
