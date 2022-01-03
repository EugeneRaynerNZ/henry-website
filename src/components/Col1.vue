<template>
  <div class="col">
    <Artwork v-for="artwork in art" :key="artwork.name" :art="artwork"/>
  </div>
</template>

<script>
import Artwork from './Artwork.vue'
import Data from '../data/data.json'

// import Image from "../assets/image1.jpg"

export default {
  name: 'Col1',
  components: {
      Artwork
  },
  data(){
      return {
          art: Data
      }
  }
}
</script>