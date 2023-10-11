function calc(repetições) {
  var i;
  var inv = 0;
  var pi = 0;
  var soma1 = 0;
  var sinal = 0;
  for (i = 1; i < repetições; i++) {
    inv = 1 / (2 * i + 1);

    sinal = (-1) ** i * inv;

    soma1 += sinal;
  }

  pi = 4 * (1 + soma1);

  console.log("aproximação de Pi" + pi);
}


function calc2(repetições) {
  var pi2;
  var somaqua;
  var soma = 0;

  for (i = 1; i <= repetições; i++) {
    somaqua = 6 * (1 / i ** 2);
    soma += somaqua;
  }

  pi2 = Math.sqrt(soma);

  console.log(pi2)
}

calc(101);

calc2(101);
