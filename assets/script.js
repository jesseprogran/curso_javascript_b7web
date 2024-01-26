// funções dentro de Objetos;

let pessoa = {
    nome: 'Manuela',
    sobrenome: 'Valente',
    idade: 7,
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
}


console.log(pessoa.nomeCompleto());