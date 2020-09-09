<template>
  <div class="rounded shadow-lg my-6 py-6" :class="layoutBgClasses">
    <img class="rounded-full mx-auto w-1/2" src="/franco.jpg" />
    <p class="mt-6 text-xl text-center" :class="layoutTextClasses">
      Franco De Leon
    </p>
    <p class="text-lg text-center text-gray-600">
      Frontend Developer
    </p>
    <p
      v-if="showDescription"
      class="text-base px-6 my-6 text-center"
      :class="layoutTextClasses"
    >
      I enjoy learning about new software development technologies in order to
      apply this knowledge at professional projects.
    </p>
    <p v-if="showEmail" class="text-base text-center">
      <a
        class="text-green-500"
        :class="layoutEmailClasses"
        href="mailto:francodeleon97@hotmail.com"
      >
        francodeleon97@hotmail.com
      </a>
    </p>
    <p v-if="showContactInfo" class="text-base text-center my-3">
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
  props: {
    showDescription: {
      type: Boolean,
      default: true,
    },
    showEmail: {
      type: Boolean,
      default: true,
    },
    showContactInfo: {
      type: Boolean,
      default: true,
    },
  },
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
        'hover:text-green-500': this.$store.state.layout !== 'dark',
        'text-gray-800': this.$store.state.layout !== 'dark',
        'hover:text-white': this.$store.state.layout === 'dark',
        'text-green-500': this.$store.state.layout === 'dark',
      }
    },
    layoutEmailClasses() {
      return {
        'hover:text-gray-800': this.$store.state.layout !== 'dark',
        'hover:text-white': this.$store.state.layout === 'dark',
      }
    },
  },
}
</script>
