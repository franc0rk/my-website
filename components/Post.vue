<template>
  <div class="rounded shadow-lg py-12 px-16 my-6" :class="layoutBgClasses">
    <div v-if="latest" class="relative">
      <div
        class="transform -rotate-45 bg-green-700 text-green-100 absolute -top-1 -left-5 font-semibold text-center px-6 py-1"
        role="alert"
      >
        Latest post
      </div>
    </div>
    <h3 class="text-3xl" :class="{ ...layoutTextClasses, relative: latest }">
      {{ post.title }}
    </h3>
    <div
      class="my-6 text-justify text-lg"
      :class="{ ...layoutTextClasses, relative: latest }"
      v-html="post.body"
    />
    <p>
      <a
        v-if="readMore"
        :href="post.url"
        class="block w-full lg:w-1/6 text-center font-semibold py-2 px-4 border rounded bg-transparent hover:border-transparent"
        :class="layoutBtnClasses"
      >
        Read more
      </a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true,
    },
    readMore: {
      type: Boolean,
      default: false,
    },
    latest: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    layoutBgClasses() {
      return {
        'bg-white': this.$store.state.layout === 'default',
        'bg-gray-800': this.$store.state.layout === 'dark',
      }
    },
    layoutTextClasses() {
      return {
        'text-white': this.$store.state.layout === 'dark',
        'text-gray-900': this.$store.state.layout === 'default',
      }
    },
    layoutBtnClasses() {
      return {
        'border-green-500': this.$store.state.layout === 'default',
        'hover:bg-green-500': this.$store.state.layout === 'default',
        'hover:text-white': this.$store.state.layout === 'default',
        'text-green-700': this.$store.state.layout === 'default',
        'border-white': this.$store.state.layout === 'dark',
        'hover:bg-white': this.$store.state.layout === 'dark',
        'hover:text-green-500': this.$store.state.layout === 'dark',
        'text-white': this.$store.state.layout === 'dark',
      }
    },
  },
}
</script>
