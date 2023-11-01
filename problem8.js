const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ('Ingresa s o n:', (answer)=>{
    if(answer == 's' || answer == 'n'){
        console.log(`Has introducido ${answer}`);
    }else{
        console.log('Respuesta no valida');
    }
    rl.close();
});
