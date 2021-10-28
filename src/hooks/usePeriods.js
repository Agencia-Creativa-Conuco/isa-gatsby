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
    examDates: event?.periodData?.examDates || [],
    type: event.__typename,
  }));
};

export default usePeriods;
