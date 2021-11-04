import { graphql, useStaticQuery } from 'gatsby';

const useSlides = () => {

    const resultado = useStaticQuery(
        graphql `
            {
                allWpSlide {
                    nodes {
                        id
                        titulo
                        copy
                        imagenPortada {
                            ...ImageFragment
                        }
                        datosCTA {
                            cta {
                                ...CtaFragment
                            }
                        }
                    }
                }
            } 
        `
    );
    
    return resultado.allWpSlide.nodes.map( slide => ({
        id: slide.id,
        titulo: slide.titulo,
        copy: slide.copy,
        imagenPortada: slide.imagenPortada,
        cta: slide?.datosCTA?.cta,
    }));
}
 
export default useSlides;