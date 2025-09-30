"use client";
import { useState, useEffect } from "react";
import { words } from "../data/words";
import WordDisplay from "../components/WordDisplay";
import Keyboard from "../components/Keyboard";
import HangmanDrawing from "../components/HangmanDrawing";
import Attempts from "../components/Attempts";
import Message from "../components/Message";

export default function Home() {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [status, setStatus] = useState(null);

  const maxWrong = 6;

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setWrongLetters([]);
    setStatus(null);
  };

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) return;

    if (word.includes(letter)) {
      const newGuessed = [...guessedLetters, letter];
      setGuessedLetters(newGuessed);

      // Vitória
      if (word.split("").every(l => newGuessed.includes(l))) {
        setStatus("win");
      }
    } else {
      const newWrong = [...wrongLetters, letter];
      setWrongLetters(newWrong);

      // Derrota
      if (newWrong.length >= maxWrong) setStatus("lose");
    }
  };

  return (
    <div className="game-container">
      <h1>Jogo da Forca</h1>
      <HangmanDrawing wrongGuesses={wrongLetters.length} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Attempts wrongLetters={wrongLetters} />
      <Keyboard onGuess={handleGuess} guessedLetters={[...guessedLetters, ...wrongLetters]} />
      <Message status={status} word={word} />
      <button onClick={startGame} className="restart-btn">Reiniciar</button>
    </div>
  );
}
