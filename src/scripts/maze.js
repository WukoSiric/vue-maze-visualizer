import Cell from "./cell";
import Visualizer from "./visualizer";

export default class Maze {
  constructor(rows, columns, gapSize, canvasContext) {
    this.maze = [];
    this.rows = rows; 
    this.columns = columns;
    this.gapSize = gapSize;
    this.context = canvasContext;
    this.visualizer = new Visualizer(canvasContext); 
    this.stillGenerating = true;
  }

  initializeMaze() {
    for (let col = 0; col < this.columns; col++) {
      let newColumn = [];
      for (let row = 0; row < this.rows; row++ ) {
        let cell = new Cell(row, col);
        newColumn.push(cell);
        this.visualizer.drawCell(cell, this.gapSize, "grey"); // Draw cell with delay
      }
      this.maze.push(newColumn);
    }
    this.getNeighbors(0, 0);
    this.maze[0][0].isStart = true;
    this.maze[this.maze.length - 1][this.maze[0].length- 1].isFinish = true;
  }

  async generateMaze(row, col, cell, visited = []) {
    cell.visited = true;
  
    const [neighbors, directions] = this.getNeighbors(row, col);
  
    if (neighbors.length > 0) {
      const randomIndex = Math.floor(Math.random() * neighbors.length);
      const nextCell = neighbors[randomIndex];
      const direction = directions[randomIndex];

      row = nextCell.col; //I dont know why theyre backwards
      col = nextCell.row;
  
      this.updateWalls(cell, nextCell, direction);
      await this.visualizer.drawCellWithDelay(cell, this.gapSize);
      await this.visualizer.drawCellWithDelay(nextCell, this.gapSize);
  
      visited.push(cell);
      this.generateMaze(row, col, nextCell, visited);
    } 
    else if (visited.length > 0) {
      let previous_cell = visited.pop(); 
      row = previous_cell.col; //I dont know why theyre backwards
      col = previous_cell.row;
      this.generateMaze(row, col, previous_cell, visited);
    }
    else {
      this.setUnivisited();
    }
  }
  
  getNeighbors(row, col) {
    const neighbors = [];
    const directions = [];
  
    // Check top neighbor
    if (row - 1 >= 0 && !this.maze[row - 1][col].visited) {
      neighbors.push(this.maze[row - 1][col]);
      directions.push("top");
    }

    // Check right neighbor 
    if (col + 1 < this.maze[0].length && !this.maze[row][col+1].visited) {
      neighbors.push(this.maze[row][col + 1]);
      directions.push("right");  
    }

    // Check bottom neighbor 
    if (row + 1 < this.maze.length && !this.maze[row + 1][col].visited) {
      neighbors.push(this.maze[row + 1][col]);
      directions.push("bottom");
    }

    // Check left neighbor
    if (col - 1 >= 0 && !this.maze[row][col - 1].visited) {
      neighbors.push(this.maze[row][col - 1]);
      directions.push("left");
    }
  
    // this.visualizer.colorCell(this.maze[row][col], this.gapSize, "blue");
    return [neighbors, directions];
  }

  updateWalls(fromCell, toCell, direction) {
    if (direction == "top") {
      fromCell.hasTop = false; 
      toCell.hasBottom = false; 
    } else if (direction == "right") {
      fromCell.hasRight = false;
      toCell.hasLeft = false;
    } else if (direction == "bottom") {
      fromCell.hasBottom = false;
      toCell.hasTop = false;
    } else if (direction == "left") {
      fromCell.hasLeft = false;
      toCell.hasRight = false;
    }
    return [fromCell, toCell];
  }

  // Solve maze using depth first search
  solveWithDFS() {
    this.setUnivisited();

  }

  setUnivisited() {
    for (let row = 0; row < this.maze.length; row++) {
      for (let col = 0; col < this.maze[0].length; col++) {
        this.maze[row][col].visited = false;
      }
    }
  }

  DFS(row, col, cell, visited = []) {

  }

  // Get neighbors can go to 
  getNeighborsTunnelTo(cell) {
    let [neighbors, directions] = this.getNeighbors(cell.row, cell.col);
    let reachableNeighbors = [];

    for (let i = 0; i < neighbors.length; i++) {
      if (directions[i] == "top" && !cell.hasTop && !neighbors[i].hasBottom) {
        reachableNeighbors.push(neighbors[i]);
      }
      else if (directions[i] == "right" && !cell.hasRight && !neighbors[i].hasLeft) {
        reachableNeighbors.push(neighbors[i]);
      }
      else if (directions[i] == "bottom" && !cell.hasBottom && !neighbors[i].hasTop) {
        reachableNeighbors.push(neighbors[i]);
      }
      else if (directions[i] == "left" && !cell.hasLeft && !neighbors[i].hasRight) {
        reachableNeighbors.push(neighbors[i]);
      }
    }

    return reachableNeighbors;
  }
}