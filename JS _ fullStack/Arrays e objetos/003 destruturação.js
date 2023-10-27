let violão = {
    cordas: 6,
    tipo: "clássico",
    funciona : false

}

//let quantCordas = violão.cordas
//let tipViol = violão.tipo
// duas mandeiras de destruturar o objeto
let { cordas: quantCordas,  tipo } = violão

console.log(quantCordas, tipo)


let anime = ["naruto", "one piece", "dragon ball"]

let [ani1, ani2, ani3] = anime

console.log(ani1,ani2,ani3)