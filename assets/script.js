// Funções dentro de funções
function addSquares(a, b) {
    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square(b);

    return sqrA + sqrB;
}

console.log(addSquares(10, 4));
