import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useSlides = () => {

    const resultado = useStaticQuery(
        graphql `
            {
                allWpSlide {
                    nodes {
                        id: databaseId
                        title
                        copy
                        featuredImage {
                            node {
                                localFile {
                                    childImageSharp {
                                        fluid( maxWidth: 1200 ) {
                                            ...GatsbyImageSharpFluid_withWebp
                                        }
                                        gatsbyImageData
                                    }
                                }
                            }
                        }
                    }
                }
            } 
        `
    );
    
    return resultado.allWpSlide.nodes.map( slide => ({
        id: slide.id,
        title: slide.title,
        copy: slide.copy,
        featuredImage: slide.featuredImage? slide.featuredImage.node.localFile : null
    }));
}
 
export default useSlides;