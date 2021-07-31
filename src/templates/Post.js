import * as React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby";
import PostSingle from "./post/post-single";
import usePosts from "../hooks/usePosts";

export const query = graphql`
  query($id: String!) {
    allWpPost( filter: { id: { eq: $id } }) {
      nodes {
        id
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

  const [post] = usePosts().filter( post => posts.map( item => item.id).includes( post.id ) );
  
  return (
      <Layout>
        <PostSingle {...{post}} />
      </Layout>
  )
}
export default Post
