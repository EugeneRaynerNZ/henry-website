<template>
    <main>
        <h1>Contact</h1>
        <p>Please enter your contact information below and<br />the artist will contact you shortly.</p>
        <ContactForm />
    </main>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
export default {
  name: 'Contact',
  components: {
    ContactForm
  },
}
</script>

<style>

</style>