<template>
  <div class="col">
    <Artwork v-for="artwork in art" :key="artwork.name" :art="artwork"/>
  </div>
</template>

<script>
import Artwork from './Artwork.vue'

export default {
  name: 'Col1',
  components: {
      Artwork
  },
  data(){
      return {
          art: [
              {title: 'The Blue Atom', src: '', searchEngineTitle: '', summary: 'A one of a kind artwork produced by myself which showcases the way in which atoms in the universe coincide with waves in the ocean.'}
          ]
      }
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
