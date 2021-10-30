import React from "react";
import styled from "@emotion/styled";
import OfferCover from "./offer-cover";
import OfferFaculties from "./offer-faculties";
import OfferTecnics from "./offer-tecnics";
import OfferInternational from "./offer-international";
import OfferLabs from "./offer-labs";
import Layout from "../../components/layout";

const OfferPage = (props) => {

  // Load the post, but only if the data is ready.
  return (
    <Layout {...props}>
      <Container>
        <OfferCover />
        <OfferFaculties />
        <OfferTecnics />
        <OfferLabs />
        <OfferInternational />
      </Container>
    </Layout>
  );
};

export default OfferPage;

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`;
