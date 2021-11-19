import { graphql, useStaticQuery } from 'gatsby';
import urlSlug from 'url-slug';

const useGrados = () => {

    const resultado = useStaticQuery(
      graphql `
      {
        allWpGrado {
          nodes {
            id
            __typename
            nombre
            carreras {
              nodes {
                id
              }
            }
            orden
            date
            link
            uri
            slug
            
            datosRequisitos {
              requisitos {
                requisito
                categoria {
                  id
                }
              }
            }

            formularioGrados {
              formularios{
                id
              }
            }    
          }
        }
      }
      `
    );
    
    return resultado.allWpGrado.nodes.map( grado => ({
        id: grado.id,
        nombre: grado.nombre,
        date: grado.date,
        slug: urlSlug(grado.nombre),
        uri: grado.uri.replace(grado.slug, urlSlug(grado.nombre)),
        link: grado.link.replace(grado.slug, urlSlug(grado.nombre)),
        order: grado?.orden,
        carreras: grado.carreras.nodes || [],
        requisitos: grado?.datosRequisitos?.requisitos || [],
        type: grado.__typename,
        formulario: grado?.formularioGrados,
    }));
}
 
export default useGrados;