function conta() {

    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ){
        window.alert('dados inválidos')

    } else {
        res.innerHTML = `contando... <br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0) {
            p = 1
        }

        if (f > i) {
            for ( let c = i ; c <= f ; c+=p ) {
                res.innerHTML += `${c}`
                
            }
        } else{
            for ( let c = i; c >= f ; c -= p) {
                res.innerHTML += `<p>${c},</p>`
                
            }
        } 
    }
} 