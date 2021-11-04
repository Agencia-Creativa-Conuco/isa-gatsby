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
        #
                #resources {
                #  resourceRelationship {
                #    ... on WpResource {
                #      id
                #      title
                #      featuredImage {
                #        node {
                #          ...ImageFragment
                #        }
                #      }
                #      resource {
                #        type
                #        file {
                #          id
                #          localFile {
                #            id
                #            publicURL
                #          }
                #        }
                #      }
                #    }
                #  }
                #}
        #
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
        grado: carrera.grado,
        facultad: carrera.facultad.node,
        departamento: carrera.departamento,
        copy: carrera.copy,
        duracion: carrera.duracion,
        creditos: carrera.creditos,
        duracionPasantia: carrera.duracionPasantia,
        imagenPerfilEgresado: carrera.imagenPerfilEgresado,
        contenidoPerfilEgresado: carrera.contenidoPerfilEgresado,
        // tabs: carrera.carreraInfo.tabs || [],
        hsFormulario: carrera.hsFormulario,
        imagenFormulario: carrera?.imagenFormulario,
        resources: carrera?.resources?.resourceRelationship || [],
        contact: carrera.contact,
        type: carrera.__typename,
      })
    })

    return resultado;
}
 
export default useCarreras;