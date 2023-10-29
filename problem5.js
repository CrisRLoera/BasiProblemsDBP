let sum = 0;
let count = 0;
for (let i = 0; i < 100; i++) {
    if(i%2 != 0){
        sum = sum + (i+1);
        count ++;
    }
    
}

console.log(`La suma es: ${(sum)} y en total son ${(count)} números impares`);