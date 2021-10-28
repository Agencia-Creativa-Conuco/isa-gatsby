import { graphql, useStaticQuery } from "gatsby";

const usePeriods = () => {
  const resultado = useStaticQuery(
    graphql`
      {
        allWpPeriod {
          nodes {
            id
            __typename
            title
            link
            uri
            slug
            menuOrder
            periodData {
              examDates {
                examDate
              }
            }
          }
        }
      }
    `
  );

  return resultado.allWpPeriod.nodes.map((event) => ({
    id: event.id,
    title: event.title,
    slug: event.slug,
    uri: event.uri,
    link: event.link,
    order: event.menuOrder,
    examDates: event?.periodData?.examDates || [],
    type: event.__typename,
  }));
};

export default usePeriods;
