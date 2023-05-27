let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}


/*

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(`O vetor tem ${valores.length} posições`)
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}





for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o seguinte valor ${valores[pos]}`)
}



//console.log(valores)



console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


let num = [5, 8, 10, 2, 3]
num[5] =122
//Aqui estou adicionando um vetor no elemento 6
num.push(12)
//Aqui estou adicionando um vetor para a ultima vaga sempre
num.length
//Aqui vai saber o tamanho da variável 
num.sort()
//vai pegar todos os elementos e colocar em ordem crescente
console.log(`Nosso vetor tem ${num.length} tantos elementos`)
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
console.log(num[6])
console.log(`Nosso vetor é ${num}`)
*/