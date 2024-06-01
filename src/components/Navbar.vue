<script>
export default {
  emits: ['solveMaze', 'generateMaze'],
  props: [],
  data() {
    return {
      menuExpanded: false,
      isMobile: window.innerWidth < 768,
      solvingAlgorithm: 'DFS',
      currentBackgroundIndex: 0,
      backgroundStrings: [
        'linear-gradient(rgb(241, 241, 241) 50%, rgb(160, 160, 160))',
        'linear-gradient(rgba(255, 255, 255, 0.205) 75%, rgb(27, 36, 66)), url("https://w.wallhaven.cc/full/pk/wallhaven-pky9yp.png")',
        'url("https://w.wallhaven.cc/full/kw/wallhaven-kw6m71.jpg")',
        'url("https://w.wallhaven.cc/full/4l/wallhaven-4lj87l.jpg")',
        'url("https://w.wallhaven.cc/full/5g/wallhaven-5gq913.jpg")',
        'linear-gradient(rgba(255, 255, 255, 0.205) 75%, rgb(27, 36, 66)), url(https://w.wallhaven.cc/full/d5/wallhaven-d5xw6o.jpg)',
        'url(https://www.datocms-assets.com/12893/1607883685-amazon-rainforest-clouds.jpg)'
      ]
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateIsMobile);
  },
  unmounted() {
    window.removeEventListener('resize', this.updateIsMobile);
  },
  methods: {
    toggleMenu() {
      this.menuExpanded = !this.menuExpanded;
    },
    closeMenu() {
      this.menuExpanded = false;
    },
    updateIsMobile() {
      this.isMobile = window.innerWidth < 768;
      if (this.isMobile) {
        this.menuExpanded = false;
      }
    },
    generateMaze() {
      this.$emit('generateMaze');
    },
    solveMaze() {
      this.$emit('solveMaze', this.solvingAlgorithm);
    },
    changeBackground() {
      const body = document.body;
      this.currentBackgroundIndex += 1; 
      this.currentBackgroundIndex = this.currentBackgroundIndex % this.backgroundStrings.length;
      body.style.backgroundImage = this.backgroundStrings[this.currentBackgroundIndex];
    },
    setBackground(backgroundString) {
      const body = document.body;
      body.style.backgroundImage = backgroundString;
    }
  }
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="navbar">
    <!-- Logo and Menu -->
    <span id="MazeSolver">MazeSolver</span>
    <a v-if="isMobile" href="javascript:void(0);" @click="toggleMenu()">
      <i class="fa fa-bars"></i>
    </a>
    <!-- Maze Options -->
    <div v-if="!isMobile || menuExpanded" class="navbar-contents">
      <h1><i class="fa fa-plus-square"></i> Generation</h1>
      <button @click="generateMaze(); closeMenu()"><i class="fa fa-refresh"></i> Generate</button>
      <h1><i class="fa fa-map"></i> Solving</h1>
      <label class="radio-container">
        <input type="radio" v-model="solvingAlgorithm" value="DFS" id="dfs" name="solvingAlgorithm" checked />
        Depth First Search
      </label>
      <label class="radio-container">
        <input type="radio" v-model="solvingAlgorithm" value="BFS" id="bfs" name="solvingAlgorithm" />
        Breadth First Search
      </label>
      <button @click="solveMaze(); closeMenu()"> <i class="fa fa-play"></i> Solve</button>
      <h1><i class="fa fa-image"></i> Wallpaper</h1>
      <div class="backgrounds">
        <div v-for="(background, index) in backgroundStrings" :key="background" class="background" :style="{backgroundImage: background}" @click="setBackground(background)">
          
        </div>      
      </div>
      <!-- <button @click="changeBackground"> Change Background </button> -->
    </div>
  </div>
</template>

<style scoped>
/* Mobile design */
a,
.green {
  text-decoration: none;
  font-weight: bold;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 10px;
}

.navbar {
  display: grid;
  grid-template-columns: 1fr;
  background-color: rgba(0, 0, 0, 0.856);
  backdrop-filter: blur(10px);
  top: 0;
  width: 100%;
  justify-items: center;
  transition: all ease-in-out 0.2s;
}

#MazeSolver {
  color: white;
  font-weight: 500;
  font-size: 2rem;
  padding: 10px;
}

.navbar-contents {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  text-align: center;
  padding: 10px;
}

h1 {
  font-size: 1.2rem;
  color: white;
}

/* Radio buttons */
.radio-container {
  display: grid;
  background-color: #82998d;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  transition: all ease-in-out 0.1s;
}

.radio-container:hover {
  background-color: #6cbf96;
  transform: scale(0.95);
}

input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Buttons */
button {
  color: white;
  background-color: rgb(79, 79, 255);
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  transition: all ease-in-out 0.05s;
  user-select: none;
}

button:hover {
  background-color: rgb(57, 57, 253);
  transform: scale(1.05);
  cursor: pointer;
}

/* Style for the checked state of the radio button */
.radio-container:has(input[type="radio"]:checked) {
  background-color: #47cc89;
  color: white;
}

.backgrounds { 
  display: grid;
  grid-template: 
    "1fr 1fr 1fr";
  gap: 5px;

  transition: all ease-in-out 0.1s;
}

.background { 
  box-sizing: border-box;
  min-height: 5vh;
  width: 100%;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.445);
  border-radius: 10px;
  column-span: 1;
  background-size: cover;
}

.background:hover {
  cursor: pointer;
  transform: scale(0.95);
  opacity: 95%;
}

/* Desktop design - apply when the screen width is 1024px or larger */
@media (min-width: 768px) {
  .navbar {
    display: grid;
    align-content: start;
    width: 100%;
    height: 100%;
  }

  .navbar-contents {
    grid-template-rows: none;
    gap: none;
    align-content: start;
  }
}
</style>