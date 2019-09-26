function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //Sempre o resolve aceita apenas um único parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!') // O .then fica disponivel sempre que o retorno do resolve é sucesso.
    .then(frase => frase.concat('?!?')) //Pode chamar a função .then quantas vezes quiser, pra gerar um encadeamento de operações.
    //em cima daquilo que voce recebe como resposta da Promise.
    .then(outraFrase => console.log(outraFrase))

//Se chamar o reject, tem que chamar o .catch que é o tratamento de erro.

