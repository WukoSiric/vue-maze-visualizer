import Cell from "./cell";

export default class Visualizer {
	constructor(mazeContext) {
		this.context = mazeContext;
	}

	async drawCellWithDelay(cell, gapSize, fillStyle = "white") {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.drawCell(cell, gapSize, fillStyle);
        resolve();
      }, 5);
    });
  }

	drawCell(cell, gapSize, fillStyle = "white") {
		this.context.fillStyle = fillStyle;
		this.context.fillRect(cell.row * gapSize, cell.col * gapSize, gapSize, gapSize);
		if (cell.hasTop) this.drawTop(cell, gapSize);
		if (cell.hasRight) this.drawRight(cell, gapSize);
		if (cell.hasBottom) this.drawBottom(cell, gapSize);
		if (cell.hasLeft) this.drawLeft(cell, gapSize);
	}

	drawTop(cell, gapSize) {
		this.context.beginPath();
		this.context.moveTo(cell.row * gapSize, cell.col * gapSize);
		this.context.lineTo(cell.row * gapSize + gapSize, cell.col * gapSize);
		this.context.stroke();
	}

	drawRight(cell, gapSize) {
		this.context.beginPath();
		this.context.moveTo(cell.row * gapSize + gapSize, cell.col * gapSize);
		this.context.lineTo(cell.row * gapSize + gapSize, cell.col * gapSize + gapSize);
		this.context.stroke();
	}

	drawBottom(cell, gapSize) {
		this.context.beginPath();
		this.context.moveTo(cell.row * gapSize, cell.col * gapSize + gapSize);
		this.context.lineTo(cell.row * gapSize + gapSize, cell.col * gapSize + gapSize);
		this.context.stroke();
	}

	drawLeft(cell, gapSize) {
		this.context.beginPath();
		this.context.moveTo(cell.row * gapSize, cell.col * gapSize);
		this.context.lineTo(cell.row * gapSize, cell.col * gapSize + gapSize);
		this.context.stroke();
	}

	colorCell(cell, gapSize, colorString) {
		this.context.fillStyle = colorString;
		this.context.fillRect(cell.row * gapSize, cell.col * gapSize, gapSize, gapSize);
	}
}