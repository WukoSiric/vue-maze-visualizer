<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main>
    <h1>This is my big heading</h1>
    <p>As you can see I have a lot to say inside of here...</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero nesciunt maiores provident cumque, molestiae reprehenderit magni voluptatibus? Quod deserunt exercitationem ipsam veritatis quam numquam labore iure vitae dolor molestiae!</p>
  </main>
</template>

<style scoped>

  main {
    padding-top: 10px;
    margin: 1% 10%;
  }

  @media (min-width: 1024px) {
    main {
      padding-left: 80px;
    }
  }

</style>
