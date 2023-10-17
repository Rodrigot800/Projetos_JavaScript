class nave {
  constructor(name) {
    this.name = name;
    this.velocity = 0;
  }
  speedUp(aceleração) {
    this.velocity += aceleração;
  }
}

let artemis = new nave("artemis")

artemis.speedUp(100)
artemis.speedUp(100)

console.log(artemis)

