function teste1(num){
    if (num > 7) 
      console.log(num)
      console.log('Final') // esta linha de código não faz parte da estrutura if
}

teste1(6)
teste1(8)

function teste2(num){
    if (num > 7);{ // não utilizar o ";"
        console.log(num)
    }
}
teste2(6)
teste2(8)