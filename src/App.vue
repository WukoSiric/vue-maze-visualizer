<script>
import NavBar from './components/NavBar.vue'
import MazeGrid from './components/MazeGrid.vue';
import FloatingButton from './components/FloatingButton.vue';
import StatusPrompt from './components/StatusPrompt.vue';

export default {
  components: {
    NavBar,
    MazeGrid,
    FloatingButton,
    StatusPrompt
  },
  data() {
    return {
      mazeGridRef: null,
      isMobile: window.innerWidth < 1024,
    };
  },
  mounted() {
    this.mazeGridRef = this.$refs.mazeGridRef;
    window.addEventListener('resize', this.updateIsMobile);
  },
  unmounted() {
    window.removeEventListener('resize', this.updateIsMobile);
  },
  methods: {
    generateMaze() {
      this.mazeGridRef.generateMaze();
    },
    solveMaze(eventInfo = "DFS") {
      this.$forceUpdate();
      const solvingAlgorithm = eventInfo;
      this.mazeGridRef.solveMaze(solvingAlgorithm);
    },
    updateIsMobile() {
      this.isMobile = window.innerWidth < 1024;
    },
  },
  computed: {
    isGenerating() {
      if (!this.mazeGridRef) return true; 
      return this.mazeGridRef.isGenerating;
    },
    isSolving() {
      if (!this.mazeGridRef) return false; 
      return this.mazeGridRef.isSolving;
    }
  }
};
</script>

<template>
  <div class="container">
    <NavBar id="navbar" @solve-maze="solveMaze" @generate-maze="generateMaze"></NavBar>
    <MazeGrid ref="mazeGridRef"></MazeGrid>
    <div :class="[!isMobile ? 'hidden' : 'floatingButtons']">
      <div class="buttonsContainer">
        <FloatingButton faClass="fa fa-refresh" :buttonFunction="generateMaze"></FloatingButton>
        <FloatingButton faClass="fa fa-play" :buttonFunction="solveMaze"></FloatingButton>
      </div>
    </div>
    <StatusPrompt :isVisible="isGenerating" message="Generating..."></StatusPrompt>
    <StatusPrompt :isVisible="isSolving" message="Solving..."></StatusPrompt>    
  </div>
</template>

<style scoped>

.container {
  display: grid;
  height: 100vh;
}
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
  gap: 10px;
}

@media (min-width: 768px) {
  .container {
    grid-template: 
    "1fr 1fr";
    height: 100vh;
    align-items: center;
    gap: 20px;
  }
}
</style>
