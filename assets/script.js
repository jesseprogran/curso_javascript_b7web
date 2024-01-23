//  Condicional Switch

let profession = "Bombeiro";

console.log("Profissão: " + profession);

switch (profession) {
    case 'fiscal':
        console.log('Sua carreira será VERDE');
        break;
    case 'bombeiro':
        console.log('Sua carreira será VERMELHA');
        break;
    case 'policial':
        console.log('Sua carreira será AZUL');
        break;
    default:
        console.log('Quando for nenhuma será PRETA');
        break;
}