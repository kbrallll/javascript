function contar() {
    let ini = document.getElementById('txtinicio')
    //AQUI FOI UMA VARIAVEL PRO INICIO
    let fim = document.getElementById('txtfim')
    //FOI CRIADO UMA VARIAVEL PRO FIM
    let passo = document.getElementById('txtpasso')
    //FOI CRIADO UMA VARIAVEL PRO PASSO
    let res = document.getElementById('res')
    //FOI CRIADO UMA VARIAVEL PRO RESULTADO

    /* FOI CRIADO A CONDIÇÃO DA VARIAVEL INI.VALUE.LENGTH SER IGUAL A 0 OU SE O FIM FOR IGUAL OU SE O PASSO FOR IGUAL A ZERO, CASO ISSO ACONTEÇA SERÁ EXECUTADO O BLOCO DE ERRO */
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] verifique os dados e tente novamente!!!')
    } else {
        res.innerHTML = '<strong>Contando:</strong> '
        let i = Number(ini.value)
        //FOI CRIADO VARIAVEL PRA INICIO E TRANSFORMAMOS ELE EM NÚMERO
        let f = Number(fim.value)
        //FOI CRIADO VARIAVEL PRA FIM E TRANSFORMAMOS ELE EM NÚMERO
        let p = Number(passo.value)
        //FOI CRIADO VARIAVEL PRA PASSO E TRANSFORMAMOS ELE EM NÚMERO
    
    /*FOI CRIADO UMA CONDIÇÃO DE QUE SE A VARIAVEL P FOR MENOR OU IGUAL A ZERO VAI EXECUTAR UM ERRO E ELE VAI CONSIDERAR O PASSO 1*/
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.style.color += '#552582'
                res.innerHTML += ` <strong>${c}</strong> \u{1F449} `
            }           
    }   else {
            //Contagem Regressiva
            for(let c = i; c >= f; c -= p) {
                res.style.color += '#552582'
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.style.color += '#552582'
        res.innerHTML += ` \u{1F3C1} `
        }
}


