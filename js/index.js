const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
  if (ehUltimoCartao) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao();
});


btnVoltar.addEventListener("click", function () {
  const ehPrimeiroCartao = cartaoAtual === 0;
  if (ehPrimeiroCartao) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao();
});


function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}






const btnAvancardois = document.getElementById("btn-avancardois");
const btnVoltardois = document.getElementById("btn-voltardois");
let cartaoAtualdois = 0;
const cartoesdois = document.querySelectorAll(".cartao2");

btnAvancardois.addEventListener("click", function () {
    const ehUltimoCartaodois = cartaoAtualdois === cartoesdois.length - 1;
  if (ehUltimoCartaodois) return;

  esconderCartaoSelecionadodois();

  cartaoAtualdois++;
  mostrarCartaodois();
});


btnVoltardois.addEventListener("click", function () {
  const ehPrimeiroCartaodois = cartaoAtualdois === 0;
  if (ehPrimeiroCartaodois) return;

  esconderCartaoSelecionadodois();

  cartaoAtualdois--;
  mostrarCartaodois();
});


function mostrarCartaodois() {
  cartoesdois[cartaoAtualdois].classList.add("selecionado2");
}

function esconderCartaoSelecionadodois() {
  const cartaoSelecionadodois = document.querySelector(".selecionado2");
  cartaoSelecionadodois.classList.remove("selecionado2");
}







const btnAvancartres = document.getElementById("btn-avancartres");
const btnVoltartres = document.getElementById("btn-voltartres");
let cartaoAtualtres = 0;
const cartoestres = document.querySelectorAll(".cartao3");

btnAvancartres.addEventListener("click", function () {
    const ehUltimoCartaotres = cartaoAtualtres === cartoestres.length - 1;
  if (ehUltimoCartaotres) return;

  esconderCartaoSelecionadotres();

  cartaoAtualtres++;
  mostrarCartaotres();
});


btnVoltartres.addEventListener("click", function () {
  const ehPrimeiroCartaotres = cartaoAtualtres === 0;
  if (ehPrimeiroCartaotres) return;

  esconderCartaoSelecionadotres();

  cartaoAtualtres--;
  mostrarCartaotres();
});


function mostrarCartaotres() {
  cartoestres[cartaoAtualtres].classList.add("selecionado3");
}

function esconderCartaoSelecionadotres() {
  const esconderCartaoSelecionadotres = document.querySelector(".selecionado3");
  esconderCartaoSelecionadotres.classList.remove("selecionado3");
}

