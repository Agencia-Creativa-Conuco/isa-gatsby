import * as React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
  query($id: String!) {
    allWpPage( filter: { id: { eq: $id } }) {
      nodes {
        id: databaseId
        title
        content
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
      }
    }
  }
`;

// markup
const Post = ({data}) => {

    console.log(data)
    const {
        allWpPage: {
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
