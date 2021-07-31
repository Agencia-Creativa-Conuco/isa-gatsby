import { graphql, useStaticQuery } from 'gatsby';

const useGrades = () => {

    const resultado = useStaticQuery(
      graphql `
      {
        allWpGrade {
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
            
            gradeData {
              gradeCareerRel {
                ... on WpCareer {
                  id
                }
              }
            }

            requisitos {
              ...RequirementsFragment
            }

          }
        }
      }
      `
    );
    
    return resultado.allWpGrade.nodes.map( grade => ({
        id: grade.id,
        title: grade.title,
        content: grade.content,
        date: grade.date,
        slug: grade.slug,
        uri: grade.uri,
        link: grade.link,
        order: grade.menuOrder,
        featuredImage: grade?.featuredImage?.node?.localFile,
        careers: grade.gradeData.gradeCareerRel,
        requirements: grade?.requisitos?.requirements || [],
    }));
}
 
export default useGrades;