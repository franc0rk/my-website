<template>
  <div class="rounded shadow-lg my-6 py-6" :class="layoutBgClasses">
    <h3 class="px-6 font-bold uppercase" :class="layoutTextClasses">
      About me
    </h3>
    <p class="px-6" :class="layoutTextClasses">
      I enjoy learning about new software development technologies in order to
      apply this knowledge at professional projects.
    </p>
  </div>
</template>
<script>
export default {
  name: 'ContactCard',
  computed: {
    layoutBgClasses() {
      return {
        'bg-gray-800': this.$root.layoutName === 'dark',
        'bg-white': this.$root.layoutName === 'default',
      }
    },
    layoutTextClasses() {
      return {
        'text-gray-900': this.$root.layoutName === 'default',
        'text-white': this.$root.layoutName === 'dark',
      }
    },
  },
}
</script>
