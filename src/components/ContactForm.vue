<template>
    <div class="contant-form--container"><MyForm /></div>
</template>

<script>
import MyForm from './Form.vue'
export default {
  name: 'ContactForm',
  components: {
    MyForm
  }
}
</script>

<style scoped>

  .contant-form--container{
      max-width: 900px;
      padding: 0 20px;
      margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    .contant-form--container{
        display: block;
        max-width: 400px;
        padding: 0 20px;
        
    }
}
</style>
