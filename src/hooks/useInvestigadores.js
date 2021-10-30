import { graphql, useStaticQuery } from 'gatsby';

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
                esCarrera
                date
                link
                uri
                slug
                #personData {
                #  carreraNacionalInvestigacion {
                #    isMember
                #    anoIngreso
                #    area
                #    areaInvestigacion
                #    categoria
                #  }
                #}
              }
            }
          }
        `
    );

    return resultado.allWpInvestigador.nodes.map( investigador => ({
        id: investigador.id,
        nombre: investigador.nombre,
        date: investigador.date,
        slug: investigador.slug,
        uri: investigador.uri,
        link: investigador.link,
        imagenPortada: investigador?.imagenPortada,
        puestoTrabajo: puestoTrabajo,
        tituloAcademico: tituloAcademico,
        tituloAcademicoAbreviado: tituloAcademicoAbreviado,
        isCarrera: investigador?.isCarrera,
        isTeam: investigador?.personData?.isTeam,
        jobTitle: investigador?.personData?.personJobTitle,
        degreeTitle: investigador?.personData?.personDegreeTitle,
        degree: investigador?.personData?.personDegree,
        carreraNacionalInvestigacion: investigador?.personData?.carreraNacionalInvestigacion,
        type: investigador.__typename,
    }));
}
 
export default useInvestigadores;