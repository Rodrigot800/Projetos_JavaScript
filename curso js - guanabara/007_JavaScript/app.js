function carregar() {
    var mg = document.getElementById('mg')
    var foto = document.getElementById('foto1')
    var data = new Date()
    var hora = data.getHours()

    mg.innerHTML = `<p><strong>Agora são ${hora} horas</strong></p>`

    if ( hora >= 6 && hora <= 12) {

        foto.src = 'manhã.png'
        mg.innerHTML += `<p><strong>bom dia</strong></p>`
        document.body.style.backgroundColor = '0, 119, 255, 0.839'
    } else  if ( hora > 12 && hora < 18 ) {

        foto.src = 'tarde.png'
        mg.innerHTML += `<p><strong>boa tarde</strong></p>`
        document.body.style.backgroundColor = '#ffb82a'
    } else {

        foto.src = 'noite.png'
        mg.innerHTML += `<p><strong>boa noite</strong></p>`
        document.body.style.backgroundColor = '#0c0339'
    }
        
    
}