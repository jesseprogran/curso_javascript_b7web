// Exercicios Array;

// 01- No array abaixo, qual o número que pega a Ferrari?

let carros = [
    'BMW',
    'Ferrari',
    'Mercedes'
];

let x = 1
console.log('1. ' + carros[x]);

// 02- Troque a Ferrari Por Audi;
carros[1] = 'Audi';
console.log('2. Lista com Audi: ');
console.log(carros);

// 03- Adcione o Volvo a lista;
carros.push('Volvo');
console.log('3. Lista com Volvo: ');
console.log(carros);

// 04- Exiba quantos itens tem no array;
console.log('4. itens no array: ' + carros.length);


