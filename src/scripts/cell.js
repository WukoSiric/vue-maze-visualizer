export default class Cell {
  constructor(row, column) {
    this.row = row;
    this.col = column;
    this.hasTop = true;
    this.hasRight = true;
    this.hasBottom = true;
    this.hasLeft = true;
    this.visited = false;
    this.isFinish = false;
    this.isStart = false;
  }
}