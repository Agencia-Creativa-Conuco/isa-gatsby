import { graphql, useStaticQuery } from "gatsby";
import urlSlug from 'url-slug';

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
            #menuOrder
            datosPeriodosDeAdmision {
              fechasExamenesAdmision {
                fechaExamen
              }
            }
          }
        }
      }
    `
  );

  return resultado.allWpPeriodoDeAdmision.nodes.map((periodo) => ({
    id: periodo.id,
    nombre: periodo.nombre,
    slug: urlSlug(periodo.nombre),
    uri: periodo.uri.replace(periodo.slug, urlSlug(periodo.nombre)),
    link: periodo.link.replace(periodo.slug, urlSlug(periodo.nombre)),
    order: periodo?.menuOrder,
    fechasExamenesAdmision: periodo?.datosPeriodosDeAdmision?.fechasExamenesAdmision || [],
    type: periodo.__typename,
  }));
};

export default usePeriodosAdmision;
