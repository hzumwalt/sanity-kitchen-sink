export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6273e6c1c551cd65daf472d7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-pj7ej992',
                  apiId: '37181adb-c2c6-41b4-9ad6-4360bd8f5726'
                },
                {
                  buildHookId: '6273e6c10d6f2067d0f417c1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5votcyni',
                  apiId: '27de1662-f8f5-4202-832b-8a9966e6eafa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hzumwalt/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5votcyni.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
