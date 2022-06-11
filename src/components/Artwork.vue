<template>
  <div class="artwork">
    <img :src="art.src" :alt="art.title" @click="show" class="artworkhover">
    <h2>{{ art.title }}</h2>
    <p>{{ art.summary}}</p>
    <modal :name="art.id">
        <div class="modal--container">
        <div class="modal--container-header">
          <h2>{{ art.title }}</h2>
          <p @click="hide" class="x-button">x</p>
        </div>
        <div class="modal--container-body">
          <img :src="art.src" :alt="art.title">
          <div class="description">
            <div v-for="(description, index) in art.fullDescription" :key="index"><p v-if="description">{{description}}</p></div>
            <button class="button" @click="goToContactForm">Enquire Now</button>
          </div>
        </div>
      </div>
    </modal>
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
        show () {
            this.$modal.show(this.art.id);
        },
        hide () {
            this.$modal.hide(this.art.id);
        },
        goToContactForm(){
          this.$root.enquire = this.art.id
          this.$router.push({ name: 'Contact' })
        }
    },

    mounted(){
      console.log(this.art)
    }
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

.button{
  border: none;
  background: white;
  font-size: 16px;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.13);
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s;
}

.button:hover{
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.23);
  margin-top: -2px;
}

.artworkhover{
  cursor:pointer;
  transition:all 0.6s;
}

.artworkhover:hover{
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.23);
  transform:scale(1.1)
}
</style>
