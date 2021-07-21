import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useFaculties = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpFaculty {
              nodes {
                id: databaseId
                title
                content
                date
                link
                uri
                slug
                parent: parentDatabaseId
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
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

    return resultado.allWpFaculty.nodes.map( faculty => ({
        id: faculty.id,
        title: faculty.title,
        content: faculty.content,
        date: faculty.date,
        slug: faculty.slug,
        parent: faculty.parent? faculty.parent : 0,
        uri: faculty.uri,
        link: faculty.link,
        featuredImage: faculty.featuredImage? faculty.featuredImage.node.localFile : null
    }));
}
 
export default useFaculties;