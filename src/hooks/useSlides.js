import { graphql, useStaticQuery } from 'gatsby';

const useSlides = () => {

    const resultado = useStaticQuery(
        graphql `
            {
                allWpSlide {
                    nodes {
                        id
                        nombre
                        copy
                        imagenPortada {
                            ...ImageFragment
                        }
                        #slideInfo {
                        #    cta {
                        #        ...CtaFragment
                        #    }
                        #}
                    }
                }
            } 
        `
    );
    
    return resultado.allWpSlide.nodes.map( slide => ({
        id: slide.id,
        nombre: slide.nombre,
        copy: slide.slideInfo.copy,
        cta: slide.slideInfo.cta,
        imagenPortada: slide.imagenPortada
    }));
}
 
export default useSlides;