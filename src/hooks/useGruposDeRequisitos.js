import { graphql, useStaticQuery } from 'gatsby';

const useGruposDeRequisitos = () => {

    const data = useStaticQuery(
        graphql `
        {
          allWpGrupoDeRequisitos {
            nodes {
              id
              __typename
              name
              slug
              count
            }
          }
        }
        
        `
    );

    const {
      allWpGrupoDeRequisitos: { nodes: categories },
    } = data;

    const resultado = categories.map( category => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
        count: category.count,
        type: category.__typename,
    }))

    return resultado;
}
 
export default useGruposDeRequisitos;