import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpProject {
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
                projectInfo {
                  projectLineProjectRel {
                    ... on WpProjectLine {
                      id
                    }
                  }
                }
              }
            }
          }
        `
    );

    return resultado.allWpProject.nodes.map( project => {
      
      const [projectLine] = project.projectInfo.projectLineProjectRel;

      return ({
        id: project.id,
        title: project.title,
        content: project.content,
        date: project.date,
        slug: project.slug,
        uri: project.uri,
        link: project.link,
        featuredImage: project.featuredImage? project.featuredImage.node.localFile : null,
        projectLine: projectLine,
      });
      
    });
}
 
export default useProjects;