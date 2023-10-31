const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question('Ingrese el limite final de la cuenta:',(userInput)=>{
    for (let i = 1; i <= userInput; i++){
        console.log(i);
    }
    rl.close();
})

//var limitNumber = prompt();