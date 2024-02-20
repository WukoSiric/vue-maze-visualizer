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
        <a v-if="!isMobile || menuExpanded" href="" class="nav-item">Home</a>
        <a v-if="!isMobile || menuExpanded" href="" class="nav-item">About Us</a>
        <a v-if="!isMobile || menuExpanded" href="" class="nav-item">Contact Us</a>
        <a v-if="!isMobile || menuExpanded" href="" class="nav-item">FAQ</a>
    </div>
</template>

<style scoped>
/* Mobile design */
.navbar {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    text-align: center;

    background-color: rgb(51, 51, 51);
    position: fixed;
    top: 0; 
    width: 100%;
}

/* Desktop design - apply when the screen width is 1024px or larger */
@media (min-width: 1024px) {
    .navbar {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); /* Multiple columns on desktop */
    }
}
</style>