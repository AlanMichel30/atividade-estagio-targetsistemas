const entrada = require('readline-sync');
const stringUsuario = entrada.question('Digite string para inverter: ');
const stringInvertida = inverterString(stringUsuario);

function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

console.log(`String invertida: ${resultado}`);
