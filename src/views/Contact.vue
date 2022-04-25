<template>
    <main>
        <h1>Contact</h1>
        <p>Please enter your contact information below and<br />I will get back to you as soon as possible!</p>
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