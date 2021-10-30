import { graphql } from "gatsby";

export const query = graphql`
    fragment RequirementsFragment on WpGrupoDeRequisitos {
        requisitos {
            requisito
            categoria {
                id
                name
            }
        }
    }
  
`;