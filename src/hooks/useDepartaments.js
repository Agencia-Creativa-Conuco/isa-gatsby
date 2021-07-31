import { graphql, useStaticQuery } from 'gatsby';

const useDepartaments = () => {

    const resultado = useStaticQuery(
      graphql `
      {
        allWpDepartament {
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
        careers: departament.departamentInfo.departamentCareerRel || [],
        faculty: faculty,
      })
    });
}
 
export default useDepartaments;