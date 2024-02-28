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
  
    console.log(this.getNeighbors(5, 5));
  }
  

  async drawCellWithDelay(cell) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.visualizer.drawCell(cell, this.gapSize);
        resolve();
      }, 5);
    });
  }

  getNeighbors(row, col) {
    const neighbors = [];
    console.log("row: " + this.rows);
    console.log("columns: " + this.columns);
  
    // Check top neighbor
    if (row - 1 >= 0 && !this.maze[row - 1][col].visited) {
      neighbors.push(this.maze[row - 1][col]);
    }
  
    // Check right neighbor 
    if (col + 1 < this.columns && !this.maze[row][col + 1].visited) {
      neighbors.push(this.maze[row][col + 1]);
    }
  
    // Check bottom neighbor 
    if (row + 1 < this.rows && !this.maze[row + 1][col].visited) {
      neighbors.push(this.maze[row + 1][col]);
    }
  
    // Check left neighbor
    if (col - 1 >= 0 && !this.maze[row][col - 1].visited) {
      neighbors.push(this.maze[row][col - 1]);
    }

    for (let i = 0; i < neighbors.length; i++) {
      this.visualizer.colorCell(neighbors[i], this.gapSize, "black");
    }
  
    return neighbors;
  }


}