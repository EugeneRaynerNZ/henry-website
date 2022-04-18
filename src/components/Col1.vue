<template>
  <div class="col">
    <Artwork v-for="artwork in art" :key="artwork.name" :art="artwork"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Artwork from './Artwork.vue'
import Image from "../assets/image1.jpg"

export default Vue.extend({
  name: 'Col1',
  components: {
      Artwork
  },
  data(){
      return {
          art: [
              {title: 'The Blue Atom', cleanUrl: 'the-blue-atom', src: Image, summary: 'A one of a kind artwork produced by myself which showcases the way in which atoms in the universe coincide with waves in the ocean.', fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']},
              {title: 'The Blue Atom2', cleanUrl: 'the-blue-atom', src: Image, summary: 'A one of a kind artwork produced by myself which showcases the way in which atoms in the universe coincide with waves in the ocean.', fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']},
          ]
      }
  }
})
</script>