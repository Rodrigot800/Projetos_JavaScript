let array = ["flores", "adubos", "palmeiras", "vasos", "mudas"];

console.log(array);
// splice pode substituir ou remover elementos
// elementosRemovidos = array.splice(1, 2)
// elementosRemovidos = array.splice(1, 2, "rosas", "cerejas")
elementosRemovidos = array.splice(1, 2, "rosas", "cerejas", "carvalho");

console.log(array);

console.log(elementosRemovidos);

console.log("----------------------------------------------------------------")

let array2 = ["flores", "adubos", "palmeiras", "vasos", "mudas"];

// o slice recupera os elementos sem mudar a array original
recortarArray = array2.slice(-1);

console.log(recortarArray);

console.log(array2);
