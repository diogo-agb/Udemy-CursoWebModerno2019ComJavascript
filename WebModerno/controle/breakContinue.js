const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums){
    if(x == 5){
        break // Causa um desvio de fluxo pra fora do laço
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('###########')

for(let y in nums){
    if(nums[y] == 5){
        continue // Causa um desvio de fluxo dentro do proprio laço. (Vai pular)
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: // Nao usar esse rotulos, apenas para aprendizagem
for (let a in nums){
    for (let b in nums){
        if (a == 2 && b == 3){
            break externo // Não usar esse tipo de desvio, break, continue, externo, esse tipo de desvio torna muito dificil a leitura do código
        }
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')



