import React from "react";
import styled from "@emotion/styled";
import OfertaCover from "./oferta-academica-cover";
import OfertaFacultades from "./oferta-academica-facultades";
import OfertaTecnics from "./oferta-academica-tecnics";
import OfertaInternacional from "./oferta-academica-internacional";
import OfertaLabs from "./oferta-academica-labs";
import Layout from "../../../components/layout";

const OfertaAcademica = (props) => {

  // Load the post, but only if the data is ready.
  return (
    <Layout {...props}>
      <Container>
        <OfertaCover />
        <OfertaFacultades />
        <OfertaTecnics />
        <OfertaLabs />
        <OfertaInternacional />
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
