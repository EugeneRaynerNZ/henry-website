<template>
  <div class="col">
    <Artwork v-for="artwork in art" :key="artwork.name" :art="artwork"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Artwork from './Artwork.vue'
import Sunset from "../assets/sunset2.jpg"
import McM from "../assets/mcm.jpg"
import Peaks from "../assets/peaks.jpg"
import Alpine from "../assets/alpine.jpg"
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
                id: 'peaks', 
                title: 'Hauntscape',
                src: Peaks,
                summary: 'Acrylic on canvas, 2020, 60 x 90cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
              {
                id: 'abstract-beachscape2', 
                title: 'Abstract Beachscape #2',
                src: Sunset,
                summary: 'Acrylic on canvas, 2021, 70 x 50cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
              {
                id: 'Mcm', 
                title: 'Abstract in Mid-Centry Modern',
                src: McM,
                summary: 'Acrylic on canvas, 2021, 40 x 40cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },

              {
                id: 'alpine', 
                title: 'Alpine Dive',
                src: Alpine,
                summary: 'Acrylic on canvas, 2020, 80 x 40cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
          ]
      }
  }
})
</script>