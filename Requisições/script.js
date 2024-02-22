// https://jsonplaceholder.typicode.com/posts

function ciclou() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      alert(`Seu Primeiro Post: ${json[0].title}`);
    });
}

document.querySelector("#botao").addEventListener("click", ciclou);
