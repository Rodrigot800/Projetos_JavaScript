class Spaceship {
  static get deceleration() {
    return 0.83;
  }

  constructor(name, crewQuantity) {
    this.name = name;
    this.crewQuantity = crewQuantity;
    this.currentVelocity = 0;
  }

  speedUp(acceleration) {
    this.currentVelocity += acceleration * Spaceship.deceleration;
  }
}
