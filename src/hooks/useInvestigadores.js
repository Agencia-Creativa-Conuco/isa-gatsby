import { graphql, useStaticQuery } from 'gatsby';
import urlSlug from 'url-slug';

const useInvestigadores = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpInvestigador {
              nodes {
                id
                __typename
                nombre
                imagenPortada {
                  ...ImageFragment
                }
                puestoTrabajo
                tituloAcademico
                tituloAcademicoAbreviado
                esEquipo
                date
                link
                uri
                slug
                datosInvestigador {
                  carreraNacionalInvestigacion {
                    esMiembro
                    area
                    categoria
                    anoIngreso
                    areaInvestigacion
                  }
                }
                #personData {
                #}
              }
            }
          }
        `
    );

    return resultado.allWpInvestigador.nodes.map( investigador => ({
        id: investigador.id,
        nombre: investigador?.nombre,
        date: investigador.date,
        slug: urlSlug(investigador.nombre),
        uri: investigador.uri.replace(investigador.slug, urlSlug(investigador.nombre)),
        link: investigador.link.replace(investigador.slug, urlSlug(investigador.nombre)),
        imagenPortada: investigador?.imagenPortada,
        puestoTrabajo: investigador?.puestoTrabajo,
        tituloAcademico: investigador?.tituloAcademico,
        tituloAcademicoAbreviado: investigador?.tituloAcademicoAbreviado,
        isCarrera: investigador?.datosInvestigador?.esCarrera,
        esEquipo: investigador?.esEquipo,
        carreraNacionalInvestigacion: investigador?.personData?.carreraNacionalInvestigacion,
        type: investigador.__typename,
    }));
}
 
export default useInvestigadores;