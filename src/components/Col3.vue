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
import Strike from "../assets/strike.jpg"


export default {
  name: 'Col3',
  components: {
      Artwork
  },
  data(){
      return {
          art: [
             {
                id: 'Strike', 
                title: 'Abstract with three colours',
                src: Strike,
                summary: 'Acrylic on canvas, 2019, 40 x 30cm',
                fullDescription: ['Acrylic on canvas, 2019, 40 x 30cm','Not avaliable:', 'Part of a private collection.', '']
              },
              {
                id: 'Tooth', 
                title: 'Abstract Tooth',
                src: Tooth,
                summary: 'Acrylic on canvas, 2021, 70 x 50cm',
                fullDescription: ['Acrylic on canvas, 2021, 70 x 50cm','This artwork is avaliable for display or purchase.', '', '']
              },
              {
                id: 'skull', 
                title: 'Skull',
                src: Skull,
                summary: 'Acrylic on canvas, 2020, 30 x 20cm',
                fullDescription: ['Acrylic on canvas, 2020, 30 x 20cm','Not avaliable:', 'Part of a private collection.', '']
              },
               {
                id: 'Longform6', 
                title: 'Longform Abstract #6',
                src: Longform6,
                summary: 'Acrylic on canvas, 2021, 80 x 40cm',
                fullDescription: ['Acrylic on canvas, 2021, 80 x 40cm','This artwork is avaliable for display or purchase.', '', '']
                
              },
              {
                id: 'Longform4', 
                title: 'Longform Abstract #4',
                src: Longform4,
                summary: 'Acrylic on canvas, 2020, 80 x 40cm',
                fullDescription: ['Acrylic on canvas, 2020, 80 x 40cm','Not avaliable:', 'Part of a private collection.', '']
                
              },
              {
                id: 'Longform3', 
                title: 'Longform Abstract #3',
                src: Longform3,
                summary: 'Acrylic on canvas, 2020, 80 x 40cm',
                fullDescription: ['Acrylic on canvas, 2020, 80 x 40cm','Not avaliable:', 'Part of a private collection.', '']
                
              },
             
          ]
      }
  }
}
</script>
