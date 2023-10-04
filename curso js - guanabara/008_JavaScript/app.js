function vrfc() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc1 = document.getElementById('nasc')
    var res = document.getElementById('res')

    // verificação de dados
    if ( nasc1.value == 0 || nasc1.value > ano) {
        window.alert('alguma coisa de errado não está certo, tu nasceu no futuro ?')
    } 
    // verificação de dados 
    else if (nasc1.value <= 1933) {
        window.alert('tu não é imortal')
    } 
    else {
        //processamento de dados 
        var sex = document.getElementsByName('sex')
        var idade1 = ano - Number(nasc1.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        // verificação do genero 
        if (sex[0].checked) {
             genero = 'masculino'
        } else if (sex[1].checked) {
             genero = 'feminino'
        }

        // verificando idade para atribuir uma foto
        if (genero == 'masculino' ) {
            if(idade1 > 1 && idade1 <= 10){
                img.setAttribute('src', 'bebemacho.png')
            }else if (idade1 > 10 && idade1 <= 18) {
                img.setAttribute('src', 'jovemm.png')
            }else if (idade1 > 18 && idade1 <=50 ) {    
                img.setAttribute('src', 'adultom.png')
            } else {
                img.setAttribute('src', 'idosom.png')
            }


            } else if(genero == 'feminino'){ 
            if(idade1 > 1 && idade1 <= 10){
                img.setAttribute('src', 'bebef.png')
            }else if (idade1 > 10 && idade1 <= 18) {
                img.setAttribute('src', 'jovemf.png')
            }else if (idade1 > 18 && idade1 <=50 ) {
                img.setAttribute('src', 'adultof.png')
            } else {
                img.setAttribute('src', 'idosof.png')
            }
        }
    }
    // atualizando os dados na web
    res.style.textAlign = 'center'
    res.innerHTML = `<p> você é do genero ${ genero } com ${idade1}anos.</p>`
    res.appendChild(img)

}