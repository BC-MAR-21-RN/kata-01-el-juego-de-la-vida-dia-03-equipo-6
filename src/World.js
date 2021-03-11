let World = function (row, column) {
  this.row = row
  this.column = column
  this.matrix = []
  this.matrixNew = []
}

World.prototype.createBoard = function () {
  this.matrix = Array(this.row).fill().map(() => Array(this.column).fill(0))
  this.matrixNew = this.matrix
  return this.matrix
}

World.prototype.getBoard = function () {
  return this.matrix
}

World.prototype.getBoardNew = function () {
  return this.matrixNew
}

World.prototype.livingCell = function (row, column) {
  this.matrix[row][column] = 1
  return this.matrix[row][column]
}

World.prototype.neighbours = function (row, column){
  let neighboursCount = 0;
  let board = this.matrix;

  let positions = [
    [row - 1, column - 1],
    [row - 1, column],
    [row - 1, column + 1],
    [row, column + 1],
    [row + 1, column + 1],
    [row + 1, column],
    [row + 1, column - 1],
    [row, column - 1]
  ]

  for(let i = 0; i < positions.length; i++) {
    let rowCheck = positions[i][0]
    let columnCheck = positions[i][1]
    if(isOnTheBoard(rowCheck, columnCheck, this.row, this.column)) {
      neighboursCount += board[rowCheck][columnCheck];
    }
  }

  return neighboursCount;
  
  function isOnTheBoard(rowCheck, columnCheck, rowLenght, columnLenght) {
    return rowCheck >= 0 && columnCheck >= 0 && rowCheck < rowLenght && columnCheck < columnLenght
  }
}

World.prototype.liveOrDie = function (row, column) {
  let livingNeighbours = this.neighbours(row, column)
  let status = this.matrix[row][column]
  let life = 0

  if(isAlive(status)) {
    if(underpopulation(livingNeighbours)) life = 0;
    else if(overcrowding(livingNeighbours)) life = 0;
    else if(nextGeneration(livingNeighbours)) life = 1;
  } else {
    if(reborn(livingNeighbours)) life = 1;
  }

  this.matrixNew[row][column] = life;
  console.log(this.matrixNew)

  return life;

  function underpopulation(livingNeighbours) {
    return livingNeighbours < 2
  }

  function overcrowding(livingNeighbours) {
    return livingNeighbours > 3
  }

  function nextGeneration(livingNeighbours) {
    return livingNeighbours === 2 || livingNeighbours === 3 
  }

  function reborn(livingNeighbours) {
    return livingNeighbours === 3
  }

  function isAlive(status) {
    return status === 1
  }
}
