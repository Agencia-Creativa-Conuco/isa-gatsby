import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import Admisiones from "../components/page/admission/admisiones";
import About from "../components/page/about/about";

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
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }

        about {
          copy {
            copy
            cta {
              target
              title
              url
            }
          }
          
          history {
            content
            title
            year
            image {
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }

          perfil {
            name
            jobtitle
            content
            photo {
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          
          tabs {
            content
            title
          }

          campus {
            titulo
            images {
              id
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
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
              fluid(maxWidth: 1920) {
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

  const { title, slug } = page;

  return (
    <Layout>
      {
        slug === 'admisiones'? (
          <Admisiones {...{ page }}/>
        ): slug === 'nosotros'? (
          <About {...{ page }}/>
        ) : (
          <h1>{title}</h1>
        )
      }
      
    </Layout>
  );
};
export default Post;
