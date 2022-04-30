<template>
  <div class="col">
    <Artwork v-for="artwork in art" :key="artwork.name" :art="artwork"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Artwork from './Artwork.vue'
import AbstractCloningVector from "../assets/image1.jpg"
import ColourBlind from "../assets/colour-blind.jpg"
// import Image2 from "../assets/2.jpg"
// import Image3 from "../assets/3.jpg"
// import Image4 from "../assets/4.jpg"

export default Vue.extend({
  name: 'Col1',
  components: {
      Artwork
  },
  data(){
      return {
          art: [
              {
                id: 'abstract-cloning-vector', 
                title: 'Abstract Cloning Vector',
                src: AbstractCloningVector,
                summary: 'Acrylic on canvas, 2021',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
              {
                id: 'colour-blind', 
                title: 'Colourblind',
                src: ColourBlind,
                summary: 'Acrylic on canvas, 2020, 40 x 40cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
              {
                id: 'the-blue-atom-2', 
                title: 'The Blue Atom 2',
                src: Image,
                summary: 'A one of a kind artwork produced by myself which showcases the way in which atoms in the universe coincide with waves in the ocean.',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
              {
                id: 'the-blue-atom-2', 
                title: 'The Blue Atom 2',
                src: Image,
                summary: 'A one of a kind artwork produced by myself which showcases the way in which atoms in the universe coincide with waves in the ocean.',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
          ]
      }
  }
})
</script>