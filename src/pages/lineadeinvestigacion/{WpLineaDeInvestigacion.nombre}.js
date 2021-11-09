import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import ProjectLineComponent from "../../templates/linea-de-investigacion/linea-de-investigacion-single";
import useLineasInvestigacion from "../../hooks/useLineasInvestigacion";

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
const ProjectLine = ({ data, ...props }) => {
  const {
    allWpLineaDeInvestigacion: { nodes: lines },
  } = data;

  const [lineaInvestigacion] = useLineasInvestigacion().filter( lineaInvestigacion => lines.map( item => item.id).includes( lineaInvestigacion.id ) );

  return (
    <Layout {...props} obj={lineaInvestigacion}>
      <ProjectLineComponent {...{ lineaInvestigacion }}/>
    </Layout>
  );
};
export default ProjectLine;
