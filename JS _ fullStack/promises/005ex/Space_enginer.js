export default class {
    constructor(spaceShip) {
        this.spaceShip = spaceShip
    }

    turOn() {
        this.checkCurrentLoad().then(currentCharge => {
            console.log(`(${this.spaceShip.name} Partida autorizada: carga atual de ${currentCharge}%`)
        }).catch(currentCharge => {
            console.log(`(${this.spaceShip.name})partida não autorizada : carga em apenas ${currentCharge}%`)
        })
    }

    checkCurrentLoad() {
        return new Promise((resolve, reject) => {
            let currentCharge = this.spaceShip.currentCharge
            if (currentCharge >= 10) {
                resolve(currentCharge)
            } else {
                reject(currentCharge)
            }
        })
    }
}