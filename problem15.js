const listNumbers = [];
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function inputNumber(){

rl.question ('Escribe un número:', (input)=>{
    listNumbers.push(input);
    if(listNumbers.length < 2){
        inputNumber();
    }else{
        rl.close();
        showInput();
    }
});
}

const par = [];
const impar = [];
let count = 0;
let imparSum = 0;


function showInput(){
    let min = listNumbers[0];
    let max = listNumbers[0];
    
    for(element of listNumbers){
        if(element>max){
            max = element;
        }else if(element<min){
            min = element;
        }
    }

    for(let i = min;i <= max ; i++){
        console.log(i);
        if(i%2==0){
            par.push(i);
        }else{
            impar.push(i);
        }
        count++;
    }
    for(element of impar){
        imparSum = imparSum + element;
    }
    console.log(`La cuenta de números entre ${min} y ${max} es : ${count}`);
    console.log(`Entre ellos hay ${par.length} números pares`);
    console.log(`La suma de los impares es ${imparSum}`);
}
inputNumber();