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
    for (let row = 0; row < this.rows; row += this.gapSize) {
      let newRow = [];
      for (let col = 0; col < this.columns; col += this.gapSize) {
        let cell = new Cell(row, col); 
        newRow.push(cell);
        // this.visualizer.drawCell(cell, this.gapSize);
        await this.drawCellWithDelay(cell); // Draw cell with delay
      }
      this.maze.push(newRow);
    }

    console.log(this.maze);
  }

  async drawCellWithDelay(cell) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.visualizer.drawCell(cell, this.gapSize);
        resolve();
      }, 10); // You can adjust the delay time (in milliseconds) as needed
    });
  }

  getNeighbors(cell) {
    const neighbors = [];
    const row = cell.row;
    const col = cell.col;
  
    // Check top neighbor
    if (row - this.gapSize >= 0 && !this.maze[row - this.gapSize][col].visited) {
      neighbors.push(this.maze[row - this.gapSize][col]);
    }

    // Check right neighbor 
    if (col + this.gapSize < this.columns && !this.maze[row][col + this.gapSize].visited) {
      neighbors.push(this.maze[row][col + this.gapSize]);
    }

    console.log(row);
    console.log(this.gapSize);
    console.log(this.maze[8][0]);

    // Check bottom neighbor 
    // if (row + this.gapSize < this.rows && !this.maze[row + this.gapSize][col].visited) {
    //   neighbors.push(this.maze[row + this.gapSize][col]);
    // }
  
    return neighbors;
  }
  


}