import React from 'react'
import Layout from '../../../components/layout'
import CentroMipymesBenefits from './centro-mipymes-benefits';
import CentroMipymesCover from './centro-mipymes-cover';
import CentroMipymesPhilosophy from './centro-mipymes-philosophy';
import CentroMipymesServices from './centro-mipymes-services';
const CentroMipymes = (props) => {


  const metaData = {
    title: 'Centro MiPymes',
    description:
      'LEl Centro MIPYMES (Centro de Servicios de Apoyo Integral de las micro, pequeñas y medianas empresas) es una iniciativa por parte del Ministerio de Industria y Comercio a través del Viceministerio de Fomento a las MIPYMES en alianza con la Universidad ISA',
  }




  return (
    <Layout {...props} {...metaData}>
      <CentroMipymesCover />
      <CentroMipymesPhilosophy />
      <CentroMipymesServices />
      <CentroMipymesBenefits/>
    </Layout>
  );
}

export default CentroMipymes