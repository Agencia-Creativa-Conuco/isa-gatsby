import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import GradeComponent from "./grade/grade-single";
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
    allWpGrado: { nodes: grades },
  } = data;

  const [grade] = useGrados().filter( grade => grades.map( item => item.id).includes( grade.id ) );

  return (
    <Layout>
      <GradeComponent {...{ grade }}/>
    </Layout>
  );
};
export default Grade;
