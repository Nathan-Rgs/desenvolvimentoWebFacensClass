import "./App.css";
import ComHeader from "./Componentes/ComHeader.js";
import ComMessage from "./Componentes/ComMessage.js";

function App() {
  return (
    <div className="App">
      <header>
        <ComHeader></ComHeader>
        <ComMessage></ComMessage>
      </header>
    </div>
  );
}

export default App;
