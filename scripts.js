const botaoConversor = document.querySelector(".botao-conversor");
const inputValor = document.querySelector(".valor-input");
const valorMoedaDigitada = document.querySelector(".valor-moeda-digitado");
const valorMoedaConvertida = document.querySelector(".valor-moeda");

botaoConversor.addEventListener("click", converterMoeda);

function converterMoeda() {
  const valorDoDolar = 5.2;
  const valorInput = Number(inputValor.value);

  if (!valorInput) {
    alert("Digite um valor para converter.");
    return;
  }

  const valorConvertido = valorInput / valorDoDolar;

  valorMoedaDigitada.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valorInput);

  valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(valorConvertido);
}