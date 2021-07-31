import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpProject {
              nodes {
                id
                parentId
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
                  projectRelationship {
                    ... on WpFaculty {
                      title
                    }
                  }
                }
              }
            }
          }
        `
    );

    return resultado.allWpProject.nodes.map( project => ({
        id: project.id,
        title: project.title,
        content: project.content,
        copy: project.coverCopy,
        date: project.date,
        slug: project.slug,
        uri: project.uri,
        link: project.link,
        featuredImage: project.featuredImage? project.featuredImage.node.localFile : null,
        parent: project.parentId,
        titleFaculty: project.projectInfo.projectRelationship || []
    }));
}
 
export default useProjects;