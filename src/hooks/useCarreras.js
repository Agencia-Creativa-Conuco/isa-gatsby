import { graphql, useStaticQuery } from 'gatsby';
import urlSlug from 'url-slug';

const useCarreras = () => {

    const data = useStaticQuery(
        graphql `
        {
            allWpCarrera {
              nodes {
                id
                __typename
                nombre
                facultad {
                  node {
                    id
                  }
                }
                grado {
                  node {
                    id
                  }
                }
                departamento {
                  node {
                    id
                  }
                }
                imagenPortada {
                  ...ImageFragment
                }
                copy
                duracion
                creditos
                duracionPasantia
                imagenPerfilEgresado {
                  ...ImageFragment
                }
                contenidoPerfilEgresado
                imagenFormulario {
                  ...ImageFragment
                }
                date
                link
                uri
                slug
                datosCarrera{
                  tabs{
                    titulo
                    contenido
                  }
                }
                recursos {
                  nodes {
                    id
                  }
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

    const {
      allWpCarrera: { nodes: carreras },
    } = data;

    const resultado = carreras.map( carrera => {
      
      return ({
        id: carrera.id,
        nombre: carrera.nombre,
        date: carrera.date,
        slug: urlSlug(carrera.nombre),
        uri: carrera.uri.replace(carrera.slug, urlSlug(carrera.nombre)),
        link: carrera.link.replace(carrera.slug, urlSlug(carrera.nombre)),
        order: carrera.menuOrder,
        imagenPortada: carrera?.imagenPortada,
        grado: carrera?.grado?.node,
        facultad: carrera?.facultad?.node,
        departamento: carrera?.departamento?.node,
        copy: carrera.copy,
        duracion: carrera.duracion,
        creditos: carrera.creditos,
        duracionPasantia: carrera.duracionPasantia,
        imagenPerfilEgresado: carrera.imagenPerfilEgresado,
        contenidoPerfilEgresado: carrera.contenidoPerfilEgresado,
        tabs: carrera.datosCarrera.tabs || [],
        imagenFormulario: carrera?.imagenFormulario,
        recursos: carrera?.recursos?.nodes || [],
        contacto: carrera.contacto,
        type: carrera.__typename,
      })
    })

    return resultado;
}
 
export default useCarreras;