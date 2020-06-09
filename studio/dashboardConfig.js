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
                  buildHookId: '5edfcbb9c3308a9ac7a56358',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-g7gi8xus',
                  apiId: '3022ad3f-bff8-4bf2-84c0-71e35a0e6480'
                },
                {
                  buildHookId: '5edfcbbaf2f3457ba1450b6f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kwgyhim1',
                  apiId: '4f4b9c5b-4d49-48d0-8a51-bbf424dff6a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luigimmm/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kwgyhim1.netlify.app', category: 'apps'}
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
