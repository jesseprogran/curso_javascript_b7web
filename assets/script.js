// loop for em arrays

let melhoresCorredores = ['Lorin', 'Luiz Carlos', 'João', 'Juciê'];
melhoresCorredores.push('Jessé');
melhoresCorredores.push('Davi');

for( i = 0; i < melhoresCorredores.length; i++ ){
    console.log('Esses foram os Melhores ' + melhoresCorredores[i]);
}

//exemplo pegando a chave do array

for ( z in melhoresCorredores) {
    console.log(melhoresCorredores[z]);
}

// pegando pelo valor

for (jogador of melhoresCorredores) {
    console.log(jogador);
}

//////////


let cores = [
    {nome:'Vermelho', qtd: 23},
    {nome: 'Preto', qtd: 15},
    {nome:'Azul', qtd: 29}
]

for (i = 0; i < cores.length; i++) {
console.log(`Cores Disponiveis: ${cores[i].nome} ${cores[i].qtd}`);
}

for (v in cores) {
    console.log(`Cores e Quantidades: ${cores[v].nome} ${cores[v].qtd}`);
}

for (valor of cores) {
    console.log(`C e Q : ${valor.nome} ${valor.qtd}`);
}