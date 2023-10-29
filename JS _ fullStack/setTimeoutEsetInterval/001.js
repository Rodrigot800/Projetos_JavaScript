// setTimeout(função, tempo); ele é usado para atrasar um treicho de código por um intervalo de tempo 
// é executado apenas uma vez

setTimeout( function () {
    console.log("fim")
}, 6000 /* tempo em Milissegundos */)

//setInterval(função, intervalo); ele atrasa o código também, porém executa o código em loop até que seja parado

let contador = 0 
 let intervalo = setInterval( function () {
    contador++
    console.log(`esse contador foi executado ${contador} vezes`);
    if (contador >= 5) {
        clearInterval(intervalo)
    }
}, 1000)


