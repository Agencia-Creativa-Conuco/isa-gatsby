import { graphql, useStaticQuery } from 'gatsby';

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
                date
                link
                uri
                slug
                imagenPortada {
                  ...ImageFragment
                }
                lineaInvestigacion{
                  node {
                    id
                  }
                }
                investigadores {
                  nodes {
                    id
                  }
                }
                #projectInfo {
                  #images {
                  #  ...ImageFragment
                  #}
                #}
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
        imagenPortada: investigacion.imagenPortada,
        date: investigacion.date,
        slug: investigacion.slug,
        uri: investigacion.uri,
        link: investigacion.link,
        lineaInvestigacion: investigacion.lineaInvestigacion,
        images: investigacion.projectInfo.images || [],
        investigadores: investigacion.investigadores || [],
        type: investigacion.__typename,
      });
      
    });
}
 
export default useInvestigaciones;