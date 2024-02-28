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
    this.canvas.width = window.innerWidth - 200;
    this.canvas.height = window.innerHeight - 150;
    this.gapSize = 20;
    this.rows = Math.floor(this.canvas.width / this.gapSize);
    this.columns= Math.floor(this.canvas.height / this.gapSize); 
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