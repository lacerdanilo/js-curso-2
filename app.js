let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Hora do Desafio");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  let chute = document.querySelector("input").value;
  console.log("Clicou no botão");
}

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

function olaConsole() {
  console.log("Ola mundo");
}

function nomeConsole() {
  let nome = prompt("Qual o seu nome?");
  console.log(`Ola ${nome}`);
}

function tirarMedia() {
  let nota1 = prompt("Qual a primeira nota?");
  let nota2 = prompt("Qual a segunda nota?");
  let nota3 = prompt("Qual a terceira nota?");

  let media = Number(nota1) + Number(nota2) + Number(nota3) / 3;
  console.log(media);
}

function numeroMaior() {
  let numero1 = prompt("Qual o primeiro numero?");
  let numero2 = prompt("Qual o segundo numero?");

  if (Number(numero1) > Number(numero2)) {
    console.log(numero1);
  } else {
    console.log(numero2);
  }
}

function multiplicar() {
  let numero1 = prompt("Qual o primeiro numero?");
  let resultado = Number(numero1) * numero1;
  console.log(resultado);
}
// function dobrarNumero() {
//   let numero = document.querySelector("input").value;
//   let dobro = numero * 2;
//   exibirTextoNaTela("p", dobro);
// }
