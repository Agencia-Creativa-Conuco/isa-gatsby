import { graphql, useStaticQuery } from 'gatsby';
import urlSlug from 'url-slug';

const useInvestigaciones = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpInvestigacion {
              nodes {
                id
                __typename
                nombre
                descripcion
                resumen
                date
                link
                uri
                slug
                imagenPortada {
                  ...ImageFragment
                }
                lineaDeInvestigacion{
                  node {
                    id
                  }
                }
                investigadores {
                  nodes {
                    id
                  }
                }
                datosInvestigacion {
                  imagenes {
                    ...ImageFragment
                  }
                }
              }
            }
          }
        `
    );

    return resultado.allWpInvestigacion.nodes.map( investigacion => {
      
      return ({
        id: investigacion.id,
        nombre: investigacion.nombre,
        descripcion: investigacion.descripcion,
        resumen: investigacion.resumen,
        imagenPortada: investigacion.imagenPortada,
        date: investigacion.date,
        slug: urlSlug(investigacion.nombre),
        uri: investigacion.uri.replace(investigacion.slug, urlSlug(investigacion.nombre)),
        link: investigacion.link.replace(investigacion.slug, urlSlug(investigacion.nombre)),
        lineaInvestigacion: investigacion.lineaDeInvestigacion,
        imagenes: investigacion?.datosInvestigacion?.imagenes || [],
        investigadores: investigacion?.investigadores?.nodes || [],
        type: investigacion.__typename,
      });
      
    });
}
 
export default useInvestigaciones;