export default class Cell { 
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.hasTop = true;
        this.hasRight = true;
        this.hasBottom = true;
        this.hasLeft = true;
    }
}