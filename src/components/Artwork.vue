<template>
  <div class="artwork">
    <img :src="art.src" :alt="art.alt">
    <h2>{{ art.title }}</h2>
    <p>{{ art.summary}}</p>
    <button>Read More</button>
  </div>
</template>

<script>
export default {
  name: 'Artwork',
  props: {
    art: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
