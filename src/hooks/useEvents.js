import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useEvents = () => {

    const resultado = useStaticQuery(
        graphql `
          {
            allWpEvent {
              nodes {
                id: databaseId
                title
                link
                uri
                slug
                date: eventDate
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
    }));
}
 
export default useEvents;