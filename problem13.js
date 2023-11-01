const multiDos = [];
let num1 = 0;
const multiTres = [];
let num2 = 0;

for(let i = 0; i < 100; i++){
    if(i%2==0 && i%3==0){
        multiDos.push(i);
        multiTres.push(i);
    }else if(i%2==0){
        multiDos.push(i);
    }else if(i%3==0) {
        multiTres.push(i);
    }
}
console.log('Los multiplos de 2 encontrados son:');
for(multiplo of multiDos){
    console.log(multiplo);
    num1 = num1 + multiplo;
    
}
console.log('Los multiplos de 3 encontrados son:');
for(multiplo of multiTres){
    console.log(multiplo);
    num2 = num2 + multiplo;
}

console.log(`La suma de multiplos de 2 es: ${num1}`)
console.log(`La suma de multiplos de 3 es: ${num2}`)