const express = require("express");
const app = express();

let listaClientes = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "Consulta realizada" });
});

app.post("/cadastracliente", (req, res) => {
  const nome = req.body.nome;
  const telefone = req.body.telefone;
  console.log(`Cadastrado: ${nome} com o telefone ${telefone}`);
  if (!nome) {
    res.status(422).json({ mensagem: "Campo nome é obrigatório" });
    return;
  }
  let cliente = {
    nome: nome,
    telefone: telefone,
  };
  listaClientes.push(cliente);
  console.log(listaClientes);
  res.status(201).json({ mensagem: `Cliente ${nome} cadastrado` });
});

app.delete("/deletecliente", (req, res) => {
  const nomeDeletado = req.body.nome;

  if (!nomeDeletado) {
    res.status(422).json({ mensagem: "Nome é obrigatório para delete" });
    return;
  }
  let dadoDeletado = listaClientes.find((item) => item.nome == nomeDeletado);
  if (dadoDeletado == undefined) {
    res.status(422).json({ mensagem: "Este nome não está na lista" });
    return;
  }
  let dadoIndex = listaClientes.indexOf(dadoDeletado);
  listaClientes.splice(dadoIndex, 1);
  console.log(`${nomeDeletado} Deletado com sucesso`);
  console.log(listaClientes);
  res
    .status(200)
    .json({ mensagem: `Cliente ${nomeDeletado} deletado com sucesso` });
});

const porta = 3000;
app.listen(porta, () => {
  console.log(`Rodando na porta ${porta}`);
});
