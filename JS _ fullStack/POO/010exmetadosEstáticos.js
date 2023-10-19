class resouceProcesso {
    constructor(name, monthlyProcessing) {
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }
    static calculateProcesInHours(monthlyProcessing, hours) {
        return monthlyProcessing / 720 * hours
    }
}

let processo = new resouceProcesso("Gaia", 2000)

let totalProcessing = resouceProcesso.calculateProcesInHours(processo.monthlyProcessing , 10)

console.log(totalProcessing)