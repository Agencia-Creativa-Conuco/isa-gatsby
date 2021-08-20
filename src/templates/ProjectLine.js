import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import ProjectLineComponent from "./projectLine/project-line-single";
import useProjectLines from "../hooks/useProjectLines";

export const query = graphql`
  query ($id: String!) {
    allWpProjectLine(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const ProjectLine = ({ data }) => {
  const {
    allWpProjectLine: { nodes: lines },
  } = data;

  const [line] = useProjectLines().filter( line => lines.map( item => item.id).includes( line.id ) );

  return (
    <Layout>
      <ProjectLineComponent {...{ line }}/>
    </Layout>
  );
};
export default ProjectLine;
