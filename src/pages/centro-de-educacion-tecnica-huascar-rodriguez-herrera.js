import React from 'react'
import Layout from '../components/layout'
import Filosofia from '../templates/page/centro-de-educacion-tecnica-huascar-rodriguez-herrera/filosofia'
import DatosRelevantes from '../templates/page/centro-de-educacion-tecnica-huascar-rodriguez-herrera/datos-relevantes'
import Cover from '../templates/page/centro-de-educacion-tecnica-huascar-rodriguez-herrera/cover'
import Galeria from '../templates/page/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria'
import OfertaTecnica from '../templates/page/centro-de-educacion-tecnica-huascar-rodriguez-herrera/oferta-tecnica'

const CentroHuascar = (props) => {
  const metaData = {
    title: 'Centro de Educación Técnica Huascar Rodríguez Herrera',
    description:
      'El Centro de Educación Técnica Huáscar Rodríguez Herrera surge en el 2011, como una iniciativa conjunta entre la Familia Rodríguez Herrera, a través de su empresa Cementos Cibao, la República China (Taiwán), y la Universidad ISA, con el objetivo de formar y capacitar los recursos humanos demandados por el Sector Construcción.',
  }

  return (
    <Layout {...props} {...metaData}>
      <Cover />
      <Filosofia />
      <Galeria />
      <OfertaTecnica />
      <DatosRelevantes />
    </Layout>
  )
}

export default CentroHuascar
