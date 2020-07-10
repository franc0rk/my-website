<template>
  <div>
    <div
      v-for="post in posts"
      :key="post.id"
      class="rounded bg-white shadow-lg my-12 p-12"
    >
      <h5 class="text-4xl text-gray-800">
        {{ post.title }}
      </h5>
      <p class="text-gray-900 h-auto my-6">
        {{ post.body }}
      </p>
      <p>
        <a
          :href="'/post' + post.id"
          class="block text-center bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
        >
          Read more
        </a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    posts: [
      {
        id: 1,
        title: 'How did I get into programming?',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur molestias similique sit sapiente, et omnis ut atque, tenetur corporis illum in saepe dignissimos repellendus, alias totam labore quibusdam quas at.',
      },
      {
        id: 2,
        title: 'Second Post',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur molestias similique sit sapiente, et omnis ut atque, tenetur corporis illum in saepe dignissimos repellendus, alias totam labore quibusdam quas at.',
      },
    ],
  }),
}
</script>
