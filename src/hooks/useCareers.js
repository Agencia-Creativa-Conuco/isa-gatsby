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
                menuOrder
                featuredImage {
                  node {
                    ...ImageFragment
                  }
                }
        
                careerInfo {

                  gradeCareerRel {
                    ... on WpGrade {
                      id
                    }
                  }

                  facultyRelationship {
                    ... on WpFaculty {
                      id
                    }
                  }

                  departamentCareerRel {
                    ... on WpDepartament {
                      id
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
                      ...ImageFragment
                    }
                  }
          
                  perfil {
                    title
                    content
                    image {
                      ...ImageFragment
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
                          ...ImageFragment
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
      allWpCareer: { nodes: careers },
    } = data;

    const resultado = careers.map( career => {
      
      const [grade] = career?.careerInfo?.gradeCareerRel || [];
      const [faculty] = career?.careerInfo?.facultyRelationship || [];
      const [departament] = career?.careerInfo?.departamentCareerRel || [];
      
      return ({
        id: career.id,
        title: career.title,
        date: career.date,
        slug: career.slug,
        uri: career.uri,
        link: career.link,
        order: career.menuOrder,
        featuredImage: career?.featuredImage?.node?.localFile,
        grade: grade,
        faculty: faculty,
        departament: departament,
        cover: career.careerInfo.cover,
        perfil: career.careerInfo.perfil,
        tabs: career.careerInfo.tabs || [],
        form: career.careerInfo.form,
        resources: career?.resources?.resourceRelationship || [],
      })
    })

    return resultado;
}
 
export default useCareers;