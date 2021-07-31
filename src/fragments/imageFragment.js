import { graphql } from "gatsby";

export const query = graphql`
    fragment ImageFragment on WpMediaItem {
        id
        localFile {
            publicURL
            childImageSharp {
                fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`