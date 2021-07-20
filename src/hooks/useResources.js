import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useResources = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpResource {
              nodes {
                id: databaseId
                title
                date
                link
                uri
                slug
                featuredImage {
                  node {
                    localFile {
                      sharp: childImageSharp {
                        fluid(maxWidth: 1200) {
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

    return resultado.allWpResource.nodes.map( resource => ({
        id: resource.id,
        title: resource.title,
        date: resource.date,
        slug: resource.slug,
        uri: resource.uri,
        link: resource.link,
        featuredImage: resource.featuredImage? resource.featuredImage.node.localFile : null
    }));
}
 
export default useResources;