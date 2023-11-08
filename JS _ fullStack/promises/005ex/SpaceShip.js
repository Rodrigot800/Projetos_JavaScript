export default class SpaceShip {
  constructor(name, maxCapacity, currentCharge , shield) {
    this.name = name;
    this.maxCapacity = maxCapacity;
    this.currentCharge = currentCharge;
    this.shield = shield
  }

  currentPercentCharge() {
    return (this.currentCharge * 100) / this.maxCapacity;
  }
}

