<script>
    export default {
        data() {
            return {
                menuExpanded: false,
                isMobile: window.innerWidth < 1024
            };
        },
        methods: {
            toggleMenu() {
                this.menuExpanded = !this.menuExpanded;
            },
            updateIsMobile() { 
                this.isMobile = window.innerWidth < 1024;
                if (this.isMobile) {
                    this.menuExpanded = false;
                }
            }
        },
        mounted() { 
            window.addEventListener('resize', this.updateIsMobile);
        },
        destroyed() {
            window.removeEventListener('resize', this.updateIsMobile);
        }
    }
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="navbar">
        <span id="MazeSolver">MazeSolver</span>
        <a v-if="isMobile" href="javascript:void(0);" @click="toggleMenu()">
            <i class="fa fa-bars"></i>
        </a>
        <div v-if="!isMobile || menuExpanded" class="navbar-contents">
            <h1><i class="fa fa-plus-square"></i> Generation</h1>
            <label class="radio-container"> 
                <input type="radio" value="random" id="random" checked/>
                Random
            </label>
            <h1><i class="fa fa-map"></i> Solving</h1>
            <label class="radio-container"> 
                <input type="radio" value="dfs" id="dfs" name="solvingAlgorithm" checked/>
                Depth First Search
            </label>
            <label class="radio-container"> 
                <input type="radio" value="bfs" id="bfs" name="solvingAlgorithm"/>
                Breadth First Search
            </label>
        </div>
    </div>
</template>

<style scoped>
/* Mobile design */
a, .green {
    text-decoration: none;
    font-weight: bold;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
    padding: 10px;
}

.navbar { 
    display: grid;
    grid-template-columns: 1fr;
    background-color: rgb(51, 51, 51);
    position: fixed;
    top: 0; 
    width: 100%;
    justify-items: center;
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
    background-color: rgb(51, 51, 51);
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

/* Style for the checked state of the radio button */
.radio-container:has(input[type="radio"]:checked) {
    background-color: #47cc89;
    color: white; 
}

/* Desktop design - apply when the screen width is 1024px or larger */
@media (min-width: 1024px) {
    .navbar { 
        display: grid;
        align-content: start;
        position: fixed;
        left: 0;
        width: auto;
        height: 100%;

    }
    .navbar-contents {
        grid-template-rows: none;
        gap: none;
        align-content: start;
    }
}
</style>