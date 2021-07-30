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
        //   timeout: 100000,
        //   perPage: 1, // currently set to 100
        //   requestConcurrency: 5, // currently set to 15
        //   previewRequestConcurrency: 2, // currently set to 5
        // },
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
