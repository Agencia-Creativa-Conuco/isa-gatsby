import { graphql, useStaticQuery } from 'gatsby';
import urlSlug from 'url-slug';

const useLineasInvestigacion = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpLineaDeInvestigacion {
              nodes {
                id
                __typename
                nombre
                date
                link
                uri
                slug
                departamento {
                  node {
                    id
                  }
                }
                investigaciones {
                  nodes {
                    id
                  }
                }
              }
            }
          }
        `
    );

    return resultado.allWpLineaDeInvestigacion.nodes.map( linea => {
      
      return ({
        id: linea.id,
        nombre: linea.nombre,
        date: linea.date,
        slug: urlSlug(linea.nombre),
        uri: linea.uri.replace(linea.slug, urlSlug(linea.nombre)),
        link: linea.link.replace(linea.slug, urlSlug(linea.nombre)),
        featuredImage: linea.featuredImage? linea.featuredImage.node.localFile : null,
        departamento: linea.departamento.node || [],
        investigaciones: linea.investigaciones.nodes || [],
        type: linea.__typename,
      })

    });
}
 
export default useLineasInvestigacion;