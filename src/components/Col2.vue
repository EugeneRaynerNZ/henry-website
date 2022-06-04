<template>
  <div class="col">
    <Artwork v-for="artwork in art" :key="artwork.name" :art="artwork"/>
  </div>
</template>

<script>
import Artwork from './Artwork.vue'

import Ice from "../assets/ice2.jpg"
import Hillscape from "../assets/hillscape2.jpg"
import Square1 from "../assets/square1.jpg"
import BeachScape from "../assets/beachscape.jpg"
import Longform5 from "../assets/longform5.jpg"

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
                id: 'Square1', 
                title: 'Square Abstract with Colours',
                src: Square1,
                summary: '2021, acrylic on canvas, 40 x 20cm',
                fullDescription: ['test', 'test 2', 'test 3']
              },
              {
                id: 'Beachscape', 
                title: 'Abstract Beachscape #1',
                src: BeachScape,
                summary: '2020, acrylic on canvas, 90 x 60cm',
                fullDescription: ['test', 'test 2', 'test 3']
              },
              {
                id: 'hillscape', 
                title: 'Abstract Hillscape',
                src: Hillscape,
                summary: '2021, acrylic on canvas, 70 x 50cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
              {
                id: 'longform5', 
                title: 'Longform Abstract #5',
                src: Longform5,
                summary: '2020, acrylic on canvas, 80 x 40cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
              },
          ]
      }
  }
}
</script>