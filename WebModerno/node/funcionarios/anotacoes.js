//package.json é o arquivo descritor ou descritivo do projeto e as dependencias que o projeto precisa

/*Comando npm init para criar o arquivo package.json com as perguntas
npm init -y para criar o arquivo package.json sem perguntas */

//Com npm i voce pode instalar os modulos de terceiros dentro do projeto

//comando pwd mostra o path atual no terminal

//comando npm i --save, instala a dependencia e salva dentro do package.json a dependencia: mais nome da
//dependencia depois de save

//npm i --save-dev , significa que vc ira ter uma dependencia só necessária para desenvolvimento
//nao é necessária para ambiente de produção

//o acento circunflexo ^ na versão da dependencia indica que podera ser atualizada até a versao 
//que nao altera o . anterior. exemplo: 0.15.0, ^0.15.0 significa que pode ir até 0.99.0 mas nao 1.00.0

//0.15.0 (mascara: major.minor.fix)

//~ pode atualizar so o fits
//^ pode atualizar so o minor
// sem nada significa que pode pegar somente a versao informada
//npm i(i significa install pode usar a palavra install tbm) --save-dev (save dev significa
// que vc tera uma dependencia necessaria somente em desenvolvimento nao é necessaria durante a produção
// axios@0.17.1 -E (@+versao -E,  significa que ira instalar exatamente a versao)
//Dentro da pasta funcionarios, foi criado o arquivo package-lock.json
//Esse arquivo descreve de forma precisa exatamente a versao que foi baixada
//Se esse arquivo estiver presente no projeto, o package.json nao 
//consegue atualizar as versões.
//O objetivo é garantir que quando for reinstalar os pacotes, vc tenha a 
//garantia que está instalando o mesmo que pacote que foi instalado antes






