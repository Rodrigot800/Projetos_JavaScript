class Spaceship {
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
        "Velocidade ultrapassada!!!\nDiminua ou a nave será danificada"
      );
    }
  }
}

class TransportSpaceShip extends Spaceship {
  constructor(name, maxCrew, maxrecommendedVelocity, maxLoadWeight) {
    super(name, maxCrew, maxrecommendedVelocity);
    this.maxLoadWeight = maxLoadWeight;
  }

  speedUp(acceleration) {
    acceleration /= 2;
    console.log("Incrementando velocidade em " + acceleration + " km/s");
    super.speedUp(acceleration);
  }
}

let transportadora = new TransportSpaceShip("Transportadora", 4, 100, 400);

console.log(transportadora);

transportadora.speedUp(250);

console.log(transportadora.currentVelocity)
