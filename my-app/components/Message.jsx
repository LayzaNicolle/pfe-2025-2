export default function Message({ status, word }) {
  if (status === "win") return <h2>Parabéns! Você ganhou! A palavra era {word}.</h2>;
  if (status === "lose") return <h2>Você perdeu! A palavra era {word}.</h2>;
  return null;
}
