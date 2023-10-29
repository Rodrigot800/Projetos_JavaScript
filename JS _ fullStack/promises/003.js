const spaceship = {
  name: "rontoya",
  currentCharge: 50,
  consumptionPerKms: 0.00008,
};

const updateBateryCharge = function (chargeCosumid) {
  return new Promise((resolve, reject) => {
    spaceship.currentCharge -= chargeCosumid;
    if (spaceship.currentCharge > 0) {
      resolve(spaceship.currentCharge);
    } else {
      reject("bateria esgotada ! nave será desativada em alguns segundos.");
    }
  });
};

const calculateBateryConsumption = function (velocity, seconds) {
  return new Promise((resolve, reject) => {
    if (spaceship.consumptionPerKms <= 0 || velocity <= 0) {
      reject("nave está parada");
    } else {
      let chargeConsumed = spaceship.consumptionPerKms * velocity * seconds;
      resolve(chargeConsumed);
    }
  });
};

/* calculateBateryConsumption(90, 300)
  .then((chargeConsumed) => {
    updateBateryCharge(chargeConsumed).then((newCharge) => {
      console.log(`carga total: ${newCharge}`);
    }).catch(error => {
    console.log(error)})
  })
  .catch(error => {
    console.log(error);
  }); */

calculateBateryConsumption(0, 2000).then((chargeConsumed) => {
    return updateBateryCharge(chargeConsumed)
}).then((newCharge) => {
      console.log(`carga total: ${newCharge}`);
    })
  .catch(error => {
    console.log(error);
  });
