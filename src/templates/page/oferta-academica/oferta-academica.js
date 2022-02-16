import React from 'react'
import styled from '@emotion/styled'
import OfertaCover from './oferta-academica-cover'
// import OfertaFacultades from './oferta-academica-facultades'
import OfertaTecnics from './oferta-academica-tecnics'
import OfertaInternacional from './oferta-academica-internacional'
import OfertaLabs from './oferta-academica-labs'
import Layout from '../../../components/layout'
import OfertaAcademicaLista from './oferta-academica-oferta'

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

  const metaData = {
    title: 'Oferta Académica',
    description:
      'La Universidad ha sabido responder a los cambios que la sociedad ha demandado, y en la actualidad ha diversificado su oferta curricular ofreciendo carreras que responden a las necesidades del país. En todas ellas introduciendo cambios en la estructura curricular para formar profesionales con las competencias requeridas para desarrollar su labor con profesionalidad, inspirados en los principios y valores que sustenta la Universidad.',
  }

  // Load the post, but only if the data is ready.
  return (
    <Layout {...{ data }} {...props} {...metaData}>
      <Container>
        <OfertaCover />
        <OfertaAcademicaLista />
        {/* <OfertaFacultades /> */}
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
