function Pessoa(){
    this.idade = 0

    setInterval(() => { // com arrowfunction o this não fica variando! legal
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa



