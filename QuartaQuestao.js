const Estados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let valorTotal = 0;
for (let estado in Estados) {
    valorTotal += Estados[estado];
}

for (let estado in Estados) {
    let valor = Estados[estado];
    let porcentagem = (valor / valorTotal) * 100;
    let porcentagemResultado = porcentagem.toFixed(2);

    if (valor > 0) {
        console.log(`${estado}: ${porcentagemResultado} %`);
    } 
}
