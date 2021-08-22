const path = require(`path`)
const chunk = require(`lodash/chunk`)

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
 exports.getNodes = async function getNodes({ graphql, reporter }) {
    const graphqlResult = await graphql(/* GraphQL */ `
      query Query {
        # Query all WordPress blog posts sorted by date
        allWpCategory {
          edges {
            node {
              id
              uri
              nodeType
              posts {
                nodes {
                  id
                  uri
                  __typename
                }
              }
            }
          }
        }
      }
    `)
  
    if (graphqlResult.errors) {
      reporter.panicOnBuild(
        `There was an error loading your blog posts`,
        graphqlResult.errors
      )
      return
    }
  
    return [
      ...graphqlResult.data.allWpCategory.edges,
    ]
  }

/**
 * This function creates all the individual taxonomies pages in this site
 */
exports.createArchives = async function createArchives({ categories, gatsbyUtilities }) {
    const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
      {
        wp {
          readingSettings {
            postsPerPage
          }
        }
      }
    `)
  
    const { postsPerPage } = graphqlResult.data.wp.readingSettings
  
    categories.map( term => {
  
      const archivePath = term.node.uri;
  
      // const _posts = posts.filter( ({ post }) => post.categories.nodes.map( item => item.id ).includes( term.node.id ) );
      const _posts = term.node.posts.nodes;
  
      const postsChunkedIntoArchivePages = chunk(_posts, postsPerPage)
      const totalPages = postsChunkedIntoArchivePages.length
  
      return Promise.all(
        postsChunkedIntoArchivePages.map(async (_posts, index) => {
          const pageNumber = index + 1
    
          const getPagePath = page => {
            if (page > 0 && page <= totalPages) {
              // Since our homepage is our blog page
              // we want the first page to be "/" and any additional pages
              // to be numbered.
              // "/blog/2" for example
              return page === 1 ? `${archivePath}` : `${archivePath}${page}`
            }
    
            return null
          }
  
          // createPage is an action passed to createPages
          // See https://www.gatsbyjs.com/docs/actions#createPage for more info
          await gatsbyUtilities.actions.createPage({
            path: getPagePath(pageNumber),
            
            // use the blog post archive template as the page component
            component: path.resolve(`./src/templates/${term.node.nodeType.toLowerCase()}-archive.js`),
    
            // `context` is available in the template as a prop and
            // as a variable in GraphQL.
            context: {
              // the index of our loop is the offset of which posts we want to display
              // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
              // etc
              offset: index * postsPerPage,
  
              items: _posts.map( post => post.id ),
    
              // We need to tell the template how many posts to display too
              postsPerPage,
    
              nextPagePath: getPagePath(pageNumber + 1),
              previousPagePath: getPagePath(pageNumber - 1),
              id: term.node.id, //id de la categoria
            },
          })
        })
      )
  
    });
  
  }

