<template>
    <main>
      <h1>My Work</h1>
      <section class="container">
        <Col1></Col1>
        <Col2></Col2>
        <Col3></Col3>
      </section>
    </main>
</template>

<script>
import Col1 from '../components/Col1.vue'
import Col2 from '../components/Col2.vue'
import Col3 from '../components/Col3.vue'

export default {
  name: 'Home',
  components: {
    Col1,
    Col2,
    Col3
  }
}
</script>

<style>
.container{
  display: flex;
  max-width: 900px;
  margin: 0 auto;
}

.col{
  display: flex;
  text-align: left;
  padding: 20px;
}

@media screen and (max-width: 600px) {
    .container{
        display: block;
        max-width: 400px;
    }

    .col{
        text-align: left;
    }

    .button{
        display: none;
    }
}
</style>
