// Eventos de Click;

function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  let newLi = document.createElement('li');
  newLi.innerText = 'Tu é fera de Mais....';

  ul.appendChild(newLi);// adciona ao final ;
  ul.prepend(newLi); // adciona o elemento no começo;
   
}
