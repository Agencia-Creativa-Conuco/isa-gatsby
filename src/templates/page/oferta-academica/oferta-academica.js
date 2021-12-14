import React from 'react'
import styled from '@emotion/styled'
import OfertaCover from './oferta-academica-cover'
import OfertaFacultades from './oferta-academica-facultades'
import OfertaTecnics from './oferta-academica-tecnics'
import OfertaInternacional from './oferta-academica-internacional'
import OfertaLabs from './oferta-academica-labs'
import Layout from '../../../components/layout'

const OfertaAcademica = (props) => {
  const data = [
    {
      name: 'Oferta Académica',
      id: '#section_1',
    },
    {
      name: 'Centro de Educación Técnica Huascar Rodríguez Herrera',
      id: '#section_2',
    },
    // {
    //   name: 'Ofertas de Laboratorio',
    //   id: '#section_3',
    // },
    {
      name: 'Programas Internacionales',
      id: '#section_4',
    },
  ]

  // Load the post, but only if the data is ready.
  return (
    <Layout {...{ props, data }}>
      <Container>
        <OfertaCover />
        <OfertaFacultades />
        <OfertaTecnics />
        <OfertaLabs />
        <OfertaInternacional />
      </Container>
    </Layout>
  )
}

export default OfertaAcademica

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`
