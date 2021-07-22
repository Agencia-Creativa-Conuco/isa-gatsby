import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpProject {
              nodes {
                id: databaseId
                title
                content
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
              }
            }
          }
        `
    );

    return resultado.allWpProject.nodes.map( project => ({
        id: project.id,
        title: project.title,
        content: project.content,
        date: project.date,
        slug: project.slug,
        uri: project.uri,
        link: project.link,
        featuredImage: project.featuredImage? project.featuredImage.node.localFile : null
    }));
}
 
export default useProjects;