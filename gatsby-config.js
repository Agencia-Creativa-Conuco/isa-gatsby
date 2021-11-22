module.exports = {
  siteMetadata: {
    siteUrl: "https://isa.conuco.do",
    title: "isa",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://prueba.conuco.do/graphql",
        schema: {
          timeout: 120000,
          perPage: 25, // currently set to 100
          requestConcurrency: 15, // currently set to 15
          previewRequestConcurrency: 5, // currently set to 5
        },
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "pages",
        engine: "flexsearch",
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
        ref: "slug",
        index: ["title", "nombre", "slug"],
        store: ["id", "title", "nombre", "slug", "type", "uri"],
        normalizer: ({ data }) => {
          return Object.values(data)
            .map((type) => type.nodes)
            .reduce((acumulador, currentValue) =>
              acumulador.concat(currentValue)
            )
            .map((node) => ({
              id: node.id,
              title: node.title,
              nombre: node.nombre,
              slug: node.slug,
              type: node.__typename,
              uri: node.uri,
            }));
        },
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "234567890",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-use-query-params",
    "gatsby-plugin-smoothscroll"
  ],
};
