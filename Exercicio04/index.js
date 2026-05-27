const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {

    rl.question('Digite sua idade: ', (idade) => {

        console.log('\n=== DADOS INFORMADOS ===');
        console.log('Nome: ' + nome);
        console.log('Idade: ' + idade);

        rl.close();

    });

});