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
                console.log("Toggled menu to " + this.menuExpanded);
                this.menuExpanded = !this.menuExpanded;
            },
            updateIsMobile() { 
                this.isMobile = window.innerWidth < 1024;
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
        <a v-if="isMobile" href="javascript:void(0);" :class="{toggle: isMobile}" @click="toggleMenu()">
            <i class="fa fa-bars"></i>
        </a>
        <div v-if="!isMobile || menuExpanded" class="navbar-contents">
            <h1> Generation Algorithm</h1>
            <a href="" class="nav-item">Random</a>
            <h1> Solving Algorithm</h1>
            <a href="" class="nav-item">Breadth First</a>
            <a href="" class="nav-item">Depth First</a>

            <div class="controls">
                <button> Play </button>
                <button> Clear Board</button>
                <button> Reset </button>
            </div>
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

.navbar-contents {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    text-align: center;
    background-color: rgb(51, 51, 51);
    padding: 10px;
}

h1 {
    color: white;
}

/* Desktop design - apply when the screen width is 1024px or larger */
@media (min-width: 1024px) {
    .navbar { 
        position: fixed;
        left: 0;
        width: 10%;
        height: 100%;

    }
    .navbar-contents {
        grid-template-rows: none;
        gap: none;
        align-content: start;
    }
}
</style>