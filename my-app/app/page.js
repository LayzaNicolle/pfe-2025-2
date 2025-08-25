import Image from "next/image";
import styles from "./page.module.css";

import { Profile } from "@/componentes/profile";

export default function Home() {
  return (
    <div>
      <h1>Sejam bem-vendos! Me chamo Layza Nicolle. Atualmente estudo Sistemas para Internet na Universidade Católica de Pernambuco.
        Também sou desenvolvedora back-end na Accenture! Procuro me aprofundar ainda mais na área e tirar algumas certificações.
      </h1>
      <Profile />
    </div>
  );
}
