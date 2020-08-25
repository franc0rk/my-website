<template>
  <div class="flex flex-wrap h-full pt-6">
    <div
      v-for="project in projects"
      :key="project.id"
      class="w-full md:w-1/3 px-4 pb-6"
    >
      <div
        class="rounded shadow-lg py-6 text-center cursor-pointer"
        :class="layoutBgClasses"
        @click="openProject(project)"
      >
        <h3 class="mb-4 font-bold" :class="layoutTextClasses">
          {{ project.name }}
        </h3>
        <div class="h-48">
          <img class="mx-auto h-full" :src="project.thumbnail" />
        </div>
        <p class="mt-4" :class="layoutTextClasses">{{ project.description }}</p>
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
        description: 'Es un sistema de recomendación de videojuegos',
        thumbnail: 'project1.jpg',
      },
      {
        id: 2,
        name: 'Ecosocial',
        description: 'Red social para apoyo al medio ambiente',
        thumbnail: 'project2.jpg',
      },
      {
        id: 3,
        name: 'Eventicket',
        description: 'An application to make event reservations',
        thumbnail: 'project3.jpg',
      },
      {
        id: 4,
        name: 'Binnacle',
        description: 'A hybrid app for perfoming audits',
        thumbnail: 'project4.jpg',
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
  },
  methods: {
    openProject(projectId) {
      console.log(projectId)
      this.selectedProject = projectId
    },
  },
}
</script>
