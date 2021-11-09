import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import ProjectComponent from "../../templates/investigacion/investigacion-single";
import useInvestigaciones from "../../hooks/useInvestigaciones";

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
const Investigacion = ({ data, ...props }) => {
  const {
    allWpInvestigacion: { nodes: investigaciones },
  } = data;

  const [investigacion] = useInvestigaciones().filter( investigacion => investigaciones.map( item => item.id).includes( investigacion.id ) );

  return (
    <Layout {...props} obj={investigacion}>
      <ProjectComponent {...{ investigacion }}/>
    </Layout>
  );
};
export default Investigacion;
