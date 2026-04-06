const botaoConversor = document.querySelector(".botao-conversor");
const inputValor = document.querySelector(".valor-input");
const valorMoedaDigitada = document.querySelector(".valor-moeda-digitado");
const valorMoedaConvertida = document.querySelector(".valor-moeda");
const valorDoSelect = document.querySelector(".opcao-do-select");

botaoConversor.addEventListener("click", converterMoeda);

function converterMoeda() {
  const valorDoDolar = 5.2;
  const valorDoEuro = 6.2;
  const valorDoLibra = 7.2;
  const valorInput = Number(inputValor.value);

  if (!valorInput) {
    alert("Digite um valor válido");
    return;
  }

  if (valorDoSelect.value == "dolar") {
    valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valorInput / valorDoDolar);
  }

  if (valorDoSelect.value == "euro") {
    valorMoedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorInput / valorDoEuro);
  }

  if (valorDoSelect.value == "libra") {
    valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(valorInput / valorDoLibra);
  }

  valorMoedaDigitada.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valorInput);
}

valorDoSelect.addEventListener("change", mudartipoDeMoeda);

function mudartipoDeMoeda() {
  const novoValorDaImg = document.querySelector(".valor-bandeira");
  const novoValorDeMoeda = document.getElementById("nome-do-valor");
  const tipoDeMoeda = document.getElementById("tipo-da-moeda");

  if(valorDoSelect.value == "dolar") {
    novoValorDeMoeda.innerHTML = "Dólar";
    novoValorDaImg.src = "./assets/Dolar 1.png";
    tipoDeMoeda.innerHTML = "US$ 0,00";
  }

  if(valorDoSelect.value == "euro") {
    novoValorDeMoeda.innerHTML = "Euro";
    novoValorDaImg.src = "./assets/Euro 1.png";
    tipoDeMoeda.innerHTML = "€ 0,00";
  }

  if(valorDoSelect.value == "libra") {
    novoValorDeMoeda.innerHTML = "Libra";
    novoValorDaImg.src = "./assets/Libra 1.png";
    tipoDeMoeda.innerHTML = "£ 0,00";
  }

  converterMoeda()
}
