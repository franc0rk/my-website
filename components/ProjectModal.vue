<template>
  <div
    class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
  >
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <div
      class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-3xl sm:w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              id="modal-headline"
              class="text-lg leading-6 font-medium text-gray-900 font-bold"
            >
              {{ project.name }}
            </h3>
            <div class="mt-2">
              <img class="h-64" :src="project.thumbnail" />
            </div>
          </div>
          <div class="mt-6 px-6">
            {{ project.description }}
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            @click="$emit('hide')"
          >
            Close
          </button>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectModal',
  props: {
    project: {
      required: true,
    },
  },
  methods: {
    ttt(e) {
      console.log(e)
    },
  },
}
</script>
