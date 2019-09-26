//process tambem é um objeto global do node, assim como o global e  __dirname.

const anonimo = process.argv.indexOf('-a') !== -1

//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala anônimo!\n')
    process.exit()    
}else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { //Capturando dados do teclado, recurso do node.
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}

