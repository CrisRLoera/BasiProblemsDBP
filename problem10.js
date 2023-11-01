const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ('Escribe un número:', (input)=>{
    const number = parseInt(input);

    if(isNaN(number)) {
        console.log('Entrada invalida');
    }else if (number % 2 == 0) {
        console.log('El número es par.');
    }else if (number % 2 != 0) {
        console.log('El número es impar.');
    }else{
        console.log('La entrada es desconocida');
    }
    rl.close();
});
