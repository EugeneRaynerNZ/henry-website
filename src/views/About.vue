<template>
    <main>
      <h1>Henry de Malmanche - Abstract Artist</h1>
      
      <div class="about--summary">
          <img :src="Henry" alt="Henry de Malmanche">
            <p>Born in Auckland, New Zealand, I am now based in Brisbane, Australia where I work as a research scientist in the field of Biotechnology. <br /><br />My artwork explores the abstract and the experimental with an emphasis on colour and pattern. Selected works are avaliable for purchase or to exhibit.</p>
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

@media screen and (max-width: 600px) {
    .about--summary{
        display: block;
        max-width: 400px;
        padding: 0 20px;
    }
}
</style>
