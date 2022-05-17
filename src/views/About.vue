<template>
    <main>
      <h1>About</h1>
      
      <div class="about--summary">
          <img :src="Henry" alt="Henry De Malmanche">
          <p>Text in here about henry, art, science, nerd etc</p>
      </div>
    </main>
</template>

<script>
import Henry from '../assets/artist.jpg'
export default {
  name: 'About',
  data(){
      return {
          Henry: Henry
      }
  }
}
</script>

<style>
.about--summary{
    margin: 0 auto;
    max-width: 600px;
}

.about--summary img{
    max-width: 100%;
    margin-bottom: 20px;
}
</style>
