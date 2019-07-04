/*Usando uma biblioteca de terceiros para executar uma função
/Biblioteca lodash, instalada no projeto/pasta UDEMY-CURSOWEBMODERNO
/Para instalar a boblioteca lodash foi usado o comando:
npm i lodash no terminal
#####################

Instalando o nodemon como 'Global'
npm i -g nodemon
para usar chame com: nodemon e o endereço da pasta e arquivo
comando rs faz um restart a qualquer momento
se alterar o arquivo do modulo carregado, ao salvar o nodemon faz um restart automático 
e já começa a usar o novo código.

Muito importante para ambiente de desenvolvimento e backend
manter a aplicação rodando enquanto realiza mudanças no código

Verificar onde foi instalado o nodemon
*/
const _ = require('lodash')

setInterval(() => console.log(_.random(500, 600)), 2000) 
