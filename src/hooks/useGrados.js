import { graphql, useStaticQuery } from 'gatsby';

const useGrados = () => {

    const resultado = useStaticQuery(
      graphql `
      {
        allWpGrado {
          nodes {
            id
            __typename
            nombre
            copy
            imagenPortada {
              ...ImageFragment
            }
            carreras {
              nodes {
                id
              }
            }
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

          }
        }
      }
      `
    );
    
    return resultado.allWpGrado.nodes.map( grado => ({
        id: grado.id,
        nombre: grado.nombre,
        copy: grado.copy,
        date: grado.date,
        slug: grado.slug,
        uri: grado.uri,
        link: grado.link,
        order: grado?.menuOrder,
        imagenPortada: grado?.imagenPortada,
        carreras: grado.carreras.nodes || [],
        requisitos: grado?.datosRequisitos?.requisitos || [],
        type: grado.__typename,
    }));
}
 
export default useGrados;