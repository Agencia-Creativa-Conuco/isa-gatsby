import { graphql, useStaticQuery } from "gatsby";

const usePeriodosAdmision = () => {
  const resultado = useStaticQuery(
    graphql`
      {
        allWpPeriodoDeAdmision {
          nodes {
            id
            __typename
            nombre
            link
            uri
            slug
            fechaInicio
            fechaFin
            #menuOrder
            #periodData {
            #  examDates {
            #    examDate
            #  }
            #}
          }
        }
      }
    `
  );

  return resultado.allWpPeriodoDeAdmision.nodes.map((periodo) => ({
    id: periodo.id,
    nombre: periodo.nombre,
    slug: periodo.slug,
    uri: periodo.uri,
    link: periodo.link,
    order: periodo?.menuOrder,
    fechaInicio: periodo.fechaInicio,
    fechaFin: periodo.fechaFin,
    examDates: periodo?.periodData?.examDates || [],
    type: periodo.__typename,
  }));
};

export default usePeriodosAdmision;
