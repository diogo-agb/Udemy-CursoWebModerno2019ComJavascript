{
    {
        {
            {
                var sera = 'Será???' // A variavel var fica visivel fora do bloco de codigo
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123   // A variavel var dentro de uma funcao so fica
    console.log(local)
}                       // visivel dentro do bloco da função
teste()
//console.log(local)