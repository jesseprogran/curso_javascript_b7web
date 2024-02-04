// Orientação a Objetos
class Person {

   age = 0;
   constructor(name) {
      this.name = name;
   }
}

// Instância
let p1 = new Person('Jessé');
let p2 = new Person('Dalila');
let p3 = new Person('Davi');

p1.age = 33;
p2.age = 37;
p3.age = 38;

console.log(`P1 = ${p1.name} tem ${p1.age}`);
console.log(`P2 = ${p2.name} tem ${p2.age}`);
console.log(`P3 = ${p3.name} tem ${p3.age}`);