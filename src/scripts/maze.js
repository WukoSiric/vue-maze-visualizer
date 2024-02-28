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
  }

  async initializeMaze() {
    for (let col = 0; col < this.columns; col += this.gapSize) {
      let newColumn = [];
      for (let row = 0; row < this.rows; row += this.gapSize) {
        let cell = new Cell(row, col);
        newColumn.push(cell);
        await this.drawCellWithDelay(cell); // Draw cell with delay
      }
      this.maze.push(newColumn);
    }
    this.getNeighbors(0, 0);

    this.generateMaze(0, 0, this.maze[0][0]);
  }
  

  async drawCellWithDelay(cell) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.visualizer.drawCell(cell, this.gapSize);
        resolve();
      }, 5);
    });
  }

  generateMaze(row, col, cell, visited = new Set()) {
    visited.add(cell);
    cell.visited = true;
  
    const [neighbors, directions] = this.getNeighbors(row, col);
  
    if (neighbors.length > 0) {
      const randomIndex = Math.floor(Math.random() * neighbors.length);
      const nextCell = neighbors[randomIndex];
      const direction = directions[randomIndex];

      if (direction === "top") {
        row -= 1; 
      }
      else if (direction == "right") {
        col += 1;
      }
      else if (direction == "bottom") {
        row += 1;
      }
      else if (direction == "left") {
        col -= 1;
      }
  
      this.updateWalls(cell, nextCell, direction);
      this.visualizer.drawCell(cell, this.gapSize);
      this.visualizer.drawCell(nextCell, this.gapSize);
  
      this.generateMaze(row, col, nextCell, visited);
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
  
    this.visualizer.colorCell(this.maze[row][col], this.gapSize, "blue");
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
}