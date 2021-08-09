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
                featuredImage {
                  node {
                    ...ImageFragment
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
                      ...ImageFragment
                    }
                  }
        
                  facultyRelationship {
                    ... on WpCareer {
                      id
                      title
                      link
                      uri
                    }
                  }

                  facultyDepartamentRel {
                    ... on WpDepartament {
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

    return resultado.allWpFaculty.nodes.map( faculty => ({
      id: faculty.id,
      title: faculty.title,
      content: faculty.content,
      date: faculty.date,
      slug: faculty.slug,
      uri: faculty.uri,
      link: faculty.link,
      featuredImage: faculty?.featuredImage?.node?.localFile,
      color: faculty.facultyInfo.color,
      cover: faculty.facultyInfo.cover,
      perfil: faculty.facultyInfo.perfil,
      resources: faculty.resources.resourceRelationship,
      careers: faculty.facultyInfo.facultyRelationship || [],
      departaments: faculty.facultyInfo.facultyDepartamentRel || [],
    }));
}
 
export default useFaculties;