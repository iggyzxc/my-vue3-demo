<template>
  <v-app>
    <v-main class="main bg-aqua">
      <NavBar/>
      <router-view/>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<style>
  body {
  height: 100%;
  font-family: 'Raleway', Arial, sans-serif;
  margin: 0px;   
  }
  main {
  height: 100%;
  padding: 3em 2em;
  }
  h1 {
    margin: -50px auto;
    padding: 2em 1em;
  }
  h2 {
    margin: 0 auto;
    padding: 1em 1em;
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  a:hover,
  a:focus {
    color: aqua;
  }
  
  .description {
    font-size: 13px;
    max-width: 30em;
    margin: 1.2em auto 1em;
    line-height: 1.3em;
    font-weight: 400;
    margin-top: -25px;
    text-align: auto;
  }

  .bg-aqua {
    background: -webkit-linear-gradient(70deg, rgba(0, 255, 255, 0.863) 40%, transparent 40%);
    background: -o-linear-gradient(70deg, rgba(0, 255, 255, 0.863) 40%, transparent 40%);
    background: -moz-linear-gradient(70deg, rgba(0, 255, 255, 0.863) 40%, transparent 40%);
    background: linear-gradient(70deg, rgba(0, 255, 255, 0.863)  40%, transparent 40%);
    background-attachment: fixed;
  }
</style>