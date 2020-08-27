<template>
  <div class="rounded shadow-lg my-6 py-6" :class="layoutBgClasses">
    <h3
      class="font-bold text-center text-base uppercase"
      :class="layoutTextClasses"
    >
      Languages
    </h3>
    <ul class="px-16" :class="layoutTextClasses">
      <li class="my-4">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/4">Spanish</div>
          <progress-bar progress="full" class="w-full lg:w-3/4" />
        </div>
      </li>
      <li class="my-4">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/4">English</div>
          <progress-bar progress="4/5" class="w-full lg:w-3/4" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'LanguagesCard',
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
