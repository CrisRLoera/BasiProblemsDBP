const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ('EScribe un número:', (input)=>{
    const number = parseInt(input);

    if(isNaN(number)) {
        console.log('Entrada invalida');
    }else if (number > 0) {
        console.log('El número es positivo');
    }else if (number < 0) {
        console.log('El número es negativo');
    }else{
        console.log('El número es cero');
    }
    rl.close();
});
