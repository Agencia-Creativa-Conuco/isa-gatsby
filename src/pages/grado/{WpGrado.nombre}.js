import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import GradeSingle from '../../templates/grado/grado-single'
import useGrados from '../../hooks/useGrados'

export const query = graphql`
  query($id: String!) {
    allWpGrado(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`

// markup
const Grado = ({ data, ...props }) => {
  const {
    allWpGrado: { nodes: grados },
  } = data

  const [grado] = useGrados().filter((grado) =>
    grados.map((item) => item.id).includes(grado.id),
  )

  const metaData = {
    title: grado.nombre,
    description: grado.copy,
  }

  return (
    <Layout {...props} {...metaData} obj={grado}>
      <GradeSingle {...{ grado }} />
    </Layout>
  )
}
export default Grado
