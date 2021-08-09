import { graphql, useStaticQuery } from 'gatsby';

const useProjectLines = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpProjectLine {
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
                projectLineData {
                  departamentProjectLineRel {
                    ... on WpDepartament {
                      id
                    }
                  }
                  projectLineProjectRel {
                    ... on WpProject {
                      id
                    }
                  }
                }
              }
            }
          }
        `
    );

    return resultado.allWpProjectLine.nodes.map( line => {
      
      const [departament] = line.projectLineData.departamentProjectLineRel || [];

      return ({
        id: line.id,
        title: line.title,
        content: line.content,
        date: line.date,
        slug: line.slug,
        uri: line.uri,
        link: line.link,
        featuredImage: line.featuredImage? line.featuredImage.node.localFile : null,
        departament: departament,
        projects: line.projectLineData.projectLineProjectRel || [],
      })

    });
}
 
export default useProjectLines;