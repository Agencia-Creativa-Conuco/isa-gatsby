import React from "react";
import styled from "@emotion/styled";
import OfferCover from "./offer-cover";
import OfferFaculties from "./offer-faculties";
// import OfferTecnics from "./offer-tecnics";
// import OfferInternational from "./offer-international";
// import OffterFacultiesDate from "./offter-date";

const OfferPage = ({ page }) => {

  // Load the post, but only if the data is ready.
    return (
        <Container>
            <OfferCover {...{page}} />
            <OfferFaculties {...{page}} />
            {/* <OfferTecnics {...{page}} /> */}
            {/* <OfferInternational {...{page}} /> */}
            {/* <OffterFacultiesDate {...{page}} /> */}
        </Container>
    );
};

export default OfferPage;

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;