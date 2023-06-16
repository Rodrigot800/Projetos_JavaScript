var t = window.document.getElementById('t1')
var d1 = window.document.getElementById('d1')
var d2 = window.document.getElementById('d2')
d1.addEventListener('mouseenter' , cima)
d1.addEventListener('mouseout', fora)
d2.addEventListener('mouseenter' , cima2)
d2.addEventListener('mouseout', fora2)


function dark() {
    t.style.background ='#000'
    t.style.color = '#0f0'
}
function cima() {
    d1.style.borderColor = '#fff'

}
function fora() {
    d1.style.borderColor = '#0f0'
}
function claro() {
    t.style.background ='#0f0'
    t.style.color = '#000'
    
}
function cima2 () {
    d2.style.borderColor = '#fff'

}
function fora2 () {
    d2.style.borderColor = '#000'
}
