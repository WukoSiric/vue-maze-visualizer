<script setup>
import Maze from '@/scripts/maze';
</script>
<script>
export default {
  data() {
  },
  mounted() {
    this.canvas = document.getElementById("maze");
    this.context = this.canvas.getContext("2d");
    this.canvas.width, this.width = window.innerWidth;
    this.canvas.height, this.height = window.innerHeight;
    this.gapSize = 10;
    this.columns= Math.floor(this.width / this.gapSize); 
    this.rows = Math.floor(this.height / this.gapSize);
    // Generate empty maze

    this.maze = new Maze(this.rows, this.columns, this.gapSize, this.context);
    this.maze.initializeMaze();
  },
  methods: {
  }
}
</script>
<template>
  <canvas id="maze"></canvas>
</template>

<style>
</style>