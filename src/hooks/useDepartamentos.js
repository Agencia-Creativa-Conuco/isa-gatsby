import { graphql, useStaticQuery } from 'gatsby';

const useDepartamentos = () => {

    const resultado = useStaticQuery(
      graphql `
      {
        allWpDepartamento {
          nodes {
            id
            __typename
            nombre
            copy
            facultad {
              node {
                id
              }
            }
            carreras {
              nodes {
                id
              }
            }
            lineasInvestigacion{
              nodes {
                id
              }
            }
            date
            link
            uri
            slug
            imagenPortada {
              ...ImageFragment
            }

            #contact {
            #  phones {
            #    phone
            #    exts {
            #      ext
            #    }
            #  }
            #  emails {
            #    email
            #  }
            #}

          }
        }
      }
      `
    );

    return resultado.allWpDepartamento.nodes.map( departamento => {

      return ({
        id: departamento.id,
        nombre: departamento.nombre,
        copy: departamento.copy,
        date: departamento.date,
        slug: departamento.slug,
        uri: departamento.uri,
        link: departamento.link,
        order: departamento.menuOrder,
        imagenPortada: departament?.imagenPortada,
        facultad: departamento.facultad.node.id,
        carreras: departamento.carreras.nodes || [],
        lineasInvestigacion: departamento.lineasInvestigacion.nodes || [],
        type: departamento.__typename,
        contact: departamento?.contact,
      })
    });
}
 
export default useDepartamentos;