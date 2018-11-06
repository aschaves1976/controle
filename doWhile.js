function getInteiroAleatorioEntre(min, max){
    //const valor = Math.random() * (max - min) + min
    return Math.floor((Math.random() * (max - min) + min))
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida: ${opcao}.`)
} while(opcao != -1)
console.log('Fim !')