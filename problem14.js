const listNumbers = [];
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function inputNumber(){

rl.question ('Escribe un número:', (input)=>{
    listNumbers.push(input);
    if(listNumbers.length < 5){
        inputNumber();
    }else{
        rl.close();
        showInput();
    }
});
}
function showInput(){
    let min = listNumbers[0];
    let max = listNumbers[0];
    
    for(element of listNumbers){
        if(element>max){
            //console.log(`${element} es mas grande que ${max}`);
            max = element;
        }else if(element<min){
            //console.log(`${element} es mas pequeño que ${min}`);
            min = element;
        }
    }
    console.log(`EL número maximo encontrado es: ${max}`);
    console.log(`EL número minimo encontrado es: ${min}`);
}
inputNumber();