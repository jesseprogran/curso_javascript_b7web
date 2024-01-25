// Objetos;

let personagem = {
    nome: 'Batman',
    idade: 50,
    origem: 'Terra',
    uniformes: ['preto', 'azul', 'verde'],
    poderes: {
        forca: 87,
        habilidade: 75,
        magia: 0,
        velocidade: 56
    }
};

console.log(`Esse personagem ${personagem.nome} tem  como habilidade ${personagem.poderes.habilidade} %.`)
console.log(`O personagem ${personagem.nome} tem o uniforme da cor ${personagem.uniformes[2]}.`);
console.log(`Esse personagem tem o nome de ${personagem.nome} e tem a idade de ${personagem.idade} anos.`);
console.log(personagem);


