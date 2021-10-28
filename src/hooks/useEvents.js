import { graphql, useStaticQuery } from 'gatsby';

const useEvents = () => {

    const resultado = useStaticQuery(
        graphql `
          {
            allWpEvent {
              nodes {
                id
                __typename
                title
                link
                uri
                slug
                order
                eventData {
                  examDates{
                    examDate
                  }
                }
                eventCategories {
                  nodes {
                    id
                    slug
                    name
                    link
                    uri
                  }
                }
              }
            }
          }
        `
    );

    return resultado.allWpEvent.nodes.map( event => ({
        id: event.id,
        title: event.title,
        slug: event.slug,
        uri: event.uri,
        link: event.link,
        examDates: event?.eventData?.examDates || [],
        categories: event?.eventCategories?.nodes,
        type: event.__typename,
    }));
}
 
export default useEvents;