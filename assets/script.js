// Orientação a Objetos
class Person {

   _age = 0;
   steps = 0;
   constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
   }

   takeAstep() {
      this.steps++
   }

   get fullName() {
      return `${this.firstName} ${this.lastName}`;
   }

   get age() {
      return this._age;
   }

   set age(x) {
      if(typeof x == 'number') {
         this._age = x;
      }
   }

   setAge(newAge) {
      if(typeof newAge == 'number') {
         this.age = newAge;
      } else {
         console.log('Error de Idade!! Somente Números');
      }
   }
}

// Instância
let p1 = new Person('jesse','Silva');
let p2 = new Person('Dalila');
let p3 = new Person('Davi');

p1.age = 100;

console.log(`P1 = ${p1.fullName} tem ${p1.age}`);