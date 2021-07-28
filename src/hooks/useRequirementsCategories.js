import { graphql, useStaticQuery } from 'gatsby';

const useRequirementsCategories = () => {

    const data = useStaticQuery(
        graphql `
        {
          allWpRequirementGroup {
            nodes {
              id
              name
              slug
              count
            }
          }
        }
        
        `
    );

    const {
      allWpRequirementGroup: { nodes: categories },
    } = data;

    const resultado = categories.map( category => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
        count: category.count,
    }))

    return resultado;
}
 
export default useRequirementsCategories;