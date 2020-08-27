<template>
  <div v-if="!loading" :class="layoutGlobalBg">
    <navigation />
    <Nuxt />
    <layout-footer />
  </div>
  <div
    v-else
    class="w-full h-screen flex items-center justify-center bg-green-500"
  >
    <div class="w-32 text-white">
      <img
        class="w-full"
        src="https://3.bp.blogspot.com/-sGwGbveyXFw/WxpvMxhuroI/AAAAAAAeR0Q/nRFES9t4jD0yQhu9HnzSD4bAe1TPmgZUwCLcBGAs/s1600/AW1190604_00.gif"
      />
      <p class="text-center">Loading...</p>
    </div>
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
