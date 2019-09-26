const schedule = require('node-schedule')

//Executando um processo temporizado com o modulo node-schedule, essa é uma forma mais rica
//de se executar esse tipo de rotinas.  (* significa qualquer no timer).
const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 1', function(){ //mascara: intervalo minuto hora dia mes diaSemana0à6
    console.log('Executando tarefa 1!', new Date().getSeconds()) //essa função nostra os segundos.
}) //String parecida com o padrão do crom? no temporizador

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1.')
}, 20000)

//setImediate
//setInterval
//tbm tem outras possibilidades para temporizadores

//Outra forma de agendar uma rotina
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 9
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando a tarefa 2!', new Date().getSeconds())
})


