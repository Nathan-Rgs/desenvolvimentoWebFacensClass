import { BsFillPenFill } from "react-icons/bs";
import Relogio from "../Componentes/Relogio.js";
import "../index.css";

export default function Header() {
  return (
    <>
      <header>
        <h1>
          Cadastro de Clientes <BsFillPenFill color="white" size={25} />
        </h1>
        <h2>
          <Relogio />
        </h2>
      </header>
    </>
  );
}
