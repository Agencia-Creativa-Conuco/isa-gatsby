import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpProject {
              nodes {
                id
                __typename
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
                  description
                  projectLineProjectRel {
                    ... on WpProjectLine {
                      id
                    }
                  }
                  projectPersonRel {
                    ... on WpPerson {
                      id
                    }
                  }
                  images {
                    ...ImageFragment
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
        description: project.projectInfo.description,
        images: project.projectInfo.images || [],
        researchers: project.projectInfo.projectPersonRel || [],
        type: project.__typename,
      });
      
    });
}
 
export default useProjects;