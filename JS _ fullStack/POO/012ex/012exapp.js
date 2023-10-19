class App {
  constructor() {
    this.spaceship = null;
    }
    
    start() {
        this.erollSpaceship()
        let chosenOption
        do {
            chosenOption = this.showinitialmenu()
            this.redirectFeature(chosenOption)
        } while (chosenOption == "3");
        this.printAndExit()
    }

  erollSpaceship() {
    let spaceshipName = prompt("qual é o nome da nave?");
    let crewQuantity = prompt("qual é a quantidade de tripulantes ?");
    let spaceshipKind = this.askForSpaceshipkind();
    if (spaceshipKind == "1") {
      let weaponsQuantity = prompt("quantas armas a neve possui ?");
      this.spaceship = new batleSpaceship(
        spaceshipName,
        crewQuantity,
        weaponsQuantity
      );
    } else {
      let sitsQuantity = prompt("quantos lugares a nave possui ?");
      this.spaceship = new sitsQuantity(
        spaceshipName,
        crewQuantity,
        sitsQuantity
      );
    }
  }
  askForSpaceshipkind() {
    let chosenOption;
    while (!["1", "2"].includes(chosenOption)) {
      chosenOption = prompt("qual o tipo da nave?\n1- batalha\n2- transporte");
    }
    return chosenOption;
  }

  showinitialmenu() {
    const promptMensagens =
      "o que você deseja fazer ?\n1- acelerar a nave\n2- trocar a nave\n3- imprimir e sair";
    let chosenOption = prompt(promptMensagens);
    while (!["1", "2", "3"].includes(chosenOption)) {
      chosenOption = prompt(promptMensagens);
    }
    return chosenOption;
    }
    redirectFeature(chosenOption) {
        switch (chosenOption) {
          case "1":
            this.accelerationSpaceship();
            break;
          case "2":
            this.erollSpaceship();
            break;
          case "3":
            this.accelerationSpaceship();
            break;
          default:
            break;
        }
    }
    accelerationSpaceship() {
        let acceleration = Number(prompt("quanto gostaria de acelerar ?"))
        this.spaceship.speedUp(acceleration)
    }
    printAndExit() {
        let finalMensagens = "Nome:" + this.spaceship.name + "\nquantidade de tripulantes:" + this.spaceship.crewQuantity + "\nVelocidade atual:" + this.spaceship.currentVelocity + "\n"
        alert(finalMensagens)
    }
}
