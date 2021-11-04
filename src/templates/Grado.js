import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import GradeComponent from "./grado/grado-single";
import useGrados from "../hooks/useGrados";

export const query = graphql`
  query ($id: String!) {
    allWpGrado(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const Grade = ({ data }) => {
  const {
    allWpGrado: { nodes: grados },
  } = data;

  const [grado] = useGrados().filter( grado => grados.map( item => item.id).includes( grado.id ) );

  return (
    <Layout>
      <GradeComponent {...{ grado }}/>
    </Layout>
  );
};
export default Grade;
