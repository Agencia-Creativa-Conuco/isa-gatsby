import { graphql } from "gatsby";

export const query = graphql`
    fragment RequirementsFragment on WpGrade_Requisitos {
        requirements {
            requirement
            category {
                id
                name
            }
        }
    }
  
`;