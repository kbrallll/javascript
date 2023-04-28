var hora = 23
console.log(`Agora são ${hora} horas`)
if (hora >= 6 && hora < 12) {
    console.log(`Bom dia!!!`)
}
else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde!!!')
}
else if (hora >= 18 && hora <= 22) {
    console.log('Boa noite!!!')
}
else {
    console.log('Tá na hora de ir dormir né meu amigo')
}