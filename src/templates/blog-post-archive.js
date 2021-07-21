import * as React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allWpPost {
      nodes {
        id: databaseId
        title
        content
        excerpt
        date
        link
        uri
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        author {
          node {
            id: databaseId
            name
            uri
            slug
          }
        }
        categories {
          nodes {
            id: databaseId
            name
            slug
            link
            uri
          }
        }
        tags {
          nodes {
            id: databaseId
            name
            slug
            link
            uri
          }
        }
      }
    }
  }
`;

// markup
const Post = ({data}) => {

    const {
        allWpPost: {
            nodes: posts
        }
    } = data;
    
    const [ post ] = posts;

    const {
        title,
        content
    } = post;

  return (
      <Layout>
        <h1>{title}</h1>
      </Layout>
  )
}
export default Post
