import Cell from "./cell";

export default class Visualizer {
	constructor(mazeContext) {
		this.context = mazeContext;
	}

	drawCell(cell, gapSize) {
		this.context.fillStyle = "white";
		this.context.fillRect(cell.row, cell.col, gapSize, gapSize);
		if (cell.hasTop) this.drawTop(cell, gapSize);
		if (cell.hasRight) this.drawRight(cell, gapSize);
		if (cell.hasBottom) this.drawBottom(cell, gapSize);
		if (cell.hasLeft) this.drawLeft(cell, gapSize);
	}

	drawTop(cell, gapSize) {
		this.context.beginPath();
		this.context.moveTo(cell.row, cell.col);
		this.context.lineTo(cell.row + gapSize, cell.col);
		this.context.stroke();
	}

	drawRight(cell, gapSize) {
		this.context.beginPath();
		this.context.moveTo(cell.row + gapSize, cell.col);
		this.context.lineTo(cell.row + gapSize, cell.col + gapSize);
		this.context.stroke();
	}

	drawBottom(cell, gapSize) {
		this.context.beginPath();
		this.context.moveTo(cell.row, cell.col + gapSize);
		this.context.lineTo(cell.row + gapSize, cell.col + gapSize);
		this.context.stroke();
	}

	drawLeft(cell, gapSize) {
		this.context.beginPath();
		this.context.moveTo(cell.row, cell.col);
		this.context.lineTo(cell.row, cell.col + gapSize);
		this.context.stroke();
	}

	colorCell(cell, gapSize, colorString) {
		this.context.fillStyle = colorString;
		this.context.fillRect(cell.row, cell.col, gapSize, gapSize);
	}
}