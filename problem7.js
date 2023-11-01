const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const frases = []

function leerFrase(){
    rl.question('Introduce una frase o presiona Ctrl+C para salir:', (frase)=>{
        frases.push(frase);
        leerFrase();
    });
}
    
leerFrase();

count = 0;

rl.on('SIGINT', ()=>{
    for (const frase of frases){
        count++;
    }
    console.log(`\nTotal de frases:${(count)}`);
})
//var limitNumber = prompt();