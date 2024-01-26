// Acessando e alterando Objetos

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

personagem.nome = 'Super Man';
personagem.poderes.forca += 10;
personagem.uniformes.pop();

console.log(personagem.nome);

const car = {
    nome: 'Jessé',
    idade: 32,
    carros: [
        {modelo: 'GOL', cor: 'PRETO'},
        {modelo: 'FIAT', cor: 'BRANCO'}
    ]
}
car.carros[0].modelo;

console.log(car.carros);