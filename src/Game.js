let Game = function () {

}

function play() {
  let world = new World(4, 8)
  world.createBoard()
  world.livingCell(2, 1)
  world.livingCell(2, 2)
  world.livingCell(2, 3)
  let count = 0;
  let newBoard="";
  document.getElementById('game').innerHTML = world.getBoardNew()

  do {
    for(let row = 0; row < world.row; row++) {
      for(let column = 0; column < world.column; column++) {
        world.liveOrDie(row, column)
      }
    }
    count++;
    newBoard += world.getBoardNew() + "<br>";
  }while(count < 2);

  document.getElementById('newBoard').innerHTML = newBoard;
}