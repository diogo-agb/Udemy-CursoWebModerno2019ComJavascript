//O node por padrao faz cache do que é retornado a partir de um require
//o exercicio abaixo vemos o exemplo de import com require

//Como se trata de uma unica instancia o que foi salvo no contadorA será salvo no contadorB
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//Como se trata de uma instancia por meio de uma funcao factory (que retorna um objeto)
//o comportamento será diferenciado para cada nova instancia
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)






