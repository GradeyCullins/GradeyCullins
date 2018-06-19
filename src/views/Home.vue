<template>
  <section>
    <About/>
  </section>
</template>

<script>
// @ is an alias to /src
import About from '@/views/About.vue'

export default {
  name: 'home',
  components: {
    About
  }
}
</script>
