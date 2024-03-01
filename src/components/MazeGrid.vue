<script>
import Maze from '@/scripts/maze';
export default {
  data() {
  },
  mounted() {
    this.canvas = document.getElementById("maze");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth - 200;
    this.canvas.height = window.innerHeight - 150;
    this.gapSize = 30;
    this.rows = Math.floor(this.canvas.width / this.gapSize);
    this.columns= Math.floor(this.canvas.height / this.gapSize); 
    this.maze = new Maze(this.rows, this.columns, this.gapSize, this.context);
    this.maze.initializeMaze();
    this.maze.generateMaze(0, 0, this.maze.maze[0][0]);
  },
  methods: {
    generateMaze() {
      this.maze.initializeMaze();
      this.maze.generateMaze(0, 0, this.maze.maze[0][0]);
    },
    solveMaze(solvingAlgorithm) {
      this.maze.solveMaze(solvingAlgorithm);
    }
  }
}
</script>
<template>
  <canvas id="maze"></canvas>
</template>

<style>
</style>