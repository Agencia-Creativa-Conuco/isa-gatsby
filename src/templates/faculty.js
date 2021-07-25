import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
  query ($id: String!) {
    allWpFaculty(filter: { id: { eq: $id } }) {
      nodes {
        id
        title
        content
        date
        link
        uri
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

// markup
const Faculty = ({ data }) => {
  const {
    allWpFaculty: { nodes: facultys },
  } = data;

  const [faculty] = facultys;

  const {
    title
  } = faculty;

  return (
    <Layout>
      <h1>{title}</h1>
      <div>AQUI VA EL COMPONENTE</div>
    </Layout>
  );
};
export default Faculty;
