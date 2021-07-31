import { graphql } from "gatsby";

export const query = graphql`
    fragment CtaFragment on WpAcfLink {
        target
        title
        url
    }
`;