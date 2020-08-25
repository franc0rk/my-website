<template>
  <div
    class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
  >
    <div class="fixed inset-0 transition-opacity" @click="$emit('hide')">
      <div class="absolute inset-0 bg-black opacity-75"></div>
    </div>
    <div
      class="rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-3xl sm:w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      :class="layoutBgClasses"
    >
      <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4" :class="layoutBgClasses">
        <div class="absolute right-0 top-0" :class="layoutTextClasses">
          <button
            class="px-4 py-2 text-xl focus:outline-none"
            @click="$emit('hide')"
          >
            &times;
          </button>
        </div>
        <div class="sm:flex sm:items-start">
          <div class="w-1/3">
            <h3
              id="modal-headline"
              class="text-center text-lg leading-6 font-medium font-bold"
              :class="layoutTextClasses"
            >
              {{ project.name }}
            </h3>
            <div class="mt-2">
              <img
                v-if="selectedAttachment"
                class="h-64 w-full"
                :src="selectedAttachment"
              />
              <img v-else class="h-64 w-full" :src="project.thumbnail" />
              <div class="flex justify-center items-center">
                <div
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-0 m-3 rounded-full text-white"
                  :style="{ background: bgTags[tag] }"
                >
                  <span class="text-sm font-bold">{{ tag }}</span>
                </div>
              </div>
              <div v-if="project.url" class="text-center mt-2">
                <a class="text-green-500" :href="project.url" target="_blank">
                  {{ project.url }}
                </a>
              </div>
            </div>
          </div>
          <div class="w-2/3 mt-12 px-6">
            <div :class="layoutTextClasses" v-html="project.description" />
            <div class="flex justify-center items-center">
              <div
                v-for="(attachment, attachmentIndex) in project.attachments"
                :key="attachmentIndex"
                class="cursor-pointer w-16 h-16 m-3"
                @click="selectedAttachment = attachment"
              >
                <img class="w-full h-full" :src="attachment" />
              </div>
            </div>
          </div>
        </div>
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
  data: () => ({
    selectedAttachment: null,
  }),
  computed: {
    layoutBgClasses() {
      return {
        'bg-white': this.$root.layoutName === 'default',
        'bg-gray-800': this.$root.layoutName === 'dark',
      }
    },
    layoutTextClasses() {
      return {
        'text-white': this.$root.layoutName === 'dark',
        'text-gray-900': this.$root.layoutName === 'default',
      }
    },
    bgTags() {
      return {
        Laravel: '#ec0e00',
        Bootstrap: '#7952b3',
        Vue: '#4fc08d',
        Quasar: '#1976d2',
      }
    },
  },
}
</script>
