import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import ProjectLineComponent from "./projectLine/project-line-single";
import useLineasInvestigacion from "../hooks/useLineasInvestigacion";

export const query = graphql`
  query ($id: String!) {
    allWpLineaDeInvestigacion(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const ProjectLine = ({ data }) => {
  const {
    allWpLineaDeInvestigacion: { nodes: lines },
  } = data;

  const [line] = useLineasInvestigacion().filter( line => lines.map( item => item.id).includes( line.id ) );

  return (
    <Layout>
      <ProjectLineComponent {...{ line }}/>
    </Layout>
  );
};
export default ProjectLine;
