import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import Admisiones from "../components/page/admission/admisiones";
import About from "../components/page/about/about";
import Index from "../pages/index";

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
        featuredImage {
          node {
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

        events {
          fieldGroupName
          categories {
            __typename
            id
            name
            slug
            link
            uri
          }
        }

        resources {
          resourceRelationship {
            ... on WpResource {
              id
              title
              featuredImage {
                node {
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
              resource {
                type
                file {
                  id
                  localFile {
                    id
                    publicURL
                  }
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
        ) : slug === 'isa'? (
          <Index {...{ page }}/>
        ) : (
          <h1>ESTA ES LA PÁGINA:{title}</h1>
        )
      }
      
    </Layout>
  );
};
export default Post;
