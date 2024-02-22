// https://jsonplaceholder.typicode.com/posts

function ciclou() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

document.querySelector("#botao").addEventListener("click", ciclou);
