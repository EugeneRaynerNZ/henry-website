<template>
    <main>
      <section>
        <h1>Name of artwork</h1>
        <img :src="img.src" :alt="img.alt">
        <p>Artwork Blurb goes here Artwork Blurb goes here Artwork Blurb goes here Artwork Blurb goes here Artwork Blurb goes here </p>
      </section>
      <section class="contact">
          <ContactForm />
      </section>
    </main>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'Contact',
  props: {
      img: Object
  },
  components: {
      ContactForm
  }
}
</script>

<style>

</style>