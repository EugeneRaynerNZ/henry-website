<template>
  <div class="artwork">
    <img :src="art.src" :alt="art.title">
    <h2>{{ art.title }}</h2>
    <p>{{ art.summary}}</p>
    <button @click="openModal" class="button">Read More</button>
    <div v-if="modalIsOpen" class="modal">
      <div class="modal--container">
        <div class="modal--container-header">
          <h2>{{ art.title }}</h2>
          <p @click="closeModal" class="x-button">x</p>
        </div>
        <div class="modal--container-body">
          <img :src="art.src" :alt="art.title">
          <div class="description">
            <p v-for="(description, index) in art.fullDescription" :key="index">{{description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Artwork',
  props: {
    art: Object
  },
  data(){
    return {
      modalIsOpen: false,
    }
  },
  methods: {
    openModal(){
      this.modalIsOpen = true
      this.$modalOverflowTrigger = true
      
    },
    closeModal(){
      this.modalIsOpen = false
      this.$modalOverflowTrigger = false
    }
  },
})
</script>

<style>
.modal{
  background: rgba(255,255,255,0.8);
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.modal--container{
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.modal--container-header{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}

.modal--container-body{
  display: flex;
  flex-direction: row;
  width: 100%;
}

.modal--container-body .description{
  padding: 20px;
  background: white;
  margin-left: 20px;
  width: 100%;
}

.modal--container-body .description p{
  margin-top: 0;
}

.x-button{
  font-size: 20px;
  cursor: pointer;
}

.modal--container img{
  /* height: 80%; */
  width: 400px;
}

.artwork img{
  max-width:100%;
}

.artwork .button{
  border: none;
  background: white;
  font-size: 16px;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.13);
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s;
}

.artwork .button:hover{
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.23);
  margin-top: -2px;
}
</style>
