<template>
  <div class="flex flex-wrap h-full">
    <div class="w-full lg:w-1/3 px-4">
      <bio-card
        :show-description="false"
        :show-email="false"
        :show-contact-info="false"
      />
      <contact-card />
      <education-card />
      <languages-card />
    </div>
    <div class="w-full lg:w-2/3 px-4">
      <about-me-card />
      <experience-card />
      <skills-card />
    </div>
    <div class="w-3/4"></div>
    <div class="w-4/5"></div>
    <div class="w-2/3"></div>
    <div class="w-3/4"></div>
    <div class="w-3/5"></div>
  </div>
</template>
<script>
export default {
  name: 'ResumePage',
  methods: {
    print() {
      window.print()
    },
  },
}
</script>
