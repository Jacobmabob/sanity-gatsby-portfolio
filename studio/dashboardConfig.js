export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6236687d48f35352bbbd6b07',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ukjghbwt',
                  apiId: '69bc0372-689c-4047-aa0e-ecc30cbe87e8'
                },
                {
                  buildHookId: '6236687d05f6a7697f3c8e9c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dnzrxs7m',
                  apiId: 'db3c7024-063b-40f7-9776-36b1e933ab48'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jacobmabob/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dnzrxs7m.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
