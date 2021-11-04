import { graphql, useStaticQuery } from 'gatsby';
import urlSlug from 'url-slug';

const useRecursos = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpRecurso {
              nodes {
                id
                __typename
                nombre
                date
                link
                uri
                slug
                imagenPortada {
                  ...ImageFragment
                }
                archivo {
                  localFile {
                    publicURL
                  }
                }
                datosRecurso {
                  tipo
                }
              }
            }
          }
        `
    );

    return resultado.allWpRecurso.nodes.map( recurso => ({
        id: recurso.id,
        nombre: recurso.nombre,
        date: recurso.date,
        slug: urlSlug(recurso.nombre),
        uri: recurso.uri.replace(recurso.slug, urlSlug(recurso.nombre)),
        link: recurso.link.replace(recurso.slug, urlSlug(recurso.nombre)),
        imagenPortada: recurso.imagenPortada,
        type: recurso.__typename,
        archivo: recurso.archivo
    }));
}
 
export default useRecursos;