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

class TransportSpaceShip extends spaceship {
  speedUp() {
    console.log("naves de transportes só aumentão 1 km/s ");
    this.currentVelocity += 1;
  }
}

let transportSpaceShip = new TransportSpaceShip("transportadora", 4, 100);
transportSpaceShip.speedUp();

console.log(transportSpaceShip);
