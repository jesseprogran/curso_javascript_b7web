// Eventos de Click;

function clicou() {
   console.log('Deu Certo...')
}
let botao = document.querySelector('.botao');
botao.addEventListener('click', () => {
   clicou();
});