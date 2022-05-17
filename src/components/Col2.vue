<template>
  <div class="col">
    <Artwork v-for="artwork in art" :key="artwork.name" :art="artwork"/>
  </div>
</template>

<script>
import Artwork from './Artwork.vue'

import Ice from "../assets/ice.jpg"
import Sunset from "../assets/hillscape.jpg"

export default {
  name: 'Col2',
  components: {
      Artwork
  },
  data(){
      return {
          art: [
              {
                id: 'ice', 
                title: 'Cold Colour',
                src: Ice,
                summary: '2020, acrylic on canvas, 70 x 50cm',
                fullDescription: ['test', 'test 2', 'test 3']
              },
              {
                id: 'hillscape', 
                title: 'Abstract Beachscape #2',
                src: Sunset,
                summary: '2021, acrylic on canvas, 70 x 50cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
          ]
      }
  }
}
</script>