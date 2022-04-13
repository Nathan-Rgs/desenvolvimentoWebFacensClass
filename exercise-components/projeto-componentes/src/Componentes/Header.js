import { AiFillCode } from "react-icons/ai";
import Relogio from "../Componentes/Relogio.js";
import "../index.css";

export default function Header() {
  return (
    <>
      <header>
        <h1>
          Cadastro de Clientes <AiFillCode color="black" />
        </h1>
        <h2>
          <Relogio />
        </h2>
      </header>
    </>
  );
}
