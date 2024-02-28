<script setup>
import NavBar from './components/NavBar.vue'
import MazeGrid from './components/MazeGrid.vue';
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <MazeGrid></MazeGrid>
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
