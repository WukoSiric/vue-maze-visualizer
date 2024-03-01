<script>
import NavBar from './components/NavBar.vue'
import MazeGrid from './components/MazeGrid.vue';
import FloatingButton from './components/FloatingButton.vue';

export default {
  data() {
    return {
      mazeGridRef: null,
    };
  },
  methods: {
    generateMaze() {
      console.log('Generating maze');
      this.mazeGridRef.generateMaze();
    },
    solveMaze(eventInfo = "DFS") {
      const solvingAlgorithm = eventInfo;
      this.mazeGridRef.solveMaze(solvingAlgorithm);
    },
  },
  mounted() {
    this.mazeGridRef = this.$refs.mazeGridRef;
  },
  components: {
    NavBar,
    MazeGrid,
    FloatingButton,
  },
};
</script>

<template>
  <header>
    <NavBar @solve-maze="solveMaze" @generate-maze="generateMaze"></NavBar>
  </header>
  <main>
    <MazeGrid ref="mazeGridRef"></MazeGrid>
    <FloatingButton buttonText="Generate" :buttonFunction="generateMaze"></FloatingButton>
    <FloatingButton buttonText="Solve" :buttonFunction="solveMaze"></FloatingButton>
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
