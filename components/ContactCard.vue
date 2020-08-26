<template>
  <div class="rounded shadow-lg my-6 py-6" :class="layoutBgClasses">
    <h3
      class="font-bold text-center text-base uppercase"
      :class="layoutTextClasses"
    >
      Contact
    </h3>
    <p class="px-16 my-2" :class="layoutTextClasses">
      <i class="fa fa-map-marker"></i>
      Monterrey, Nuevo Leon, Mexico
    </p>
    <p class="px-16 my-2" :class="layoutTextClasses">
      <a
        class="text-green-500"
        :class="layoutEmailClasses"
        href="mailto:francodeleon97@hotmail.com"
      >
        <i class="fa fa-envelope"></i>
        francodeleon97@hotmail.com
      </a>
    </p>
    <p class="px-16 my-2" :class="layoutTextClasses">
      <a
        class="text-green-500"
        :class="layoutEmailClasses"
        href="https://www.linkedin.com/in/franc0rk/"
        target="_blank"
      >
        <i class="fa fa-linkedin"></i>
        franc0rk
      </a>
    </p>
    <p class="px-16 my-2" :class="layoutTextClasses">
      <a
        class="text-green-500"
        :class="layoutEmailClasses"
        href="https://github.com/franc0rk"
        target="_blank"
      >
        <i class="fa fa-github"></i>
        franc0rk
      </a>
    </p>
    <p class="px-16 my-2" :class="layoutTextClasses">
      <a
        class="text-green-500"
        :class="layoutEmailClasses"
        href="#"
        @click.prevent="() => null"
      >
        <i class="fa fa-globe"></i>
        francork.com
      </a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'AboutMeCard',
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
    layoutEmailClasses() {
      return {
        'hover:text-gray-800': this.$root.layoutName === 'default',
        'hover:text-white': this.$root.layoutName === 'dark',
      }
    },
  },
}
</script>
