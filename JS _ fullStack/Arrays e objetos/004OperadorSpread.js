let frutas = ["laranja", "mamão", "maça"]

console.log(...frutas)

let anime = ["naruto", "one piece", "DB"];

let newAnime = [...anime, "jjk"]

console.log(newAnime)


function aceleracao(n1, n2) {
    return n1 + n2
}

let ArrayVel = [10, 90]

let newVel = aceleracao(...ArrayVel)

console.log(newVel)


