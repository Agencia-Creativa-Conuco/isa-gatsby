import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import CareerSingle from "./career/career-single";

export const query = graphql`
  query ($id: String!) {
    allWpCareer(filter: { id: { eq: $id } }) {
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

        careerInfo {

          facultyRelationship {
            ... on WpFaculty {
              id
              title
              parentId
              facultyInfo {
                color
              }
            }
          }

          cover {
            copy
            metadata {
              name
              value
            }
          }
          
          form {
            title
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
            title
            content
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
  
          requirements {
            requirement
            category {
              id
              name 
              slug
            }
          }
  
          tabs {
            title
            content
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
const Career = ({ data }) => {
  const {
    allWpCareer: { nodes: careers },
  } = data;

  const [ careerData ] = careers;

  //Facultad y departamento vienen juntos en el mismo arreglo.
  const faculties = careerData?.careerInfo?.facultyRelationship || [];
  
  //  Extraemos la facultad.
  const [ faculty ] = faculties.filter( item => !item.parent );

  const career = {
      title: careerData.title,
      parent: careerData.parentId,
      featuredImage: careerData.featuredImage,
      faculty: {
        title: faculty?.title,
        color: faculty?.facultyInfo.color
      },
      cover: careerData.careerInfo.cover,
      perfil: careerData.careerInfo.perfil,
      tabs: careerData.careerInfo.tabs,
      form: careerData.careerInfo.form,
      resources: careerData.resources.resourceRelationship,
  };

  return (
    <Layout>
      {
        career.parent? (
          <CareerSingle {...{career}} />
        ): (
          <h1>ESTE ES UN GRADO</h1>
        )
      }
    </Layout>
  );
};
export default Career;
