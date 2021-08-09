module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "isa",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://isa.conuco.do/graphql",
        // schema: {
        // timeout: 100000,
        // perPage: 50, // currently set to 100
        // requestConcurrency: 5, // currently set to 15
        // previewRequestConcurrency: 2, // currently set to 5
        // },
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
                }
              }
              allWpPage {
                nodes {
                  id
                  __typename
                  slug
                  title
                }
              }
            }
          `,
        ref: "slug",
        index: ["title", "slug"],
        store: ["id","title", "slug", "excerpt", "type"],
        normalizer: ({ data }) => {
          return Object.values(data).map( type => type.nodes ).reduce((acumulador, currentValue) => acumulador.concat(currentValue) ).map((node) => ({
            id: node.id,
            title: node.title,
            slug: node.slug,
            excerpt: node?.excerpt,
            type: node.__typename,
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
  ],
};
