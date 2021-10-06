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
const Career = ({ data, ...props }) => {
  const {
    allWpCareer: { nodes: careers },
  } = data;

  const [career] = useCareers().filter( career => careers.map( item => item.id).includes( career.id ) );

  return (
    <Layout {...props}>
      <CareerSingle {...{career}} />
    </Layout>
  );
};
export default Career;
