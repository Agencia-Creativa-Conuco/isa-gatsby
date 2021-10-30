import * as React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby";
import DepartamentSingle from "./departament/departament-single";
import useDepartamentos from "../hooks/useDepartamentos";

export const query = graphql`
  query($id: String!) {
    allWpDepartamento( filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const Post = ({data}) => {

  const {
      allWpDepartamento: {
          nodes: departaments
      }
  } = data;

  const [departament] = useDepartamentos().filter( departament => departaments.map( item => item.id).includes( departament.id ) );
  
  return (
      <Layout>
        <DepartamentSingle {...{departament}} />
      </Layout>
  )
}
export default Post
