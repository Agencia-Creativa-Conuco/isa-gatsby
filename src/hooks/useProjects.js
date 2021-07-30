import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpProject {
              nodes {
                id: databaseId
                parent: parentDatabaseId
                title
                content
                coverCopy
                date
                link
                uri
                slug
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 1920) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
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
        parent: project.parent,
        titleFaculty: project.projectInfo.projectRelationship || []
    }));
}
 
export default useProjects;