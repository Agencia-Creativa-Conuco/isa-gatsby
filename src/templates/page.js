import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import Admisiones from "../components/page/admission/admisiones";

export const query = graphql`
  query ($id: String!) {
    allWpPage(filter: { id: { eq: $id } }) {
      nodes {
        id: databaseId
        title
        content
        date
        link
        uri
        slug
        resources {
          ...WpPageToResourceConnectionFragment
        }
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
      }
    }
  }

  fragment WpPageToResourceConnectionFragment on WpPageToResourceConnection {
    nodes {
      id
      title
      slug
      uri
      link
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
    }
  }
`;

// markup
const Post = ({ data }) => {
  const {
    allWpPage: { nodes: pages },
  } = data;

  const [page] = pages;

  const { title, content, slug } = page;

  if(slug === 'admisiones'){
    return(
      <Admisiones {...{page}}/>
    )
  }

  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  );
};
export default Post;
