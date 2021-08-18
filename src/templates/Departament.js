import * as React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby";
import DepartamentSingle from "./departament/departament-single";
import useDepartaments from "../hooks/useDepartaments";

export const query = graphql`
  query($id: String!) {
    allWpDepartament( filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const Post = ({data}) => {

  const {
      allWpDepartament: {
          nodes: departaments
      }
  } = data;

  const [departament] = useDepartaments().filter( departament => departaments.map( item => item.id).includes( departament.id ) );
  
  return (
      <Layout>
        <DepartamentSingle {...{departament}} />
      </Layout>
  )
}
export default Post
