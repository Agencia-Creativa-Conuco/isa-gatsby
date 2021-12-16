import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import DepartamentoSingle from '../../templates/departamento/departamento-single'
import useDepartamentos from '../../hooks/useDepartamentos'

export const query = graphql`
  query($id: String!) {
    allWpDepartamento(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`

// markup
const Departamento = ({ data, ...props }) => {
  const {
    allWpDepartamento: { nodes: departamentos },
  } = data

  const [departamento] = useDepartamentos().filter((departamento) =>
    departamentos.map((item) => item.id).includes(departamento.id),
  )

  const metaData = {
    title: departamento.nombre,
    description: departamento.copy,
  }

  return (
    <Layout {...props} {...metaData} obj={departamento}>
      <DepartamentoSingle {...{ departamento }} />
    </Layout>
  )
}
export default Departamento
