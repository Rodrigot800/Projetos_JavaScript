        let num = document.getElementById('num');
        let lis = document.getElementById('sel');
        let res = document.getElementById('res');
        let valores = [];

        function isnum(n) {
            // verifica se o valor está entre 1 e 100
            if (Number(n) >= 1 && Number(n) <= 100) {
                return true;
            } else {
                return false;
            }
        }

        function islista(n,lt) {
            // o lt.indexOf verifica a posição do número na array, se o numero estiver presente retornará -1 
            if (lt.indexOf(Number(n)) != -1) {
                return true;
            } else {
                return false;
            }
        }

        function adicionar() {
            // isnum é uma função  para testar o número para ver se ele esta entre 1 e 100 
            // islista é uma função para ver se o número já está na lista  
            if (isnum(num.value) && !islista(num.value, valores)) {
                // push empurra um valor na array
                valores.push(Number(num.value))
                // será criado uma var item para mostrar o valores em texto dentro de opções no selector
                let item = document.createElement('option')
                item.text = `valor ${num.value} adicionado.`
                lis.appendChild(item)
            } else {
                window.alert('Valor inválido');
            }

            // apagar conteudo do input após adicionar número 
            num.value = '' 
            // o focus direciona o foco para o input 
            num.focus()  


        }

        function fin() {
            if (valores.length == 0) {
                window.alert('adicionar valores antes de finaliazar')
            } else{
                // nto é uma variavel que me dar a quantidade de elementos da minha array
                let nto = valores.length

                // maior e menor são variaveis criadas para o script me fornecer o menor e o maior número 
                let maior = -Infinity
                let menor = Infinity
                // var da soma de todos os valores da array 
                let soma = 0

                let media = 0

                // comparando os com infinito para resultados precisos
                // o comando for fazer o let pos pecorrer todo a array valores e comparando-os 
                for (let pos in valores ) {

                    soma += valores[pos]

                    if (valores[pos] > maior ) 
                        maior = valores[pos]
                
                    if (valores[pos] < menor)
                      
                        menor = valores[pos]
                    
                }

                media = soma/nto

                res.innerHTML =''
                res.innerHTML += `<p>são no total, ${nto}  números cadastrados.</p>`
                res .innerHTML += `<p>o maior número adicionado é ${maior}.</p>`
                res.innerHTML += `<p>o menor número adicionado é ${menor}. </p>`
                res.innerHTML +=  `<p>soma de todos os valores é ${soma}.</p>`
                res.innerHTML += `<p>a média dos valores é ${media.toFixed(2)}</p>`


            }
        }