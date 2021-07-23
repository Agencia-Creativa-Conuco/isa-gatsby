import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useEvents = () => {

    const resultado = useStaticQuery(
        graphql `
          {
            allWpEvent {
              nodes {
                id
                title
                link
                uri
                slug
                date: eventDate
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
        date: event.date,
        categories: event.eventCategories.nodes,
    }));
}
 
export default useEvents;