<template>
  <div class="rounded shadow-lg my-6 py-6" :class="layoutBgClasses">
    <h3 class="font-bold text-center text-base" :class="layoutTextClasses">
      Archive
    </h3>
    <div class="my-4 text-center" :class="layoutTextClasses">
      <p>2020</p>
      <p>August</p>
      <p>
        <a
          href="/how-did-i-get-into-programming"
          class="text-green-500"
          :class="layoutLinkClasses"
        >
          - How did I get into programming?
        </a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PostsArchive',
  computed: {
    layoutBgClasses() {
      return {
        'bg-gray-800': this.$store.state.layout === 'dark',
        'bg-white': this.$store.state.layout !== 'dark',
      }
    },
    layoutTextClasses() {
      return {
        'text-gray-900': this.$store.state.layout !== 'dark',
        'text-white': this.$store.state.layout === 'dark',
      }
    },
    layoutLinkClasses() {
      return {
        'hover:text-gray-800': this.$store.state.layout !== 'dark',
        'hover:text-white': this.$store.state.layout === 'dark',
      }
    },
  },
}
</script>
