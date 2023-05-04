function carregar () {
    var msg = window.document.getElementById('msg')
    var bom = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`
    if (hora <= 12 && hora >= 6) {
        bom.innerHTML = '<strong>Bom dia !!!</strong>'
        img.innerHTML = '<img src="imagens/manha1.png" alt="foto do dia"></img>'
        document.body.style.backgroundColor = '#FDB927'
    }
    else if (hora > 12 && hora < 18) {
        bom.innerHTML = '<strong>Boa tarde !!!</strong>'
        img.innerHTML = '<img src="imagens/tarde1.png" alt="foto da tarde"></img>'
        document.body.style.background = '#BF6D4E'
    }
    else {
        bom.innerHTML = '<strong>Boa noite !!!</strong>'
        img.innerHTML = '<img src="imagens/noite1.png" alt="foto da noite"></img>'
        document.body.style.background = '#212622'

    }

}