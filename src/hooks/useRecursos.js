import { graphql, useStaticQuery } from 'gatsby';

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
              }
            }
          }
        `
    );

    return resultado.allWpRecurso.nodes.map( recurso => ({
        id: recurso.id,
        nombre: recurso.nombre,
        date: recurso.date,
        slug: recurso.slug,
        uri: recurso.uri,
        link: recurso.link,
        imagenPortada: recurso.imagenPortada,
        type: recurso.__typename,
        archivo: recurso.archivo
    }));
}
 
export default useRecursos;