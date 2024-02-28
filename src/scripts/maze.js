import Cell from "./cell";
import Visualizer from "./visualizer";

export default class Maze {
  constructor(rows, columns, gapSize, canvasContext) {
    this.maze = [];
    this.rows = rows; 
    this.gapSize = gapSize;
    this.columns = columns;
    this.context = canvasContext;
    this.visualizer = new Visualizer(canvasContext); 
  }

  initializeMaze() {
    for (let row = 0; row < this.rows; row += this.gapSize) {
      let newRow = [];
      for (let col = 0; col < this.columns; col += this.gapSize) {
        let cell = new Cell(row, col); 
        newRow.push(cell);
        this.visualizer.drawCell(cell, this.gapSize);
      }
      this.maze.push(newRow);
    }
  }


}