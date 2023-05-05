/* AQUI VAI UM EXEMPLO DE VC TESTAR O CÓDIGO!!!

function verificar() {
    window.alert('Funcionou!!!')
}

*/  

function verificar() {
    var data = new Date() 
    //Aqui o servidor vai buscar a data que está rodando a máquina
    var ano = data.getFullYear()
    // Aqui o servidor vai buscar o ano completo com 4 dígitos 
    var fano = document.querySelector('input#txtano')
    // Aqui criamos um var para o ano
    var res = document.querySelector('div#res')
    // Aqui criamos um var para o resultado
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Por favor verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        //Aqui criamos um var para sexo com o name dentro do input
        var idade = ano - Number(fano.value)
        //Aqui criamos um var para saber a sua idade
        /* 
        TESTE PARA VER SE O CÓDIGO ESTA FUNCIONANDO
        res.innerHTML = `Idade Calculada: ${idade}`
        */
        
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //Criamos um var para a imagem dinamicamente
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <=10) {
                //Criança
                img.setAttribute('src', 'foto-bebem.png')
            } else if (idade <=21) {
                img.setAttribute('src', 'foto-jovemm.png')
                //Jovem
            } else if (idade <=50) {
                //Adulto
                img.setAttribute('src', 'foto-adultom.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idosom.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <=10) {
                //Criança
                img.setAttribute('src', 'foto-bebef.png')
            } else if (idade <=21) {
                img.setAttribute('src', 'foto-jovemf.png')
                //Jovem
            } else if (idade <=50) {
                //Adulto
                img.setAttribute('src', 'foto-adultaf.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idosaf.png')
            }
        }

        res.style.textAlign = 'center'
        //Aqui o resultado vai ficar centralizado

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        /*
        Aqui criamos um var para o genenero e estamos pedindo que diga no resultado o genero com a sua idade 
        */ 
        res.appendChild(img)
    }
}