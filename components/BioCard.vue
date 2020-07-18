<template>
  <div class="rounded shadow-lg my-6 py-6" :class="layoutBgClasses">
    <img class="rounded-full mx-auto w-1/2" src="/franco.jpg" />
    <p class="mt-6 text-xl text-center" :class="layoutTextClasses">
      Franco De Leon
    </p>
    <p class="text-lg text-center text-gray-600">
      Frontend Developer
    </p>
    <p class="text-base px-6 my-6 text-center" :class="layoutTextClasses">
      I enjoy learning about new software development technologies in order to
      apply this knowledge at professional projects.
    </p>
    <p class="text-base text-center">
      <a
        class="text-green-500"
        :class="layoutEmailClasses"
        href="mailto:francodeleon97@hotmail.com"
      >
        francodeleon97@hotmail.com
      </a>
    </p>
    <p class="text-base text-center my-3">
      <a :class="layoutLinkClasses" href="https://github.com/franc0rk">
        <i class="fa fa-github"></i>
      </a>
      <a
        class="mx-3"
        :class="layoutLinkClasses"
        href="https://www.linkedin.com/in/franc0rk/"
      >
        <i class="fa fa-linkedin"></i>
      </a>
      <a :class="layoutLinkClasses" href="https://twitter.com/franc0rk">
        <i class="fa fa-twitter"></i>
      </a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'BioCard',
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
    layoutLinkClasses() {
      return {
        'hover:text-green-500': this.$root.layoutName === 'default',
        'text-gray-800': this.$root.layoutName === 'default',
        'hover:text-white': this.$root.layoutName === 'dark',
        'text-green-500': this.$root.layoutName === 'dark',
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
