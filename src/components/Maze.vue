<script>
export default {
  data() {
    let canvas; 
    let context;
    let width; 
    let height;
    let gap;
    let rows; 
    let columns; 

  },
  mounted() {
    this.canvas = document.getElementById("maze");
    this.context = maze.getContext("2d");
    this.canvas.width, this.width = window.innerWidth;
    this.canvas.height, this.height = window.innerHeight;
    this.gap = 10;
    this.columns= Math.floor(this.width / this.gap); 
    this.rows = Math.floor(this.height / this.gap); 
  },
  methods: {
    drawTopLine(x, y) {
      this.context.beginPath(); 
      this.context.moveTo(x, y);
      this.context.lineTo(x + 100, y + 100);
      this.context.stroke(); 
      console.log("drawing line");
    },
    drawGrid() { 
      for (let i = 0; i < this.rows; i += this.gap) {
        for (let j = 0; j < this.columns; j+= this.gap) {
          // draw top line
          this.context.beginPath(); 
          this.context.moveTo(i, j);
          this.context.lineTo(i + this.gap, j);
          this.context.stroke();
          // draw right line
          this.context.beginPath(); 
          this.context.moveTo(i + this.gap, j);
          this.context.lineTo(i + this.gap, j + this.gap);
          this.context.stroke();
          // draw bottom line 
          this.context.beginPath(); 
          this.context.moveTo(i, j + this.gap);
          this.context.lineTo(i + this.gap, j + this.gap);
          this.context.stroke();
          // draw left line 
          this.context.beginPath(); 
          this.context.moveTo(i, j);
          this.context.lineTo(i, j + this.gap);
          this.context.stroke();
        }
      }
      console.log(this.width);
    }
  }
}
</script>
<template>
  <button v-on:click="drawGrid">Test</button>
  <canvas id="maze"></canvas>
</template>

<style>
</style>