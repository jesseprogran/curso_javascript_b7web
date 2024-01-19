
// usando conidcional ternaria

let isMember = false;

let shipping = isMember ? 2 : 10;

console.log( isMember ? 'voce é membro' : 'voce não é membro');
console.log("FRETE: " + shipping);

let age = 6;

let isAdult = ((age >= 18 && age < 60 ) ? 'sim' : 'não');
console.log(isAdult);