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
        '<p class="my-4">Many people (around 10 lol) have asked me about how did I learn to code, how could I do that if it is “too hard”, how should they start to code in order to be a developer, among other similar questions.</p><p class="my-4">Today I am going to answer these main 3 questions and a little bit more taking into account my short experience of 5 years coding professionally.</p><h4 class="font-semibold my-4">How did I learn to code?</h4><p class="my-4">When I was 15 I told myself it would be great to make websites, so I started my journey making blogs with Blogger. If you know Blogger you could say that it’s not coding since it is a kind of cms and I just was managing content. That’s true but there’s a template section where you can type html, css and js freely. Although I was writing code in this languages...',
      url: '/how-did-i-get-into-programming',
    },
  }),
}
</script>
