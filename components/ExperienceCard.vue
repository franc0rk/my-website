<template>
  <div class="rounded shadow-lg my-6 py-6" :class="layoutBgClasses">
    <h3 class="px-6 font-bold uppercase" :class="layoutTextClasses">
      Work Experience
    </h3>
    <ul class="px-6" :class="layoutTextClasses">
      <li v-for="job in jobs" :key="job.id" class="my-6">
        <span class="text-green-500 font-semibold">{{ job.name }}</span>
        <span>-</span>
        <strong>{{ job.position }}</strong>
        <span>|</span>
        <em>{{ job.period }}</em>
        <ul class="ml-3 mt-3">
          <li v-for="task in job.tasks" :key="task.id">
            -
            {{ task.name }}
          </li>
        </ul>
        <p class="mt-3">Tools:</p>
        <p>{{ job.tools.join(', ') }}.</p>
      </li>
    </ul>
    <p style="font-size: 0.55em;">
      &nbsp;
    </p>
  </div>
</template>
<script>
export default {
  name: 'ExperienceCard',
  data: () => ({
    jobs: [
      {
        id: 1,
        name: 'Binnacle',
        position: 'Full-stack Developer',
        period: 'July 2015 - July 2016',
        tasks: [
          {
            id: 1,
            name: 'Internal system development',
          },
          {
            id: 2,
            name: 'Websites development. Static and Dynamic Sites',
          },
          {
            id: 3,
            name: 'Web Applications development',
          },
          {
            id: 4,
            name: 'Web design',
          },
        ],
        tools: [
          'HTML',
          'CSS',
          'JS',
          'Photoshop, Illustrator',
          'SQL Server',
          'C# Windows Forms',
          'Wordpress',
          'Laravel',
          'MySQL',
        ],
      },
      {
        id: 2,
        name: 'Meditegic',
        position: 'Frontend Developer',
        period: 'June 2017 - September 2017',
        tasks: [
          {
            id: 1,
            name: 'Internal system frontend development',
          },
          {
            id: 2,
            name: 'UX/UI improves to internal system',
          },
        ],
        tools: ['AngularJS', 'HTML', 'CSS', 'JS', 'JQuery'],
      },
      {
        id: 3,
        name: 'AS Diseño',
        position: 'Web Developer',
        period: 'July 2015 - July 2016',
        tasks: [
          {
            id: 1,
            name:
              'Binnacle project. A hybrid application for performing audits',
          },
          {
            id: 2,
            name: 'Visbit project. A hybrid application for sales management',
          },
        ],
        tools: [
          'VueJs',
          'Quasar',
          'Laravel',
          'MySQL',
          'GraphQL',
          'HTML',
          'CSS',
          'JS',
          'SASS',
          'Stylus',
          'Sentry',
          'Notion',
          'PivotalTracker',
        ],
      },
    ],
  }),
  computed: {
    layoutBgClasses() {
      return {
        'bg-gray-800': this.$root.layoutName === 'dark',
        'bg-white': this.$root.layoutName === 'default',
      }
    },
    layoutTextClasses() {
      return {
        'text-gray-900': this.$root.layoutName === 'default',
        'text-white': this.$root.layoutName === 'dark',
      }
    },
  },
}
</script>
