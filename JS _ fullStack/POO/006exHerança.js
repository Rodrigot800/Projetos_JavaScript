class spaceship {
  constructor(name, maxCrew, maxrecommendedVelocity) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxrecommendedVelocity = maxrecommendedVelocity;
    this.currentVelocity = 0;
  }

  speedUp(acceleration) {
    this.currentVelocity += acceleration;
    if (this.currentVelocity > this.maxrecommendedVelocity) {
      console.log(
        "velocidade altrapaçada!!!\ndiminua ou a nave será danificada"
      );
    }
  }
}

class battleSpaceship extends spaceship {
  stop() {
    this.currentVelocity = 0;
    console.log("recolhendo armas e parando nave de batalha");
  }
}

class discoverySpaceship extends spaceship {
  stop() {
    this.currentVelocity = 0;
    console.log(
      "recolhendo equipamento de amostras e parando nave de descoberta"
    );
  }
}

let darwin = new discoverySpaceship("Darwin", 10, 100);

let fenix = new battleSpaceship("fenix", 20, 50);

console.log(fenix);
console.log(darwin);

darwin.speedUp(101);
fenix.stop();
darwin.stop();
