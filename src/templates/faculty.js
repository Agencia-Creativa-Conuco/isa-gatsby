import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import FacultySingle from "./faculty/faculty-single";

export const query = graphql`
  query ($id: String!) {
    allWpFaculty(filter: { id: { eq: $id } }) {
      nodes {
        id
        title
        content
        date
        link
        uri
        slug
        parentId
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

        wpChildren {
          nodes {
            ... on WpFaculty {
              id
              title
              slug
              uri
              link
            }
          }
        }

        facultyInfo {

          color

          cover {
            copy
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
const Faculty = ({ data }) => {

  const {
    allWpFaculty: { nodes: faculties },
  } = data;

  const [facultyData] = faculties;

  const faculty = {
    title: facultyData.title,
    parent: facultyData.parentId,
    featuredImage: facultyData.featuredImage,
    color: facultyData.facultyInfo.color,
    cover: facultyData.facultyInfo.cover,
    perfil: facultyData.facultyInfo.perfil,
    resources: facultyData.resources.resourceRelationship,
    children: facultyData.wpChildren.nodes,
};

  return (
    <Layout>
      <FacultySingle {...{faculty}} />
    </Layout>
  );
};
export default Faculty;
