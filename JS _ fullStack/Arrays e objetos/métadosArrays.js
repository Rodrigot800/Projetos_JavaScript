let array = ["anime", "estudo", "manga", "progração"];

// forEach serve para percorrer a array sem precisa usar for ou while.
array.forEach(function (element, index) {
  console.log("Elementos:" + element + "\nindice:" + index);
});

console.log(
  "----------------------------------------------------------------------------"
);

// o métado map faz a mesma coisa do forEach, porém não modifica a array original.
let letrasMaiusculas = array.map(function (element) {
  let upcaser = element.toUpperCase();
  return upcaser;
});

console.log(letrasMaiusculas);

console.log(
  "----------------------------------------------------------------------------"
);

// o métado filter  ele filtra os elementos com base em uma função de retorno verdadeira (verdadeira/falsa) fornecida como argumento.
let filtrarArray = array.filter((element) => {
  return element.length > 5;
});

console.log(filtrarArray);

console.log(
  "----------------------------------------------------------------------------"
);

// o métado find filtra os elementos assim como o filter mas apenas o primeiro é capturado.
let filtrarFistElement = array.find((element) => {
  return element.length > 5;
});

console.log(filtrarFistElement);

console.log(
  "----------------------------------------------------------------------------"
);

// o métado findIndex é pacerecida com o find, mas ela captura apenas o indice.
let filtrarFistIndice = array.findIndex((indice) => {
  return indice.length > 5;
});

console.log(filtrarFistIndice);

console.log(
  "----------------------------------------------------------------------------"
);

// o métado join transforma uma array em e um separador
let separarArray = array.join( "eu gustumm" )


