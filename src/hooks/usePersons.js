// import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const usePersons = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpPerson {
              nodes {
                id
                __typename
                title
                date
                link
                uri
                slug
                featuredImage {
                  node {
                    ...ImageFragment
                  }
                }
                personData {
                  personJobTitle
                  personDegreeTitle
                  personDegree
                  carreraNacionalInvestigacion {
                    isMember
                    anoIngreso
                    area
                    areaInvestigacion
                    categoria
                  }
                }
              }
            }
          }
        `
    );

    return resultado.allWpPerson.nodes.map( person => ({
        id: person.id,
        title: person.title,
        date: person.date,
        slug: person.slug,
        uri: person.uri,
        link: person.link,
        featuredImage: person.featuredImage? person.featuredImage.node.localFile : null,
        jobTitle: person?.personData?.personJobTitle,
        degreeTitle: person?.personData?.personDegreeTitle,
        degree: person?.personData?.personDegree,
        carreraNacionalInvestigacion: person?.personData?.carreraNacionalInvestigacion,
        type: person.__typename,
    }));
}
 
export default usePersons;