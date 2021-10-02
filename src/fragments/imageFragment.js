import { graphql } from "gatsby";

export const query = graphql`
    fragment ImageFragment on WpMediaItem {
        id
        altText
        title
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