import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useFaculties = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpFaculty {
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
        
                  facultyRelationship {
                    ... on WpCareer {
                      id
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
        `
    );

    return resultado.allWpFaculty.nodes.map( faculty => ({
      id: faculty.id,
      type: faculty.facultyInfo.type,
      title: faculty.title,
      content: faculty.content,
      date: faculty.date,
      slug: faculty.slug,
      parent: faculty.parentId,
      uri: faculty.uri,
      link: faculty.link,
      featuredImage: faculty?.featuredImage?.node?.localFile,
      color: faculty.facultyInfo.color,
      cover: faculty.facultyInfo.cover,
      perfil: faculty.facultyInfo.perfil,
      resources: faculty.resources.resourceRelationship,
      children: faculty.wpChildren.nodes,
      careers: faculty.facultyInfo.facultyRelationship || []
    }));
}
 
export default useFaculties;