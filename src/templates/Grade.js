import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import ProjectComponent from "./project/project-single";
import useProjects from "../hooks/useProjects";

export const query = graphql`
  query ($id: String!) {
    allWpProject(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const Project = ({ data }) => {
  const {
    allWpProject: { nodes: projects },
  } = data;

  const [project] = useProjects().filter( project => projects.map( item => item.id).includes( project.id ) );

  return (
    <Layout>
      <ProjectComponent {...{ project }}/>
    </Layout>
  );
};
export default Project;
