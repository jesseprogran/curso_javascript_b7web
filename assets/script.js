// Herança

class Person {
   age = 0;

   constructor(name) {
      this.name = name;
   }
}

class Student extends Person {
   constructor(name, mt) {
      super(name);
      this.mt = mt;
   }
}

let p1 = new Student('Jessé', 13456);
p1.age = 33;

console.log(`${p1.name} tem ${p1.age} anos e sua MT é #${p1.mt}`);