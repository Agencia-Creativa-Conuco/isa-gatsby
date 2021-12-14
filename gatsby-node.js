const _category = require('./nodes/category-nodes')
const _post = require('./nodes/post-nodes')

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async (gatsbyUtilities) => {
  const configs = await _post.getNodesConfig(gatsbyUtilities)

  //POST
  // Query our posts from the GraphQL server
  const posts = await _post.getNodes(gatsbyUtilities)

  // If there are no posts in WordPress, don't do anything
  if (posts.length) {
    // If there are posts and pages or custom-types, create Gatsby pages for them
    await _post.createSinglePages({ posts, gatsbyUtilities })

    // And a paginated archive
    await _post.createBlogPostArchive({ posts, configs, gatsbyUtilities })
  }

  // CATEGORY
  // Query our categories from GraphQl server
  const categories = await _category.getNodes(gatsbyUtilities)

  if (categories.length) {
    // Crear archivos para cada categoría
    await _category.createArchives({ categories, gatsbyUtilities })
  }
}

//gatsby-node.js
// exports.onCreateWebpackConfig = ({ actions }) => {
//   const { setWebpackConfig } = actions
//   setWebpackConfig({
//     externals: {
//       jquery: 'jQuery', // important: 'Q' capitalized
//     },
//   })
// }
