function calc() {
    
    var n = parseInt(document.getElementById('number').value)
    var r = document.getElementById('res')
    var x = 0
    
    r.innerHTML =''

    if ( isNaN(n)|| n == 0) {
        window.alert('valor inválido')
    } else {

        for (let c = 1; c <= 10; c++) {

            x = n * c 
            
            r.innerHTML += ` ${n}x${c} = ${x} <br> `
            
        }
    }

}