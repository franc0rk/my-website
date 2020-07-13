<template>
  <div class="rounded bg-white shadow-lg py-12 px-16 my-6">
    <div class="relative" v-if="latest">
      <div
        class="transform -rotate-45 bg-green-700 text-green-100 absolute -top-1 -left-5 font-semibold text-center px-6 py-1"
        role="alert"
      >
        Latest post
      </div>
    </div>
    <h3 class="text-3xl text-gray-800" :class="{ relative: latest }">
      {{ post.title }}
    </h3>
    <p class="text-gray-900 h-auto my-6" :class="{ relative: latest }">
      {{ post.body }}
    </p>
    <p class="text-gray-900 h-auto my-6" :class="{ relative: latest }">
      {{ post.body }}
    </p>
    <p class="text-gray-900 h-auto my-6" :class="{ relative: latest }">
      {{ post.body }}
    </p>
    <p>
      <a
        v-if="readMore"
        :href="'/post' + post.id"
        class="block w-1/6 text-center bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
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
}
</script>
