<template>
  <div id="app" :class="{modalActive: $root.modalOverflowTrigger}">
    <div class="full-height">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about-me">About Me</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    
      <router-view></router-view>
      <footer>&copy; Copyright Henry DeMalmanche</footer>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
export default Vue.extend({
  name: 'App',
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap');

body{
  padding: 0;
  margin: 0;
  width: 100%;
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.full-height{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: calc(100vw - 100%);
}

main{
  padding: 0 0 60px 0;
}

.vm--modal{
  width: auto !important;
  height: auto !important;
  top: 0 !important;
  left: 0 !important;
}

.modalActive{
  overflow: hidden;
}

h1, h2, h3 {
  font-family: 'EB Garamond', serif;
}

nav{
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px 0;
}

nav a{
  text-decoration: none;
  color: black;
  padding-bottom: 5px;
}

.router-link-exact-active{
  border-bottom: 1px solid black;
  font-weight: bold;
}

h1{
  padding: 20px 0 0 0;
}

.container{
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0;
}

footer{
  text-align: center;
  padding: 20px 10px;
  background: rgb(51, 51, 51);
  color: white;
  margin-top: auto;
}

@media screen and (max-width: 600px) {
    .container{
        display: block;
        max-width: 400px;
        padding: 0 20px;
    }

    .col{
        text-align: left;
    }

    .button{
        display: none;
    }
}
</style>
