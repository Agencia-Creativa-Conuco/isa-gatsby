import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../../components/layout'
import DEPCover from './dep-cover'
import DEPActivities from './dep-activities'
import DEPDevelopment from './dep-development'
import DEPServices from './dep-services'
import DEPLaboratory from './dep-laboratory'
import DEPVeterinary from './dep-veterinary'
import DEPCede from './dep-cede'
import DEPServicesMenu from './dep-services-menu'
import DEPPymes from './dep-pymes'
import DepNAF from './dep-naf'

const DEPPage = (props) => {
  const data = [
    {
      name: 'Actividades Que Realiza',
      id: '#section_1',
    },
    {
      name: 'Proyectos En Desarrollo',
      id: '#section_2',
    },
    {
      name: 'Servicios Profesionales ISA',
      id: '#section_3',
    },
    {
      name: 'Centro MIPYMES',
      id: '#section_4',
    },
    {
      name: 'Laboratorios',
      id: '#section_5',
    },
    {
      name: 'CEDE',
      id: '#section_6',
    },
    {
      name: 'Clínica Veterinaria',
      id: '#section_7',
    },
    {
      name: 'Centro NAF',
      id: '#section_8',
    },
  ]

  return (
    <Layout {...{ props, data }}>
      <Container>
        <DEPCover />
        <DEPActivities />
        <DEPDevelopment />
        <DEPServices />
        <DEPServicesMenu />
        <DEPPymes />
        <DEPLaboratory />
        <DEPCede />
        <DEPVeterinary />
        <DepNAF />
      </Container>
    </Layout>
  )
}

export default DEPPage

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`
