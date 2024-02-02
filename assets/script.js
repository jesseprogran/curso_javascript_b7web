// Eventos de Click;

function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

ul.innerHTML = `${ul.innerHTML} <li> Shom de bola</li>`; 
}
