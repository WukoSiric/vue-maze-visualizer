<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Navbar from './components/Navbar.vue'
import Maze from './components/Maze.vue';
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main>
    <h1>Welcome to the Maze Solver! </h1>
    <p>As you can see I have a lot to say inside of here...</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus, neque odio dolorem autem nesciunt. Culpa itaque at facere deserunt beatae corporis. Repellendus doloribus doloremque eveniet necessitatibus quasi nihil suscipit!
    Consequatur fugit, ipsa quo perspiciatis voluptatem dignissimos animi cupiditate maiores, esse repellendus impedit velit autem. Autem, debitis! Consequatur quo nulla quaerat eligendi nihil rem voluptatum, debitis illo tenetur quos laborum!
    Tempore aliquid amet non optio itaque dolor molestias consequuntur quam ipsum! Nesciunt ratione culpa accusamus sequi dolores reiciendis voluptatum inventore ad. Temporibus dolorum minus doloribus eius asperiores autem quibusdam aliquam.
    Ea at aliquam veritatis aliquid iure deleniti, debitis a possimus nemo iusto nostrum beatae nesciunt. Nisi, possimus repellat? Nemo iure ipsum nihil possimus animi totam, non amet nam ducimus voluptate.
    Tempore dolores unde quasi, commodi nobis optio ratione, placeat, fugiat repellendus eveniet odio? Esse ducimus officiis cum est laudantium a commodi animi repudiandae architecto, eveniet asperiores totam sunt voluptas officia.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nulla? Nesciunt, quisquam omnis sed quas nulla eligendi recusandae mollitia blanditiis? Modi quo perferendis magni nobis nisi cumque illum laudantium quod!
    Exercitationem praesentium officia dolor obcaecati sed, perspiciatis quas ex ab minima. Sint deserunt explicabo nisi laboriosam nostrum iure, alias eum vero odit blanditiis aliquid labore dolorem perspiciatis maxime natus sapiente.</p>
    <Maze></Maze>
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
