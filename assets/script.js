let char = new Knight("Jessé");
let monster = new LittleMonster();

const stage = new Stage(
  char,
  monster,
  document.querySelector("#char"),
  document.querySelector("#monster")
);

stage.start();
