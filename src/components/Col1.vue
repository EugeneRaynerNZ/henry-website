<template>
  <div class="col">
    <Artwork v-for="artwork in art" :key="artwork.name" :art="artwork"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Artwork from './Artwork.vue'
import Sunset from "../assets/sunset2.jpg"
import BlackCircle from "../assets/blackcircle.jpg"
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
                id: 'abstract-beachscape2', 
                title: 'Abstract Beachscape #2',
                src: Sunset,
                summary: 'Acrylic on canvas, 2021, 70 x 50cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
              {
                id: 'black-cirlce', 
                title: 'Void with Drips',
                src: BlackCircle,
                summary: 'Acrylic on canvas, 2021, 70 x 50cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
          ]
      }
  }
})
</script>