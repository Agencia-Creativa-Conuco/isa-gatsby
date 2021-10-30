import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import FacultySingle from "./faculty/faculty-single";
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
const Faculty = ({ data }) => {

  const {
    allWpFacultad: { nodes: faculties },
  } = data;

  const [faculty] = useFacultades().filter( faculty => faculties.map( item => item.id).includes( faculty.id ) );
  
  return (
    <Layout>
      <FacultySingle {...{faculty}} />
    </Layout>
  );
};
export default Faculty;
