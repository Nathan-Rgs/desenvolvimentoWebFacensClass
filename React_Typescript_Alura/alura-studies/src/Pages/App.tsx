import React, { useState } from "react";
import Cronometer from "../components/Cronometer";
import Form from "../components/Formulary/index";
import List from "../components/List/index";
import { ITarefa } from "../types/tarefas";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}></Form>
      <List tarefas={tarefas}></List>
      <Cronometer></Cronometer>
    </div>
  );
}

export default App;
