import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import CareerSingle from "./career/career-single";
import useCareers from "../hooks/useCareers";

export const query = graphql`
  query ($id: String!) {
    allWpCareer(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const Career = ({ data }) => {
  const {
    allWpCareer: { nodes: careers },
  } = data;

  const [career] = useCareers().filter( career => careers.map( item => item.id).includes( career.id ) );

  console.log(career)
  return (
    <Layout>
      {
        career.parent? (
          <CareerSingle {...{career}} />
        ): (
          <h1>ESTE ES UN GRADO</h1>
        )
      }
    </Layout>
  );
};
export default Career;
