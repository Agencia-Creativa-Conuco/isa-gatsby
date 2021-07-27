import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useInicio = () => {

    const resultado = useStaticQuery(
        graphql `
            query {
                allWpPage(filter: {isFrontPage: {eq: true}}) {
                    nodes {
                        id
                    }
                }
            }
        `
    );

    return resultado.allWpPage.nodes.map( inicio => ({
        id: inicio.id,
    }));
}
 
export default useInicio;