<template>
  <div class="flex flex-wrap h-full pt-6">
    <div
      v-for="project in projects"
      :key="project.id"
      class="w-full md:w-1/3 px-4 pb-6"
    >
      <div
        class="rounded shadow-lg p-6 text-center cursor-pointer"
        :class="layoutBgClasses"
        @click="openProject(project)"
      >
        <h3 class="mb-4 font-bold" :class="layoutTextClasses">
          {{ project.name }}
        </h3>
        <div class="h-48">
          <img class="mx-auto h-full" :src="project.thumbnail" />
        </div>
        <p class="mt-4" :class="layoutTextClasses">
          {{ project.description.substr(0, 60) + '...' }}
        </p>
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
      </div>
    </div>
    <project-modal
      v-if="selectedProject"
      :project="selectedProject"
      @hide="selectedProject = null"
    />
  </div>
</template>
<script>
export default {
  data: () => ({
    selectedProject: null,
    projects: [
      {
        id: 1,
        name: 'JuegosAdaptativos',
        description:
          'Es un sistema de recomendación de videojuegos Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ex esse est consequuntur, quas praesentium odit deserunt harum, iure sequi voluptatem soluta, sint inventore, fugit eveniet molestias eligendi dolore repellat.',
        thumbnail: '/project1.jpg',
        tags: ['Laravel', 'Bootstrap'],
        url: '',
        attachments: ['/project1.jpg', '/project1.jpg', '/project1.jpg'],
      },
      {
        id: 2,
        name: 'Ecosocial',
        description:
          'This project consists of a both web and mobile application, which pretends to attract people for using it and worry a little bit about environment in order to promote sustainable development.<br><br>Nowadays most of people use social media and actually we do not use it for the best purposes, so <strong>Ecosocial</strong> is a good reason for dealing with a social network and make this world better.',
        thumbnail: '/project2.jpg',
        tags: ['Vue', 'Quasar'],
        url: 'https://github.com/franc0rk/ecosocial',
        attachments: [
          '/project_attachments/ecosocial1.png',
          '/project_attachments/ecosocial2.png',
          '/project_attachments/ecosocial3.png',
        ],
      },
      {
        id: 3,
        name: 'Eventicket',
        description:
          'An application to make event reservations Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ex esse est consequuntur, quas praesentium odit deserunt harum, iure sequi voluptatem soluta, sint inventore, fugit eveniet molestias eligendi dolore repellat.',
        thumbnail: '/project3.jpg',
        tags: ['Laravel', 'Bootstrap'],
        url: 'https://github.com/franc0rk/eventicket',
        attachments: ['/project3.jpg', '/project3.jpg', '/project3.jpg'],
      },
      {
        id: 4,
        name: 'Binnacle',
        description: 'A hybrid app for perfoming audits',
        thumbnail: '/project4.jpg',
        tags: ['Vue', 'Quasar', 'Laravel'],
        url: 'https://app.binnacle.mx',
        attachments: ['/project4.jpg', '/project4.jpg', '/project4.jpg'],
      },
    ],
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
  methods: {
    openProject(projectId) {
      this.selectedProject = projectId
    },
  },
}
</script>
