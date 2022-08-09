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
        id: 0,
        name: 'Globant',
        position: 'Web UI Engineer',
        period: 'October 2021 - Current',
        tasks: [
          {
            id: 1,
            name:
              'Dell EMC marketplace project development',
          },
          {
            id: 2,
            name:
              'App features development and bugfixing',
          },
          {
            id: 3,
            name:
              'Implementing MFE architecture ',
          },
        ],
        tools: [
          'Angular',
          'Bit.dev',
          'Jira',
          'SASS',
        ],
      },
      {
        id: 1,
        name: 'Epicor',
        position: 'Product Developer',
        period: 'October 2020 - October 2021',
        tasks: [
          {
            id: 1,
            name:
              'Maintenance to ERP and bug fixes.',
          },
          {
            id: 2,
            name:
              'ERP new features development.',
          },
        ],
        tools: [
          'Angular',
          'C#',
          'SQL Server',
          'Jira',
          'SASS',
        ],
      },
      {
        id: 2,
        name: 'Binnacle',
        position: 'Full-stack Developer',
        period: 'October 2017 - September 2020',
        tasks: [
          {
            id: 1,
            name:
              'Hybrid applications development.',
          },
          {
            id: 2,
            name: 'Requirements analysis.',
          },
          {
            id: 3,
            name:
              'Project documentation.'
          }
        ],
        tools: [
          'VueJs',
          'Quasar',
          'Laravel',
          // 'UIPath',
          // 'Automation Anywhere',
          'MySQL',
          // 'GraphQL',
          // 'HTML',
          // 'CSS',
          // 'JS',
          'SASS',
          'Stylus',
          'Sentry',
          'Notion',
          'PivotalTracker',
        ],
      },
      {
        id: 3,
        name: 'Meditegic',
        position: 'Frontend Developer',
        period: 'June 2017 - September 2017',
        tasks: [
          {
            id: 1,
            name: 'Internal system frontend development.',
          },
          {
            id: 2,
            name: 'UX/UI improves to internal system.',
          },
        ],
        tools: ['AngularJS(v1 and v2)', 'HTML', 'CSS', 'JS', 'JQuery'],
      },
      {
        id: 4,
        name: 'AS Diseño',
        position: 'Web Developer',
        period: 'July 2015 - July 2016',
        tasks: [
          {
            id: 1,
            name: 'Internal system development.',
          },
          {
            id: 2,
            name: 'Websites development. Static and Dynamic Sites.',
          },
          {
            id: 3,
            name: 'Web Applications development.',
          },
          {
            id: 4,
            name: 'Web design.',
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
    ],
  }),
  computed: {
    layoutBgClasses() {
      return {
        'bg-gray-800': this.$store.state.layout === 'dark',
        'bg-white': this.$store.state.layout !== 'dark',
      }
    },
    layoutTextClasses() {
      return {
        'text-gray-900': this.$store.state.layout !== 'dark',
        'text-white': this.$store.state.layout === 'dark',
      }
    },
  },
}
</script>
