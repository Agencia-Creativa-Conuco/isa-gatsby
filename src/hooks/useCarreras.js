import { graphql, useStaticQuery } from 'gatsby';

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
                imagenPerfilEgresado {
                  ...ImageFragment
                }
                contenidoPerfilEgresado
                hsFormulario
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
      
      const [grado] = carrera?.grado?.node?.id;
      const [facultad] = carrera?.facultad?.node?.id;
      const [departamento] = carrera?.departamento?.node?.id;
      
      return ({
        id: carrera.id,
        nombre: carrera.nombre,
        date: carrera.date,
        slug: carrera.slug,
        uri: carrera.uri,
        link: carrera.link,
        order: carrera.menuOrder,
        imagenPortada: carrera?.imagenPortada?.node?.localFile,
        grado: grado,
        facultad: facultad,
        departamento: departamento,
        copy: carrera.copy,
        imagenPerfilEgresado: carrera.imagenPerfilEgresado,
        contenidoPerfilEgresado: carrera.contenidoPerfilEgresado,
        // tabs: carrera.carreraInfo.tabs || [],
        hsFormulario: carrera.hsFormulario,
        resources: carrera?.resources?.resourceRelationship || [],
        contact: carrera.contact,
        type: carrera.__typename,
      })
    })

    return resultado;
}
 
export default useCarreras;