import { graphql, useStaticQuery } from 'gatsby';

const useGrades = () => {

    const resultado = useStaticQuery(
      graphql `
      {
        allWpGrade {
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
            
            gradeData {
              gradeCover{
                copy
              }
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
        copy: grade.gradeData?.gradeCover?.copy,
        careers: grade.gradeData?.gradeCareerRel,
        requirements: grade?.requisitos?.requirements || [],
        type: grade.__typename,
    }));
}
 
export default useGrades;