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
const Facultad = ({ data }) => {

  const {
    allWpFacultad: { nodes: faculties },
  } = data;

  const [facultad] = useFacultades().filter( facultad => faculties.map( item => item.id).includes( facultad.id ) );
  
  return (
    <Layout>
      <FacultySingle {...{facultad}} />
    </Layout>
  );
};
export default Facultad;
