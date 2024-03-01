<script>
import NavBar from './components/NavBar.vue'
import MazeGrid from './components/MazeGrid.vue';
import FloatingButton from './components/FloatingButton.vue';

export default {
  data() {
    return {
      mazeGridRef: null,
      isMobile: window.innerWidth < 1024,
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
    updateIsMobile() {
      this.isMobile = window.innerWidth < 1024;
    },
  },
  mounted() {
    this.mazeGridRef = this.$refs.mazeGridRef;
    window.addEventListener('resize', this.updateIsMobile);
  },
  unmounted() {
    window.removeEventListener('resize', this.updateIsMobile);
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
    <div :class="[!isMobile ? 'hidden' : 'floatingButtons']">
      <div class="buttonsContainer">
        <FloatingButton faClass="fa fa-refresh" :buttonFunction="generateMaze"></FloatingButton>
        <FloatingButton faClass="fa fa-play" :buttonFunction="solveMaze"></FloatingButton>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hidden {
  display: none;
}
.floatingButtons {
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.buttonsContainer {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* margin: 0 auto; Center the buttons horizontally */
  gap: 10px;
}

@media (min-width: 1024px) {
  main {
    padding-left: 80px;
    margin: 4% 120px;
  }
}
</style>
