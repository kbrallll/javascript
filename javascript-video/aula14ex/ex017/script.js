function calcular() {
    let ini = document.getElementById('numero')
    //Aqui foi gerado uma var para número
    let tab = document.getElementById('seltab')
    //Aqui foi gerado uma var para resultado

    if (ini.value.length == 0) {
        window.alert('[ERRO] Verifique os dados novamente')
    } else {
        let n = Number(ini.value)
        //Transformando o var ini em uma nova var como número
        let c = 1 
        //varialvel pra contador
        tab.innerHTML = ''
        //Aqui estamos limpando o select toda vez antes de fazer a tabuada
        tab.size = "10"
        while (c <= 10) {
           let item = document.createElement('option')
           //Criamos um option em javascript
           item.text = `${n} x ${c} = ${n*c}`
           //Criamos o texto que vai na caixa
           item.value = `tab${c}`
           //Criamos um valor para item
           tab.appendChild(item) 
           //Aqui vai mostrar a tabuada dentro do option adicionando o filho item
           item.style.color += '#552582' 

           c++
        }
    }
}