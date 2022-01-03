<template>
  <div class="artwork">
    <img :src="art.src" :alt="art.title">
    <h2>{{ art.title }}</h2>
    <p>{{ art.summary}}</p>
    <router-link :to="'/work/' + art.cleanUrl" class="button">Read More</router-link>
  </div>
</template>

<script>
export default {
  name: 'Artwork',
  props: {
    art: Object
  }
}
</script>

<style>
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
