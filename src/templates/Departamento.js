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
const Post = ({data, ...props}) => {

  const {
      allWpDepartamento: {
          nodes: departamentos
      }
  } = data;

  const [departamento] = useDepartamentos().filter( departamento => departamentos.map( item => item.id).includes( departamento.id ) );
  
  return (
      <Layout {...props} obj={departamento}>
        <DepartamentSingle {...{departamento}} />
      </Layout>
  )
}
export default Post
