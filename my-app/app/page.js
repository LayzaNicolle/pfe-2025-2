import Image from "next/image";
import styles from "./page.module.css";

import { Profile } from "@/componentes/profile";

export default function Home() {
  return (
    <div>
      <h1>Site criado para disciplina de Front-end. Sejam bem-vindos!</h1>
      <h2>Me chamo Layza Nicolle. Atualmente estudo Sistemas para Internet na Universidade Católica de Pernambuco.
        Também sou desenvolvedora back-end na Accenture! Procuro me aprofundar ainda mais na área e tirar algumas certificações.</h2>
      <Profile />
    </div>
  );
}
