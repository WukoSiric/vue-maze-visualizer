<script setup>
import NavBar from './components/NavBar.vue'
import MazeGrid from './components/MazeGrid.vue';
import { ref } from 'vue';

const generateMaze = () => {
  console.log('Generating maze');
  mazeGridRef.value.generateMaze();
}

const solveMaze = (eventInfo) => {
  const solvingAlgorithm = eventInfo;
  mazeGridRef.value.solveMaze(solvingAlgorithm);
}

const mazeGridRef = ref(null);
</script>

<template>
  <header>
    <NavBar @solve-maze="solveMaze" @generate-maze="generateMaze"></NavBar>
  </header>
  <main>
    <MazeGrid ref="mazeGridRef"></MazeGrid>
  </main>
</template>

<style scoped>

  @media (min-width: 1024px) {
    main {
      padding-left: 80px;
      margin: 4% 120px;
    }
  }

</style>
