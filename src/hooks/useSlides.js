import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useSlides = () => {

    const resultado = useStaticQuery(
        graphql `
            {
                allWpSlide {
                    nodes {
                        id
                        title
                        slideInfo {
                            copy
                            cta {
                                title
                                target
                                url
                            }
                        }
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
        copy: slide.slideInfo.copy,
        cta: slide.slideInfo.cta,
        featuredImage: slide.featuredImage? slide.featuredImage.node.localFile : null
    }));
}
 
export default useSlides;