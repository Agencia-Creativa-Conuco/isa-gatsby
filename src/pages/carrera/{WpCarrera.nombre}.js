import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import CareerSingle from '../../templates/carrera/carrera-single'
import useCarreras from '../../hooks/useCarreras'

export const query = graphql`
  query($id: String!) {
    allWpCarrera(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`

// markup
const Career = ({ data, ...props }) => {
  const {
    allWpCarrera: { nodes: carreras },
  } = data

  const [carrera] = useCarreras().filter((carrera) =>
    carreras.map((item) => item.id).includes(carrera.id),
  )

  const metaData = {
    title: carrera.nombre,
    description: carrera.copy,
  }

  return (
    <Layout {...props} {...metaData} obj={carrera}>
      <CareerSingle {...{ carrera }} />
    </Layout>
  )
}
export default Career
