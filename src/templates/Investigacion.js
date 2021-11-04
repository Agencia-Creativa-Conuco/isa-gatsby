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
const Investigacion = ({ data }) => {
  const {
    allWpInvestigacion: { nodes: investigaciones },
  } = data;

  const [investigacion] = useInvestigaciones().filter( investigacion => investigaciones.map( item => item.id).includes( investigacion.id ) );

  return (
    <Layout>
      <ProjectComponent {...{ investigacion }}/>
    </Layout>
  );
};
export default Investigacion;
