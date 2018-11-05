const imprimirResultado = function (nota){
    if (nota >= 7){
        console.log('Aprovado! Nota: ' + nota)
    }else{
        console.log('Reprovado! Nota: ' + nota)
    }
}

imprimirResultado(5)
imprimirResultado(7)