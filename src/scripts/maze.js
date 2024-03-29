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
    this.isGenerating = false;
    this.isSolving = false;
  }

  handleGenerateMaze() {
    if (this.isGenerating || this.isSolving) {
      console.log("Already generating..."); 
      return
    }
    this.isGenerating = true;
    this.initializeMaze();
    this.generateMaze(0, 0, this.maze[0][0]);
  }

  initializeMaze() {
    this.maze = [];
    for (let row = 0; row < this.rows; row++) {
      let newRow = [];
      for (let col = 0; col < this.columns; col++ ) {
        let cell = new Cell(row, col);
        newRow.push(cell);
        this.visualizer.drawCell(cell, this.gapSize, "grey");
      }
      this.maze.push(newRow);
    }
    this.getNeighbors(0, 0);
    this.maze[0][0].isStart = true;
    this.maze[this.maze.length - 1][this.maze[0].length - 1].isFinish = true;
  }

  async generateMaze(row, col, cell, visited = []) {
    if (this.isSolving) {
      console.log("Solving, cannot generate at the moment!");
      return
    }
    
    cell.visited = true;
    const [neighbors, directions] = this.getNeighbors(row, col);
  
    if (neighbors.length > 0) {
      const randomIndex = Math.floor(Math.random() * neighbors.length);
      const nextCell = neighbors[randomIndex];
      const direction = directions[randomIndex];

      row = nextCell.row;
      col = nextCell.col;
  
      this.updateWalls(cell, nextCell, direction);
      await this.visualizer.drawCellWithDelay(cell, this.gapSize);
      await this.visualizer.drawCellWithDelay(nextCell, this.gapSize);
  
      visited.push(cell);
      this.generateMaze(row, col, nextCell, visited);
    } 
    else if (visited.length > 0) {
      let previous_cell = visited.pop(); 
      row = previous_cell.row;
      col = previous_cell.col;
      this.generateMaze(row, col, previous_cell, visited);
    }
    else {
      this.isGenerating = false;
    }
  }
  
  getNeighbors(row, col) {
    const neighbors = [];
    const directions = [];
  
    if (row - 1 >= 0 && !this.maze[row - 1][col].visited) {
      neighbors.push(this.maze[row - 1][col]);
      directions.push("left");
    }

    if (col + 1 < this.maze[0].length && !this.maze[row][col+1].visited) {
      neighbors.push(this.maze[row][col + 1]);
      directions.push("bottom");  
    }

    if (row + 1 < this.maze.length && !this.maze[row + 1][col].visited) {
      neighbors.push(this.maze[row + 1][col]);
      directions.push("right");
    }

    if (col - 1 >= 0 && !this.maze[row][col - 1].visited) {
      neighbors.push(this.maze[row][col - 1]);
      directions.push("top");
    }
  
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

  async solveMaze(algorithmString) {
    if (this.isGenerating || this.isSolving) {
      console.log("still generating, cannot solve yet!");
      return
    } 
    this.isSolving = true;

    this.setUnivisited(); 
    if (algorithmString === "BFS") {
      await this.BFS(); 
      return
    }
    await this.DFS(this.maze[0][0]);
  }

  async BFS() {
    const queue = [];
    const startCell = this.maze[0][0];
    queue.push(this.maze[0][0]);

    while (queue.length > 0) {
      const currentCell = queue.shift(); 
      const neighbors = this.getNeighborsTunnelTo(currentCell);
      await this.visualizer.drawCellWithDelay(currentCell, this.gapSize, "SlateBlue", 10);

      for (let neighbor of neighbors) {
        if (!neighbor.visited) {
          neighbor.visited = true;
          await this.visualizer.drawCellWithDelay(neighbor, this.gapSize, "Violet", 10);
          if (neighbor.isFinish) {
            console.log("Found the finish!");
            this.isSolving = false;
            return;
          }
          queue.push(neighbor);
        }
      }
    }
  }

  setUnivisited() {
    for (let row = 0; row < this.maze.length; row++) {
      for (let col = 0; col < this.maze[0].length; col++) {
        this.maze[row][col].visited = false;
      }
    }
  }

  async DFS(cell, visited = []) {
    if (cell.isFinish) {
      this.isSolving = false;
      return
    }

    cell.visited = true; 
    const neighbors = this.getNeighborsTunnelTo(cell);

    if (neighbors.length > 0) {
      await this.visualizer.drawCellWithDelay(neighbors[0], this.gapSize, "orange", 0);
      visited.push(cell);
      this.DFS(neighbors[0], visited);
    }
    else if (visited.length > 0) {
      await this.visualizer.drawCellWithDelay(cell, this.gapSize, "LightGray", 10);
      let previous_cell = visited.pop(); 
      this.DFS(previous_cell, visited);
    }
  }


  getNeighborsTunnelTo(cell) {
    let [neighbors, directions] = this.getNeighbors(cell.row, cell.col);
    let reachableNeighbors = [];

    for (let i = 0; i < neighbors.length; i++) {
      if (directions[i] == "top" && !cell.hasTop && !neighbors[i].hasBottom) {
        reachableNeighbors.push(neighbors[i]);
        this.visualizer.drawCell(neighbors[i], this.gapSize, "LightGray");
      }
      else if (directions[i] == "right" && !cell.hasRight && !neighbors[i].hasLeft) {
        reachableNeighbors.push(neighbors[i]);
        this.visualizer.drawCell(neighbors[i], this.gapSize, "LightGray");
      }
      else if (directions[i] == "bottom" && !cell.hasBottom && !neighbors[i].hasTop) {
        reachableNeighbors.push(neighbors[i]);
        this.visualizer.drawCell(neighbors[i], this.gapSize, "LightGray");
      }
      else if (directions[i] == "left" && !cell.hasLeft && !neighbors[i].hasRight) {
        reachableNeighbors.push(neighbors[i]);
        this.visualizer.drawCell(neighbors[i], this.gapSize, "LightGray");
      }
    }

    return reachableNeighbors;
  }
}