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
                hsFormulario
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
        #
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
        grado: carrera.grado.node,
        facultad: carrera.facultad.node,
        departamento: carrera.departamento,
        copy: carrera.copy,
        duracion: carrera.duracion,
        creditos: carrera.creditos,
        duracionPasantia: carrera.duracionPasantia,
        imagenPerfilEgresado: carrera.imagenPerfilEgresado,
        contenidoPerfilEgresado: carrera.contenidoPerfilEgresado,
        tabs: carrera.datosCarrera.tabs || [],
        hsFormulario: carrera.hsFormulario,
        imagenFormulario: carrera?.imagenFormulario,
        recursos: carrera?.recursos?.nodes || [],
        contact: carrera.contact,
        type: carrera.__typename,
      })
    })

    return resultado;
}
 
export default useCarreras;