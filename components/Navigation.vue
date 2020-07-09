<template>
  <nav
    class="flex items-center justify-between flex-wrap p-6"
    :class="{ 'bg-gray-900': darkMode, 'bg-green-500': !darkMode }"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">
        Franco
      </span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
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
      <div>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
        >
          Blog
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
        >
          Resume
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white"
        >
          Portfolio
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white"
          @click="darkMode = !darkMode"
        >
          {{ darkMode ? 'Encender luces' : 'Apagar luces' }}
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navigation',
  data: () => ({
    darkMode: false,
  }),
}
</script>
