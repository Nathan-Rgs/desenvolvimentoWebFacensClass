export default function Fila() {
  const dados = [
    {
      nome: "Nathan",
      endereço: "Casa",
      telefone: "123",
    },
    {
      nome: "Ana",
      endereço: "Banana",
      telefone: "456",
    },
    {
      nome: "Matheus",
      endereço: "Zaca",
      telefone: "789",
    },
  ];

  return (
    <>
      <ul className="FilaEspera">
        {dados.map((dados) => (
          <li>
            Nome: {dados.nome}, Endereço: {dados.endereço}, Telefone:{" "}
            {dados.telefone}
          </li>
        ))}
      </ul>
    </>
  );
}
