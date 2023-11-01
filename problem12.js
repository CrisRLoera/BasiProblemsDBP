const pares = [];
let numPares = 0;
const impares = [];
let numImpares = 0;

for(let i = 0; i < 100; i++){
    if(i%2==0){
        pares.push(i);
    }else{
        impares.push(i);
    }
}
for(par of pares){
    numPares = numPares + par;
}
for(impar of impares){
    numImpares = numImpares + impar;
}

console.log(`La suma de pares es: ${numPares}`)
console.log(`La suma de impares es: ${numImpares}`)