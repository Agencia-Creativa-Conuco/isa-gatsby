import { graphql, useStaticQuery } from 'gatsby';
import urlSlug from 'url-slug';

const useFacultades = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpFacultad {
              nodes {
                id
                __typename
                nombre
                copy
                color
                mision
                departamentos {
                  nodes {
                    id
                  }
                }
                carreras {
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
        
                #facultyInfo {
        #
                #  perfil {
                #    name
                #    jobtitle
                #    copy
                #    photo {
                #      ...ImageFragment
                #    }
                #  }
        #
                #}

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
        
                #recursos {
                #  resourceRelationship {
                #    ... on WpResource {
                #      id
                #      nombre
                #      imagenPortada {
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
              }
            }
          }
        `
    );

    return resultado.allWpFacultad.nodes.map( facultad => ({
      id: facultad.id,
      nombre: facultad.nombre,
      copy: facultad.copy,
      date: facultad.date,
      slug: urlSlug(facultad.nombre),
        uri: facultad.uri.replace(facultad.slug, urlSlug(facultad.nombre)),
        link: facultad.link.replace(facultad.slug, urlSlug(facultad.nombre)),
      imagenPortada: facultad?.imagenPortada,
      color: facultad.color,
      mision: facultad.mision,
      carreras: facultad.carreras.nodes || [],
      departamentos: facultad.departamentos.nodes || [],
      type: facultad?.__typename,
      recursos: facultad?.recursos?.resourceRelationship || [],
      contact: facultad?.contact,
    }));
}
 
export default useFacultades;