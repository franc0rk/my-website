<template>
  <post :post="post" read-more latest />
</template>
<script>
export default {
  name: 'LatestPost',
  data: () => ({
    post: {
      id: 1,
      title: 'How did I get into programming?',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officia, molestias, corporis deserunt, eius quia reprehenderit accusamus, excepturi suscipit libero architecto sed sit nulla quidem vero adipisci cupiditate asperiores praesentium!',
    },
  }),
}
</script>
