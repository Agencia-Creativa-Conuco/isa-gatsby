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
                                ...CtaFragment
                            }
                        }
                        featuredImage {
                            node {
                                ...ImageFragment
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