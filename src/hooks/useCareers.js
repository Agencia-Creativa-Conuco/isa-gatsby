import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useCareers = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpCareer {
              nodes {
                id: databaseId
                title
                date
                link
                uri
                slug
                parent: parentDatabaseId
                type: contentType {
                  node {
                    name
                  }
                }
                faculties {
                  nodes {
                    id: databaseId
                  }
                }
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

    return resultado.allWpCareer.nodes.map( career => ({
        id: career.id,
        title: career.title,
        date: career.date,
        slug: career.slug,
        type: career.type.node.name,
        uri: career.uri,
        link: career.link,
        parent: career.parent,
        faculties: career.faculties.nodes,
        featuredImage: career.featuredImage? career.featuredImage.node.localFile : null,
    }));
}
 
export default useCareers;