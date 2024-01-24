// EXERCICIOS SOBRE FUNÇÃO 
/* Calcule o preço do imovel
    - m2 = 3.000
    - Se tiver 1 quarto, o m2 é 1x
    - Se tiver 2 quarto, o m2 é 1.2x
    - Se tiver 3 quartos, o m2 é 1.5x
    Uso da Função:
*/
function calcularImovel(metragem, quartos ) {
    let m2 = 3000
    if (quartos === 1) {
        return metragem * m2;
    } else if (quartos === 2) {
        return metragem * ( m2 * 1.2);
    } else if (quartos === 3) {
        return metragem * ( m2 * 1.5);
    } else {
        return m2;
    }
}

let metragem = 123;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);
console.log(` A sua casa custa R$ ${preco}`);


