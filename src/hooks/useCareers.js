import { graphql, useStaticQuery } from 'gatsby';

const useCareers = () => {

    const data = useStaticQuery(
        graphql `
        {
            allWpCareer {
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

                  type
        
                  facultyRelationship {
                    ... on WpFaculty {
                      id
                      title
                      parentId
                      facultyInfo {
                        type
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
        `
    );

    const {
      allWpCareer: { nodes: careersList },
    } = data;

    const careers = careersList.map( career => {

      //Facultad y departamento vienen juntos en el mismo arreglo.
      const faculties = career?.careerInfo?.facultyRelationship || [];
      
      //  Extraemos la facultad.
      const [ faculty ] = faculties.filter( faculty => !faculty.parentId && faculty?.facultyInfo?.type === 'faculty' );
      
      return {
        ...career,
        faculty,
      }
    });

    const resultado = careers.map( career => ({
        id: career.id,
        title: career.title,
        date: career.date,
        slug: career.slug,
        uri: career.uri,
        link: career.link,
        parent: career.parentId,
        featuredImage: career?.featuredImage?.node?.localFile,
        type: career.careerInfo.type,
        faculty: {
          title: career?.faculty?.title,
          color: career?.faculty?.facultyInfo?.color,
        },
        cover: career.careerInfo.cover,
        perfil: career.careerInfo.perfil,
        tabs: career.careerInfo.tabs,
        form: career.careerInfo.form,
        requirements: career.careerInfo.requirements || [],
        resources: career?.resources?.resourceRelationship || [],
    }))

    return resultado;
}
 
export default useCareers;