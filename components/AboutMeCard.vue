<template>
  <div class="rounded shadow-lg my-6 py-6" :class="layoutBgClasses">
    <h3 class="px-6 font-bold uppercase" :class="layoutTextClasses">
      About me
    </h3>
    <p class="px-6" :class="layoutTextClasses">
      I enjoy learning about new software development technologies in order to
      apply this knowledge at professional projects. Self-taught, ability to
      adopt different solutions to problems that may arise. Eager to acquire new
      knowledge and face future challenges.
    </p>
  </div>
</template>
<script>
export default {
  name: 'ContactCard',
  computed: {
    layoutBgClasses() {
      return {
        'bg-gray-800': this.$store.state.layout === 'dark',
        'bg-white': this.$store.state.layout === 'default',
      }
    },
    layoutTextClasses() {
      return {
        'text-gray-900': this.$store.state.layout === 'default',
        'text-white': this.$store.state.layout === 'dark',
      }
    },
  },
}
</script>
