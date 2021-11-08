import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import FacultySingle from "./facultad/facultad-single";
import useFacultades from "../hooks/useFacultades";

export const query = graphql`
  query ($id: String!) {
    allWpFacultad(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const Facultad = ({ data, ...props }) => {

  const {
    allWpFacultad: { nodes: facultades },
  } = data;

  const [facultad] = useFacultades().filter( facultad => facultades.map( item => item.id).includes( facultad.id ) );
  
  return (
    <Layout {...props} obj={facultad}>
      <FacultySingle {...{facultad}} />
    </Layout>
  );
};
export default Facultad;
