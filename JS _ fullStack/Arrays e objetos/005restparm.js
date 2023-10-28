function mostrarA(messege, ...animes) {
    animes.forEach(anime => console.log(`${messege}, ${anime}`));
}

let animes = ["naruto", "DB", "one piece"]

mostrarA("bom anime", "naruto", "DB", "one piece");
