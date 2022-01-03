<template>
  <div class="artwork">
    <img :src="art.src" :alt="art.title">
    <h2>{{ art.title }}</h2>
    <p>{{ art.summary}}</p>
    <button @click="openModal" class="button">Read More</button>
    <div v-if="activeModal" class="modal">
      <div class="modal--container">
        <div class="modal--container-header">
          <h2>{{ art.title }}</h2>
          <p @click="closeModal" class="x-button">x</p>
        </div>
        <img :src="art.src" :alt="art.title">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artwork',
  props: {
    art: Object
  },
  data(){
    return {
      activeModal: false,
    }
  },
  methods: {
    openModal(){
      this.activeModal = true
    },
    closeModal(){
      this.activeModal = false
    }
  }
}
</script>

<style>
.modal{
  background: rgba(255,255,255,0.8);
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  overflow-y: scroll;
}

.modal--container{
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal--container-header{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}

.x-button{
  font-size: 20px;
  cursor: pointer;
}

.modal--container img{
  height: 80%;
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
