class Spaceship {
  static get deceleration() {
    return 0.85;
  }

  constructor(name) {
    this.name = name;
    this.currentVelocity = 0;
  }
  speedUp(acceleration) {
    this.currentVelocity += (acceleration * Spaceship.deceleration)
  }
}

let spaceship = new Spaceship("apollo");
spaceship.speedUp(200);

console.log(spaceship);
