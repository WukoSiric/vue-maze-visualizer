<script setup>
import NavBar from './components/NavBar.vue'
import MazeGrid from './components/MazeGrid.vue';
import { ref } from 'vue';

const generateMaze = () => {
  console.log('Generating maze');
  mazeGridRef.value.generateMaze();
}

const mazeGridRef = ref(null);
</script>

<template>
  <header>
    <NavBar @generate-maze="generateMaze"></NavBar>
  </header>
  <main>
    <MazeGrid ref="mazeGridRef"></MazeGrid>
  </main>
</template>

<style scoped>

  main {
    padding-top: 50px;
    margin: 7% 10%;
  }

  @media (min-width: 1024px) {
    main {
      padding-left: 80px;
      margin: 0% 120px;
    }
  }

</style>
