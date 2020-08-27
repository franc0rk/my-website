<template>
  <div class="rounded shadow-lg my-6 py-6" :class="layoutBgClasses">
    <h3
      class="font-bold text-center text-base uppercase"
      :class="layoutTextClasses"
    >
      Education
    </h3>
    <h4 class="mt-4 font-semibold text-center" :class="layoutTextClasses">
      Software Technology Engineering
    </h4>
    <p class="px-6 text-center" :class="layoutTextClasses">at</p>
    <h5 class="text-center" :class="layoutTextClasses">
      FIME - UANL
    </h5>
    <h3
      class="my-4 px-6 font-bold text-center text-base uppercase"
      :class="layoutTextClasses"
    >
      Certifications
    </h3>
    <ul class="px-16">
      <li>
        <a
          class="text-green-500"
          :class="layoutEmailClasses"
          href="/certifications/web.pdf"
        >
          - Web Development
        </a>
      </li>
      <li>
        <a
          class="text-green-500"
          :class="layoutEmailClasses"
          href="/certifications/linux.pdf"
        >
          - NDG Linux Unhatched
        </a>
      </li>
      <li>
        <a
          class="text-green-500"
          :class="layoutEmailClasses"
          href="/certifications/toefl.pdf"
        >
          - TOEFL ITP
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'EducationCard',
  computed: {
    layoutBgClasses() {
      return {
        'bg-gray-800': this.$store.state.layout === 'dark',
        'bg-white': this.$store.state.layout === 'default',
      }
    },
    layoutTextClasses() {
      return {
        'text-gray-900': this.$store.state.layout === 'default',
        'text-white': this.$store.state.layout === 'dark',
      }
    },
    layoutEmailClasses() {
      return {
        'hover:text-gray-800': this.$store.state.layout === 'default',
        'hover:text-white': this.$store.state.layout === 'dark',
      }
    },
  },
}
</script>
