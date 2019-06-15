
function area (largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area} m2.`)
    }else{
        return area
    }
}

console.log(area(2, 2)) // Retorna o resultado correto
console.log(area(2)) // Retorna NaN devido nao ter passado o segundo parametro
console.log(area()) // Se nao passar parametros tbm retorna NaN
console.log(area(2, 3, 17, 22, 44)) // Pega somente os dois primeiros parametros e ignora os outros
console.log(area(5, 5))







