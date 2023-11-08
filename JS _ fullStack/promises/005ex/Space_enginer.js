export default class {
  constructor(spaceShip) {
    this.spaceShip = spaceShip;
  }

  turOn() {
      let currentChargeChecking = this.checkCurrentLoad()
        let shieldChecking = this.testShield()
      Promise.all([currentChargeChecking, shieldChecking]).then(results => {
        return this.shieldNormalizer(results[1])
      }).then(newshild => {
          this.spaceShip.shield = newshild
          console.log(`(${this.spaceShip.name}) partida autorização: escudo (${this.spaceShip.shield}) - carga (${this.spaceShip.currentCharge}) GJ `)
      })
          .catch(reject => {
          console.log(`(${this.spaceShip.name}) partida não autorizada :  ${reject}`)
      } )
  }

  checkCurrentLoad() {
    return new Promise((resolve, reject) => {
      let currentCharge = this.spaceShip.currentCharge;
      if (currentCharge >= 10) {
        resolve(currentCharge);
      } else {
        reject(`carga em apenas ${currentCharge} GJ`);
      }
    });
  }

  testShield() {
    return new Promise((resolve, reject) => {
      let doubleShield = this.spaceShippaceShip.shield * 2;
      if (doubleShield > 100) {
        resolve(doubleShield);
      } else {
        reject("escudo em sobrecarga");
      }
    });
  }

  shieldNormalizer(shield) {
    return new Promise((resolve, reject) => {
      let normalizedShield = shield * 0.7;
      if (normalizedShield > 120) {
        reject("escudo supercarga");
      } else {
        resolve(normalizedShield);
      }
    });
  }
}
