const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(`Comando Break
`)
for (x in nums){
    if (x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log(`
Comando Continue
`)

for(y in nums){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for(let a in nums){
    for (let b in nums){
        if (a == 2 && b == 3){
            break externo // o break irá interromper o laço mais externo, por causa do uso do rótulo
        }
        console.log(`${a}, ${b}`)
    }
}
console.log('Fim!!')
