import "./App.css";
import Header from "./Componentes/Header.js";
import { useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [name, setName] = useState();
  const [adress, setAdress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [tel, setTel] = useState();

  function changeName(e) {
    setName(e.target.value);
  }
  function changeAdress(e) {
    setAdress(e.target.value);
  }
  function changeCity(e) {
    setCity(e.target.value);
  }
  function changeState(e) {
    setState(e.target.value);
  }
  function changeTel(e) {
    setTel(e.target.value);
  }

  function enviarValidar(e) {
    e.preventDefault();
    if (name === undefined) toast.error("Erro. Nome não pode estar vazio");
    else toast.success("Dados Cadastrados! ");
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={enviarValidar}>
        <div className="formField">
          <h3>Dados do Cliente:</h3>
          <div className="questionLine">
            <div className="flex">
              <label htmlFor="name"> Nome: </label>
              <input id="name" value={name} onChange={changeName}></input>
            </div>
            <div className="flex">
              <label htmlFor="adress"> Endereço: </label>
              <input id="adress" value={adress} onChange={changeAdress}></input>
            </div>
          </div>
          <div className="questionLine">
            <div className="flex">
              <label htmlFor="city"> Cidade: </label>
              <input id="city" value={city} onChange={changeCity}></input>
            </div>
            <div className="flex">
              <label htmlFor="state"> Estado: </label>
              <input id="state" value={state} onChange={changeState}></input>
            </div>
          </div>
          <div className="questionLine">
            <div className="flex">
              <label htmlFor="tel"> Telefone: </label>
              <input id="tel" value={tel} onChange={changeTel}></input>
            </div>
          </div>
          <div className="questionLine">
            <input type="submit"></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
