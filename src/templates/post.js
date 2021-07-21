import * as React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby";
import PostTemplate from "../components/post/news/news";

export const query = graphql`
  query($id: String!) {
    allWpPost( filter: { id: { eq: $id } }) {
      nodes {
        id
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
              sharp: childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        author {
          node {
            id
            name
            uri
            slug
          }
        }
        categories {
          nodes {
            id
            name
            slug
            link
            uri
          }
        }
        tags {
          nodes {
            id
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

  return (
      <Layout>
        <PostTemplate {...{post}} />
      </Layout>
  )
}
export default Post
