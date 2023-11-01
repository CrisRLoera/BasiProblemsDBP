const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question('Ingrese el limite de busqueda de multiplos de 3:',(userInput)=>{
    for (let i = 1; i <= userInput; i++){
        if(i % 3 == 0){
            console.log(i);
        }
    }
    rl.close();
})