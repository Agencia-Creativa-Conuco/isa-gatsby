import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import GradeComponent from "./grade/grade-single";
import useGrades from "../hooks/useGrades";

export const query = graphql`
  query ($id: String!) {
    allWpGrade(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const Grade = ({ data }) => {
  const {
    allWpGrade: { nodes: grades },
  } = data;

  const [grade] = useGrades().filter( grade => grades.map( item => item.id).includes( grade.id ) );

  return (
    <Layout>
      <GradeComponent {...{ grade }}/>
    </Layout>
  );
};
export default Grade;
