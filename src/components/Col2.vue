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
import Tumult from "../assets/tumult.jpg"


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
                summary: 'Acrylic on canvas, 2020, 70 x 50cm',
                fullDescription: ['Acrylic on canvas, 2020, 70 x 50cm','This artwork is avaliable for display or purchase.', '', '']
              },
              {
                id: 'tumult', 
                title: 'Abstract Rockscape',
                src: Tumult,
                summary: 'Acrylic on canvas, 2022, 40 x 40cm',
                fullDescription: ['Acrylic on canvas, 2022, 40 x 40cm','This artwork is avaliable for display or purchase.', '', '']
              },
              {
                id: 'Square1', 
                title: 'Square Abstract with Colours',
                src: Square1,
                summary: 'Acrylic on canvas, 2021, 40 x 20cm',
                fullDescription: ['Acrylic on canvas, 2021, 40 x 20cm','Not avaliable:', 'Part of a private collection.', '']
              },
              {
                id: 'Beachscape', 
                title: 'Abstract Beachscape #1',
                src: BeachScape,
                summary: 'Acrylic on canvas, 2020, 90 x 60cm',
                fullDescription: ['Acrylic on canvas, 2020, 90 x 60cm','Avaliable for display only.', 'Already purchased.', 'test 3']
              },
              {
                id: 'hillscape', 
                title: 'Abstract Hillscape',
                src: Hillscape,
                summary: 'Acrylic on canvas, 2021, 70 x 50cm',
                fullDescription: ['Acrylic on canvas, 2021, 70 x 50cm','Not avaliable:', 'Part of a private collection.', '']
              },
              {
                id: 'longform5', 
                title: 'Longform Abstract #5',
                src: Longform5,
                summary: 'Acrylic on canvas, 2020, 80 x 40cm',
                fullDescription: ['Acrylic on canvas, 2020, 80 x 40cm','Not avaliable:', 'Part of a private collection.', '']
              },
          ]
      }
  }
}
</script>