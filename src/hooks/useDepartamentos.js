import { graphql, useStaticQuery } from 'gatsby';
import urlSlug from 'url-slug';

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
            lineasDeInvestigacion{
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

            contacto {
              telefonos {
                telefono
                extensiones {
                  extension
                }
              }
              whatsapp {
                telefono
              }
              emails {
                email
              }
            }

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
        slug: urlSlug(departamento.nombre),
        uri: departamento.uri.replace(departamento.slug, urlSlug(departamento.nombre)),
        link: departamento.link.replace(departamento.slug, urlSlug(departamento.nombre)),
        order: departamento.menuOrder,
        imagenPortada: departamento?.imagenPortada,
        facultad: departamento?.facultad?.node?.id,
        carreras: departamento?.carreras?.nodes || [],
        lineasInvestigacion: departamento?.lineasDeInvestigacion?.nodes || [],
        type: departamento.__typename,
        contacto: departamento?.contacto,
      })
    });
}
 
export default useDepartamentos;