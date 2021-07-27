import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import FacultySingle from "./faculty/faculty-single";
import School from "./faculty/school";

import useFaculties from "../hooks/useFaculties";

export const query = graphql`
  query ($id: String!) {
    allWpFaculty(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const Faculty = ({ data }) => {

  const {
    allWpFaculty: { nodes: faculties },
  } = data;

  const [faculty] = useFaculties().filter( faculty => faculties.map( item => item.id).includes( faculty.id ) );

  return (
    <Layout>
    {
      !faculty.parent? (
        <FacultySingle {...{faculty}} />
      ) : (
        <School {...{faculty}} />
      )
    }
    </Layout>
  );
};
export default Faculty;