import Button from "../Buttons/index";
import Clock from "./Clock";
import style from "./Cronometer.module.scss";

export default function Cronometer() {
  return (
    <div className={style.cronometer}>
      <p className={style.title}>Escolha uma matéria e inicie o cronometro:</p>
      <div className={style.clockWrapper}>
        <Clock></Clock>
      </div>
      <Button>Iniciar!</Button>
    </div>
  );
}
