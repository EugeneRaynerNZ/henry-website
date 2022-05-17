<template>
  <div class="col">
    <Artwork v-for="artwork in art" :key="artwork.name" :art="artwork"/>
  </div>
</template>

<script>
import Artwork from './Artwork.vue'

import Tooth from "../assets/tooth.jpg"
import Longform4 from "../assets/longform4.jpg"

export default {
  name: 'Col3',
  components: {
      Artwork
  },
  data(){
      return {
          art: [
              {
                id: 'Tooth', 
                title: 'Abstract Tooth',
                src: Tooth,
                summary: '2021, acrylic on canvas, 70 x 50cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
              {
                id: 'Longform4', 
                title: 'Longform Abstract #4',
                src: Longform4,
                summary: '2020, acrylic on canvas, 80 x 40cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
          ]
      }
  }
}
</script>
