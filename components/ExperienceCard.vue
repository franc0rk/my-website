<template>
  <div class="rounded shadow-lg my-6 py-6" :class="layoutBgClasses">
    <h3 class="px-6 font-bold uppercase" :class="layoutTextClasses">
      Work Experience
    </h3>
    <ul class="px-6" :class="layoutTextClasses">
      <li class="my-6">
        <span class="text-green-500 font-semibold">AS Diseño</span>
        <span>-</span>
        <strong>Web Developer</strong>
        <span>|</span>
        <em>July 2015 - July 2016</em>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ExperienceCard',
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
