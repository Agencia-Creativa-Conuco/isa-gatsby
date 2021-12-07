import React from "react";
import styled from "@emotion/styled";
import OfertaCover from "./oferta-academica-cover";
import OfertaFacultades from "./oferta-academica-facultades";
import OfertaTecnics from "./oferta-academica-tecnics";
import OfertaInternacional from "./oferta-academica-internacional";
import OfertaLabs from "./oferta-academica-labs";
import Layout from "../../../components/layout";
import PageIndexes from "../../../components/page-indexes";


const OfertaAcademica = (props) => {


  const data = [
    {
      name: "Facultades",
      id: "#section_1",
    },
    {
      name: "Oferta Tecnicas",
      id: "#section_2",
    },
    {
      name: "Ofertas de Laboratorio",
      id: "#section_3",
    },
    {
      name: "Programas Internacionales",
      id: "#section_4",
    }
  ]

  // Load the post, but only if the data is ready.
  return (
    <Layout {...props}>
      <Container>
        <OfertaCover />
        <OfertaFacultades />
        <OfertaTecnics />
        <OfertaLabs />
        <OfertaInternacional />
        <PageIndexes data={data}/>
      </Container>
    </Layout>
  );
};

export default OfertaAcademica;

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`;
