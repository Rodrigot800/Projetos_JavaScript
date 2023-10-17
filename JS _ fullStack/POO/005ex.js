class captain {
  constructor(name, age, flightHours) {
    this.name = name;
    this.age = age;
    this.flightHours = flightHours;
  }
}
class spaceship {
  constructor(name, crewQuantily, captainName, captainAge, captainflightHours) {
    this.name = name;
    this.crewQuantily = crewQuantily;
    this.captain = new captain(captainName, captainAge, captainflightHours);
  }
}

let Spaceship = new spaceship("artemis", 13, "will gray", 45, 15000);

console.log(Spaceship);
