<template>
  <div id="app">
    <nav>
      <a href="/">Home</a>
      <a href="/about-me">About Me</a>
      <a href="/my-work">My Work</a>
      <a href="/contact">Contact</a>
    </nav>
    <main>
      <h1>My Work</h1>
      <section class="container">
        <Col1></Col1>
        <Col2></Col2>
        <Col3></Col3>
      </section>
    </main>
    
  </div>
</template>

<script>
import Col1 from './components/Col1.vue'
import Col2 from './components/Col2.vue'
import Col3 from './components/Col3.vue'

export default {
  name: 'App',
  components: {
    Col1,
    Col2,
    Col3
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
