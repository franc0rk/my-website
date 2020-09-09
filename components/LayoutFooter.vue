<template>
  <footer class="block w-full p-3 text-white" :class="layoutClasses">
    <p>
      Made with
      <a :class="layoutLinkClasses" href="https://nuxtjs.org/" target="blank">
        NuxtJS.
      </a>
    </p>
  </footer>
</template>
<script>
export default {
  name: 'LayoutFooter',
  computed: {
    layoutClasses() {
      return {
        'bg-green-500': this.$store.state.layout !== 'dark',
        'bg-gray-900': this.$store.state.layout === 'dark',
      }
    },
    layoutLinkClasses() {
      return {
        'text-green-500': this.$store.state.layout === 'dark',
        'text-white': this.$store.state.layout !== 'dark',
        underline: this.$store.state.layout !== 'dark',
      }
    },
  },
}
</script>
