const botaoConversor = document.querySelector(".botao-conversor");

botaoConversor.addEventListener("click", converterMoeda);

function converterMoeda() {
    const valorInput = document.querySelector(".valor-input").value;
    const valorDoDolar = 5.2;

    const valorConvertido = valorInput / valorDoDolar;

    const valorMoedaDigitada = document.querySelector(".valor-moeda-digitado");
    valorMoedaDigitada.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valorInput);
    const valorMoedaConvertida = document.querySelector(".valor-moeda");
    valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valorConvertido);
}
