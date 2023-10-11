const arrayNT = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];

let NumberTribulantes = arrayNT
  .filter((Element) => {
    return Element[1] > 9;
  })
  .map((Element) => {
    return Element[0];
  })
  .join(", ");

let engatePedente = arrayNT.findIndex((element) => {
  return element[2] == false;
});

let nameNaveUpCasser = arrayNT.map((element) => {
  return element[0].toUpperCase();
}).join(", ")

console.log("Nave com mais de nove tribulantes : " + NumberTribulantes);

console.log("plataforma com processo de engate : " + Number(engatePedente + 1));

console.log("Espaçonaves destacadas : " + nameNaveUpCasser);
