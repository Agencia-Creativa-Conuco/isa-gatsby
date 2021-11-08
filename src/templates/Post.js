import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import PostSingle from "./post/post-single";
import PostFile from "./post/post-file";
import usePosts from "../hooks/usePosts";
import Related from "../components/related";

export const query = graphql`
  query ($id: String!) {
    allWpPost(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const Post = ({ data }) => {
  const {
    allWpPost: { nodes: postsData },
  } = data;

  const posts = usePosts();

  const [post] = posts.filter((post) =>
    postsData.map((item) => item.id).includes(post.id)
  );

  const relatedPosts = posts.filter( item => item.id !== post.id && item.tipoPublicacion === post.tipoPublicacion).slice(0,3);

  return (
    <Layout>
      {post.tipoPublicacion === "file" ? (
        <PostFile {...{ post }} />
      ) : (
        <>
          <PostSingle {...{ post }} />
          <Related items={relatedPosts} />
        </>
      )}
    </Layout>
  );
};
export default Post;
