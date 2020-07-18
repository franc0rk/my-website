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
        'bg-green-500': this.$root.layoutName === 'default',
        'bg-gray-900': this.$root.layoutName === 'dark',
      }
    },
    layoutLinkClasses() {
      return {
        'text-green-500': this.$root.layoutName === 'dark',
        'text-white': this.$root.layoutName === 'default',
        underline: this.$root.layoutName === 'default',
      }
    },
  },
}
</script>
