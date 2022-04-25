<template>
  <div class="col">
    <Artwork v-for="artwork in art" :key="artwork.name" :art="artwork"/>
  </div>
</template>

<script>
import Artwork from './Artwork.vue'

import Image from "../assets/image1.jpg"
import Image2 from "../assets/2.jpg"

export default {
  name: 'Col2',
  components: {
      Artwork
  },
  data(){
      return {
          art: [
              {
                id: 'the-blue-atom', 
                title: 'The Blue Atom',
                src: Image,
                summary: 'A one of a kind artwork produced by myself which showcases the way in which atoms in the universe coincide with waves in the ocean.',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
              {
                id: 'the-blue-atom', 
                title: 'The Blue Atom 3',
                src: Image2,
                summary: 'A one of a kind artwork produced by myself which showcases the way in which atoms in the universe coincide with waves in the ocean.',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
          ]
      }
  }
}
</script>