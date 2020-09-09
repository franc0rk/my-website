<template>
  <nav
    class="flex items-center justify-between flex-wrap p-3"
    :class="{
      'bg-gray-900': $store.state.layout === 'dark',
      'bg-green-500': $store.state.layout !== 'dark',
    }"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="text-white font-semibold text-xl tracking-tight">
        <NuxtLink class="focus:text-white" to="/">franc0rk</NuxtLink>
      </span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white focus:outline-none"
        @click="openedMenu = !openedMenu"
      >
        <svg
          class="fill-current h-3 w-3 focus:outline-none"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow"></div>
      <div v-show="openedMenu">
        <NuxtLink
          to="/blog"
          class="block text-center my-3 lg:inline-block lg:my-0 hover:text-white mx-2"
          :class="layoutLinkClasses"
        >
          Blog
        </NuxtLink>
        <NuxtLink
          to="/resume"
          class="block text-center my-3 lg:inline-block lg:my-0 hover:text-white mx-2"
          :class="layoutLinkClasses"
        >
          Resume
        </NuxtLink>
        <NuxtLink
          to="/portfolio"
          class="block text-center my-3 lg:inline-block lg:my-0 hover:text-white mx-2"
          :class="layoutLinkClasses"
        >
          Portfolio
        </NuxtLink>
        <a
          href="#"
          class="block text-center my-3 lg:inline-block lg:my-0 hover:text-white mx-4"
          :class="layoutLinkClasses"
          @click.prevent="toggleDarkMode"
        >
          <i v-if="$root.layoutName === 'dark'" class="fa fa-sun-o"></i>
          <i v-else class="fa fa-moon-o"></i>
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navigation',
  data: () => ({
    openedMenu: false,
  }),
  computed: {
    layoutLinkClasses() {
      return {
        'text-green-200': this.$store.state.layout !== 'dark',
        'text-gray-200': this.$store.state.layout === 'dark',
      }
    },
  },
  mounted() {
    const layout = localStorage.getItem('layout')
    this.$store.commit('setLayout', layout)
    if (window.innerWidth >= 1024) {
      this.openedMenu = true
    }
  },
  methods: {
    toggleDarkMode() {
      const layout = this.$store.state.layout
      if (layout === 'dark') {
        this.$store.commit('setLayout', 'default')
        localStorage.setItem('layout', 'default')
      } else {
        this.$store.commit('setLayout', 'dark')
        localStorage.setItem('layout', 'dark')
      }
    },
  },
}
</script>
