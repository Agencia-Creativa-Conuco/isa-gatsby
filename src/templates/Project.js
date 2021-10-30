import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import ProjectComponent from "./project/project-single";
import useInvestigaciones from "../hooks/useInvestigaciones";

export const query = graphql`
  query ($id: String!) {
    allWpInvestigacion(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const Project = ({ data }) => {
  const {
    allWpInvestigacion: { nodes: projects },
  } = data;

  const [project] = useInvestigaciones().filter( project => projects.map( item => item.id).includes( project.id ) );

  return (
    <Layout>
      <ProjectComponent {...{ project }}/>
    </Layout>
  );
};
export default Project;
