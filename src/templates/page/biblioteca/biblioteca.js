import React from 'react'
import styled from '@emotion/styled'
import BibliotecaCover from './biblioteca-cover'
import BibliotecaServicios from './biblioteca-servicios'
import BibliotecaRecursos from './biblioteca-recursos'
import BibliotecaHorario from './biblioteca-horario'
import Layout from '../../../components/layout'

const Biblioteca = (props) => {
  const data = [
    {
      name: ' Servicios',
      id: '#section_1',
    },
    {
      name: 'Recursos',
      id: '#section_2',
    },
    {
      name: 'Horario de servicios',
      id: '#section_3',
    },
  ]

  const metaData = {
    title: 'Biblioteca',
    description:
      'La biblioteca de la Universidad ISA, se concibe como un centro de información y fuente de conocimiento en permanente renovación. Su accionar, está orientado a la búsqueda del crecimiento científico y espiritual de toda la comunidad universitaria, a través del contacto con los medios y actores que sirven de catalizador.',
  }

  return (
    <Layout {...{ data }} {...props} {...metaData}>
      <Container>
        <BibliotecaCover />
        <BibliotecaServicios />
        <BibliotecaRecursos />
        <BibliotecaHorario />
      </Container>
    </Layout>
  )
}

export default Biblioteca

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`
