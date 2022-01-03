<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about-me">About Me</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap');

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

h1, h2, h3 {
  font-family: 'EB Garamond', serif;
}

nav{
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

nav a{
  text-decoration: none;
  color: black;
  padding-bottom: 5px;
}

.router-link-exact-active{
  border-bottom: 1px solid black;
}

h1{
  padding: 60px 0;
}

.container{
  display: flex;
  max-width: 900px;
  margin: 0 auto;
}

.col{
  display: flex;
  text-align: left;
  padding: 20px;
}
</style>
