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
                nombreDecano
                fotoDecano {
                  ...ImageFragment
                }
                puestoDecano
                biografiaDecano
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
      nombreDecano: facultad.nombreDecano,
      fotoDecano: facultad.fotoDecano,
      puestoDecano: facultad.puestoDecano,
      biografiaDecano: facultad.biografiaDecano,
      carreras: facultad.carreras.nodes || [],
      departamentos: facultad.departamentos.nodes || [],
      type: facultad?.__typename,
      recursos: facultad?.recursos?.nodes || [],
      contacto: facultad?.contacto,
    }));
}
 
export default useFacultades;