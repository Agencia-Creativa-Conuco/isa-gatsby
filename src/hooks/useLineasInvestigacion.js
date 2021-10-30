import { graphql, useStaticQuery } from 'gatsby';

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
        slug: linea.slug,
        uri: linea.uri,
        link: linea.link,
        featuredImage: linea.featuredImage? linea.featuredImage.node.localFile : null,
        departamento: linea.departamento || [],
        investigaciones: linea.investigaciones || [],
        type: linea.__typename,
      })

    });
}
 
export default useLineasInvestigacion;