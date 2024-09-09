var entrada=require('readline-sync');
var numero= entrada.question('Digite o numero: ');

let a = 0;
let b = 1;
let tempo;

if (numero === 0 || numero === 1) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    while (b < numero) {
        tempo = a + b;
        a = b;
        b = tempo;
    }
    if (b == numero) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numero} Não pertence à sequência de Fibonacci.`);
    }
}
