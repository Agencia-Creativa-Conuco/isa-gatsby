module.exports = {
  siteMetadata: {
    siteUrl: 'https://isa.edu.do',
    title: 'ISA',
    titleTemplate: '%s · Universidad ISA',
    description:
      'Entra y descubre todas las ofertas académicas que tenemos disponibles para ti e inicia a aprender para servir y a servir para construir.',
    url: 'https://isa.edu.do', // No trailing slash allowed!
    image: '/src/images/site/icon.png', // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: '@occlumency',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'https://prueba.conuco.do/graphql',
        schema: {
          timeout: 120000,
          perPage: 25, // currently set to 100
          requestConcurrency: 15, // currently set to 15
          previewRequestConcurrency: 5, // currently set to 5
        },
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        query: `
          {
            allWpPost {
              nodes {
                id
                __typename
                slug
                title
                excerpt
                uri
              }
            }

            allWpPage {
              nodes {
                id
                __typename
                slug
                title
                uri
              }
            }
              allWpFacultad {
                nodes {
                  id
                  __typename
                  slug
                  nombre
                  uri
                }
              }

              allWpDepartamento {
                nodes {
                  id
                  __typename
                  slug
                  nombre
                  uri
                }
              }

              allWpInvestigacion {
                nodes {
                  id
                  __typename
                  slug
                  nombre
                  uri
                }
              }

              allWpLineaDeInvestigacion {
                nodes {
                  id
                  __typename
                  slug
                  nombre
                  uri
                }
              }

              allWpRecurso {
                nodes {
                  id
                  __typename
                  slug
                  nombre
                  uri
                }
              } 

              allWpCarrera {
                nodes {
                  id
                  __typename
                  slug
                  nombre
                  uri
                }
              } 

              allWpGrado {
                nodes {
                  id
                  __typename
                  slug
                  nombre
                  uri
                }
              }
          }
          `,
        ref: 'slug',
        index: ['title', 'nombre', 'slug'],
        store: ['id', 'title', 'nombre', 'slug', 'type', 'uri'],
        normalizer: ({ data }) => {
          return Object.values(data)
            .map((type) => type.nodes)
            .reduce((acumulador, currentValue) =>
              acumulador.concat(currentValue),
            )
            .map((node) => ({
              id: node.id,
              title: node.title,
              nombre: node.nombre,
              slug: node.slug,
              type: node.__typename,
              uri: node.uri,
            }))
        },
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: '234567890',
    //   },
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-use-query-params',
    'gatsby-plugin-smoothscroll',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UNIVERSIDAD ISA`,
        short_name: `ISA`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/site/logo.svg`,
      },
    },
  ],
}
