<template>
  <div class="flex flex-wrap">
    <div class="w-full border-solid border" :class="layoutBorderColor">
      <div class="flex flex-wrap">
        <div class="bg-green-500" :class="'w-' + progress">
          &nbsp;
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: String,
      required: true,
    },
  },
  computed: {
    layoutBorderColor() {
      return {
        'border-white': this.$store.state.layout === 'dark',
        'border-gray-900': this.$store.state.layout !== 'dark',
      }
    },
  },
}
</script>
