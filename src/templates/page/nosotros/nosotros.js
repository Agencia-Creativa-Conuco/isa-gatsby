import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../../components/layout'
import NosotrosCover from './nosotros-cover'
import NosotrosHistory from './nosotros-history'
import NosotrosRector from './nosotros-rector'
import NosotrosCampus from './nosotros-campus'
import NosotrosPhilosophy from './nosotros-philosophy'
// import PageIndexes from '../../../components/page-indexes'

const Nosotros = (props) => {
  const data = [
    {
      name: 'Nuestra Historia',
      id: '#section_1',
    },
    {
      name: 'Nuestro Rector',
      id: '#section_2',
    },
    {
      name: 'Filosofía Nosotros',
      id: '#section_3',
    },
    {
      name: 'Nuestro campus',
      id: '#section_4',
    },
  ]

  const metaData = {
    title: 'NOSOTROS',
    description:
      'La Universidad ISA propicia en sus aulas el desarrollo de líderes visionarios, guiados por los valores de honestidad, responsabilidad, respeto, compromiso social y calidad.',
  }

  // Load the post, but only if the data is ready.
  return (
    <Layout {...{ data }} {...props} {...metaData}>
      <Container>
        <NosotrosCover />
        <NosotrosHistory />
        <NosotrosRector />
        <NosotrosPhilosophy />
        <NosotrosCampus />
      </Container>
    </Layout>
  )
}

export default Nosotros

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`
