<template>
    <main>
      <h1>My Art</h1>
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

import Vue from 'vue'
export default Vue.extend({
  name: 'Home',
  components: {
    Col1,
    Col2,
    Col3
  }
})
</script>

<style>
.col{
  display: flex;
  text-align: left;
  flex-direction: column;
  flex: 33%;
}

.col .artwork{
  margin-top: 50px;
  padding: 20px;
}

.col .artwork:first-child{
  margin-top: 0px;
}
</style>
