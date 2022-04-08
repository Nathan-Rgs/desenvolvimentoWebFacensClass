export default function ComHeader() {
  const nomeApp = "App Delivery";
  let array = [2, 2, 4, 4];
  let filaEntrega = array.reduce((total, atual) => total + atual);
  const url =
    "https://blog.alterdata.com.br/wp-content/uploads/2019/02/274522-9-dicas-para-ter-um-delivery-de-sucesso.jpg";

  return (
    <div>
      <img src={url} className="App-logo" alt="logo" />
      <h1> {nomeApp.toUpperCase()} </h1>
      <a className="App-link" href="https://facens.br/" target="_blank">
        Facens{" "}
      </a>
      <p> Fila de Espera: {filaEntrega}</p>
    </div>
  );
}
