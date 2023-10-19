class TransportSpaceShip {
  constructor(name) {
    this.name = name;
    this.currentVelocity = 0;
  }
  set velocity(newVelocity) {
    if (newVelocity > 120) {
      this.currentVelocity = 120;
    } else {
      this.currentVelocity = newVelocityvelocity;
    }
  }
}

let spaceship = new TransportSpaceShip("transportador");

spaceship.velocity = 130;

console.log(spaceship)

class ResoucerProcessStation {
  constructor(nome, monthlyProcessedLoad) {
    this.name = nome;
    this.monthlyProcessedLoad = monthlyProcessedLoad;
  }

  get weeklyProcessedLoad() {
    return this.monthlyProcessedLoad / 4;
  }
}

let resouceProcesso = new ResoucerProcessStation("gaia", 500);

console.log(resouceProcesso.weeklyProcessedLoad);

resouceProcesso.monthlyProcessedLoad = 600;

console.log(resouceProcesso.weeklyProcessedLoad);
