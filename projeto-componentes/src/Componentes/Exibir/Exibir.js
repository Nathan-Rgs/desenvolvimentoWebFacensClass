import "./exibir.css";
export default function Exibir({ conteudo }) {
  let lista = conteudo.map((dados) => {
    return (
      <li>
        {dados.name} - {dados.tel}
      </li>
    );
  });

  return (
    <div>
      <h3>Clientes Cadastrados</h3>
      <div className="clientList">
        <ul className="check-list">{lista}</ul>
      </div>
    </div>
  );
}
