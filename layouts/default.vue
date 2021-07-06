<template>
  <div :class="layoutGlobalBg">
    <navigation />
    <Nuxt />
    <layout-footer />
  </div>
</template>
<script>
export default {
  layout: 'default',
  data: () => ({
    loading: true,
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1500)
  },
  computed: {
    layoutGlobalBg() {
      return {
        'bg-gray-700': this.$store.state.layout === 'dark',
        'bg-gray-100': this.$store.state.layout !== 'dark',
      }
    },
  },
}
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
