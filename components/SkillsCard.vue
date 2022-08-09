<template>
  <div class="rounded shadow-lg my-6 py-6" :class="layoutBgClasses">
    <h3
      class="font-bold text-center text-base uppercase"
      :class="layoutTextClasses"
    >
      Skills
    </h3>
    <ul class="px-10 flex flex-wrap" :class="layoutTextClasses">
      <li class="w-1/2 px-6">
        <div class="flex flex-wrap my-4">
          <div class="w-full lg:w-1/4">Javascript</div>
          <progress-bar progress="3/4" class="w-full lg:w-3/4" />
        </div>
        <div class="flex flex-wrap my-4">
          <div class="w-full lg:w-1/4">Vue</div>
          <progress-bar progress="4/5" class="w-full lg:w-3/4" />
        </div>
        <div class="flex flex-wrap my-4">
          <div class="w-full lg:w-1/4">React</div>
          <progress-bar progress="2/3" class="w-full lg:w-3/4" />
        </div>
        <div class="flex flex-wrap my-4">
          <div class="w-full lg:w-1/4">Angular</div>
          <progress-bar progress="2/3" class="w-full lg:w-3/4" />
        </div>
      </li>
      <li class="w-1/2 px-6">
        <div class="flex flex-wrap my-4">
          <div class="w-full lg:w-1/4">Laravel</div>
          <progress-bar progress="3/4" class="w-full lg:w-3/4" />
        </div>
        <div class="flex flex-wrap my-4">
          <div class="w-full lg:w-1/4">Solidity</div>
          <progress-bar progress="1/2" class="w-full lg:w-3/4" />
        </div>
        <div class="flex flex-wrap my-4">
          <div class="w-full lg:w-1/4">NodeJS</div>
          <progress-bar progress="1/2" class="w-full lg:w-3/4" />
        </div>
        <div class="flex flex-wrap my-4">
          <div class="w-full lg:w-1/4">MySQL</div>
          <progress-bar progress="3/5" class="w-full lg:w-3/4" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SkillsCard',
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
  },
}
</script>
