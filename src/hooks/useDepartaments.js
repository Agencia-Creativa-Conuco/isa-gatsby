import { graphql, useStaticQuery } from 'gatsby';

const useDepartaments = () => {

    const resultado = useStaticQuery(
      graphql `
      {
        allWpDepartament {
          nodes {
            id
            __typename
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
            
            departamentInfo {
              departamentCareerRel {
                ... on WpCareer {
                  id
                }
              }
              facultyDepartamentRel {
                ... on WpFaculty {
                  id
                }
              }
              departamentProjectLineRel {
                ... on WpProjectLine {
                  id
                }
              }
            }

            contact {
              phones {
                phone
                exts {
                  ext
                }
              }
              emails {
                email
              }
            }

          }
        }
      }
      `
    );

    return resultado.allWpDepartament.nodes.map( departament => {

      const [faculty] = departament.departamentInfo.facultyDepartamentRel

      return ({
        id: departament.id,
        title: departament.title,
        content: departament.content,
        date: departament.date,
        slug: departament.slug,
        uri: departament.uri,
        link: departament.link,
        order: departament.menuOrder,
        featuredImage: departament?.featuredImage?.node?.localFile,
        faculty: faculty,
        careers: departament.departamentInfo.departamentCareerRel || [],
        projectLines: departament.departamentInfo.departamentProjectLineRel || [],
        type: departament.__typename,
        contact: departament.contact,
      })
    });
}
 
export default useDepartaments;