import React from 'react';
import Layout from '../components/layout';
import Filosofia from '../templates/page/centro-de-educacion-tecnica-huascar-rodriguez-herrera/filosofia';
import DatosRelevantes from '../templates/page/centro-de-educacion-tecnica-huascar-rodriguez-herrera/datos-relevantes';
import Cover from '../templates/page/centro-de-educacion-tecnica-huascar-rodriguez-herrera/cover';
import Galeria from '../templates/page/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria';
import OfertaTecnica from '../templates/page/centro-de-educacion-tecnica-huascar-rodriguez-herrera/oferta-tecnica';

const CentroHuascar = (props) => {

    return (
        <Layout {...props}>
            <Cover />
            <Filosofia />
            <Galeria />
            <DatosRelevantes />
            <OfertaTecnica />
        </Layout>
    )
}

export default CentroHuascar;
