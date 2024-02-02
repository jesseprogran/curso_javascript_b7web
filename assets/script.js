// Eventos de Click;

function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  let newUl = document.createElement('ul');
//   ul.after(newUl); // os elemenos vao pra ultimo ;
  ul.before(newUl); // os elementos vai pra cima 

  for (let i = 0; i < 5; i++) {
      let newLi = document.createElement('li');
      newLi.innerText = `Item add ${i + 1}`;
      newUl.append(newLi);
  }
   
}
