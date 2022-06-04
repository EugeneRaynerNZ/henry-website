<template>
  <div class="col">
    <Artwork v-for="artwork in art" :key="artwork.name" :art="artwork"/>
  </div>
</template>

<script>
import Artwork from './Artwork.vue'

import Tooth from "../assets/tooth2.jpg"
import Longform4 from "../assets/longforme4.jpg"
import Longform3 from "../assets/longforme3.jpg"
import Longform6 from "../assets/longforme6.jpg"
import Skull from "../assets/skull.jpg"

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
                id: 'skull', 
                title: 'Skull',
                src: Skull,
                summary: '2020, acrylic on canvas, 30 x 20cm',
                fullDescription: ['test', 'test 2', 'test 3']
              },
              {
                id: 'Longform4', 
                title: 'Longform Abstract #4',
                src: Longform4,
                summary: '2020, acrylic on canvas, 80 x 40cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
                
              },
              {
                id: 'Longform3', 
                title: 'Longform Abstract #3',
                src: Longform3,
                summary: '2020, acrylic on canvas, 80 x 40cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
                
              },
              {
                id: 'Longform6', 
                title: 'Longform Abstract #6',
                src: Longform6,
                summary: '2021, acrylic on canvas, 80 x 40cm',
                fullDescription: ['paragraph 1', 'paragraph 2', 'paragraph 3']
                
              },
          ]
      }
  }
}
</script>
