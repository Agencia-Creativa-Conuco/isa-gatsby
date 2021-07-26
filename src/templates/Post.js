import * as React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby";
import PostSingle from "./post/post-single";

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
              childImageSharp {
                fluid(maxWidth: 1920) {
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
        <PostSingle {...{post}} />
      </Layout>
  )
}
export default Post
