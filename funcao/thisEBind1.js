const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // Nesse exemplo houve um conflito entre paradigmas: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) /* Usando o bind o "this" sempre terá como referencia o 
objeto que foi usado para referenciar a função */
falarDePessoa()

// O bind não altera a função "original"