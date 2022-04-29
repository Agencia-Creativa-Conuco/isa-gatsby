import React from 'react'
import Layout from '../../../components/layout'
import CentroMipymesCover from './centro-mipymes-cover';
const CentroMipymes = (props) => {


  const metaData = {
    title: 'Centro MiPymes',
    description:
      'LEl Centro MIPYMES (Centro de Servicios de Apoyo Integral de las micro, pequeñas y medianas empresas) es una iniciativa por parte del Ministerio de Industria y Comercio a través del Viceministerio de Fomento a las MIPYMES en alianza con la Universidad ISA',
  }




  return (
    <Layout {...props} {...metaData}>
      <CentroMipymesCover />
    </Layout>
  
  );
}

export default CentroMipymes