<template>
  <div class="my-6">
    <post v-for="post in posts" :key="post.id" :post="post" read-more />
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
