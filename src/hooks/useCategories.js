import { graphql, useStaticQuery } from 'gatsby';

const useCategories = () => {

    const data = useStaticQuery(
        graphql `
        {
          allWpCategory {
            nodes {
              id
              __typename
              name
              slug
              count
              uri
            }
          }
        }
        
        `
    );

    const {
      allWpCategory: { nodes: categories },
    } = data;

    const resultado = categories.map( category => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
        uri: category.uri,
        count: category.count,
        type: category.__typename,
    }))

    return resultado;
}
 
export default useCategories;