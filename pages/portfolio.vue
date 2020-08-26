<template>
  <div class="flex flex-wrap h-full pt-6">
    <div
      v-for="project in projects"
      :key="project.id"
      class="w-full lg:w-1/3 px-4 pb-6"
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
        <p
          class="mt-4 h-24 overflow-hidden"
          :class="layoutTextClasses"
          v-html="project.description"
        />
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
          '<p>This is a game recommendation system which takes into account users likes and performs a search based on diffuse logic after filling a small survey about videogames they could like.</p><br><p class="hidden lg:block">Besides, it also allows users to have their own profiles and to vote recommended videogames in order to improve the searching algorithm. That way, the results are improved so that the recommendations are better.</p>',
        thumbnail: '/project1.jpg',
        tags: ['Laravel', 'Bootstrap'],
        url: '',
        attachments: [
          '/project_attachments/adap1.jpg',
          '/project_attachments/adap2.jpg',
          '/project_attachments/adap3.jpg',
        ],
      },
      {
        id: 2,
        name: 'Ecosocial',
        description:
          '<p>This project consists of a both web and mobile application, which pretends to attract people for using it and worry a little bit about environment in order to promote sustainable development.</p><br><p class="hidden lg:block">Nowadays most of people use social media and actually we do not use it for the best purposes, so <strong>Ecosocial</strong> is a good reason for dealing with a social network and make this world better.</p>',
        thumbnail: '/project2.jpg',
        tags: ['Vue', 'Quasar'],
        url: 'https://github.com/franc0rk/ecosocial',
        attachments: [
          '/project_attachments/ecosocial1.jpg',
          '/project_attachments/ecosocial2.jpg',
          '/project_attachments/ecosocial3.jpg',
        ],
      },
      {
        id: 3,
        name: 'Eventicket',
        description:
          '<p>Eventicket is a system which allows fans to assist to their favorite events. Customers are able not only to look for events, reserve and buy tickets but also to see their event history and get notified when a new event is coming.</p><br><p class="hidden lg:block">This system is also for managing reservations since it has an administration panel for people who have to handle the events ticket sales. It has an easy-use interface to manage users, events, reservations, and settings.</p>',
        thumbnail: '/project3.jpg',
        tags: ['Laravel', 'Bootstrap'],
        url: 'https://github.com/franc0rk/eventicket',
        attachments: [
          '/project_attachments/eventicket1.jpg',
          '/project_attachments/eventicket2.jpg',
          '/project_attachments/eventicket3.jpg',
        ],
      },
      {
        id: 4,
        name: 'Binnacle',
        description:
          '<p>This is a hybrid (web and mobile) app that allows users to perfom audits. In <strong>Binnacle</strong>, companies create checklists for their employees that have to be filled each certain period of time depending on their needs.</p><br><p class="hidden lg:block">It has many more useful features just like querying reports based on the checklists results, having an agenda for checking users tasks dates, registering action plans and a quick-look data dashboard.</p>',
        thumbnail: '/project4.jpg',
        tags: ['Vue', 'Quasar', 'Laravel'],
        url: 'https://app.binnacle.mx',
        attachments: [
          '/project_attachments/binnacle1.jpg',
          '/project_attachments/binnacle2.jpg',
          '/project_attachments/binnacle3.jpg',
        ],
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
