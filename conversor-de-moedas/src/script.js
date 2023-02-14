function Converterr() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmDolar = valorEmRealNumerico * 5.21;
  //console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor convertido em Dólares é: $ " + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmEuro = valorEmRealNumerico * 5.59;
  //console.log(valorEmEuro);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor convertido em Euro é: € " + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;
}
