const increaseVelocity = function (velocityToIncrease) {
    return new Promise((resolve, reject) => {
        if (velocityToIncrease <= 0) {
            reject("frenagem acionada")
        } else {
            resolve(velocityToIncrease * 0.9)
        }
    })
}

const newBatteryConsumption = function (currentCharge, velocityToIncrease) {
    return new Promise((resolve, reject) => {
        let newBatteryConsumption = (currentCharge + velocityToIncrease) / 10000
        if (newBatteryConsumption > 0) {
            resolve(newBatteryConsumption)
        } else {
            reject("consumo zerado!")
        }
    })
}

let velocity = 70

let velocityIncreased = increaseVelocity(velocity) 
let BatteryConsumption = newBatteryConsumption(-80, velocity)

Promise.all([velocityIncreased, BatteryConsumption]).then(results => {
    console.log(results)
}).catch(erros => { 
    console.log(erros)
})