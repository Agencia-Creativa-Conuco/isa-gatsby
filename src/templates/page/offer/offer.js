import React from "react";
import { connect, styled } from "frontity";
import OfferCover from "./offer-cover";
import OfferFaculties from "./offer-faculties";
import OfferTecnics from "./offer-tecnics";
import OfferInternational from "./offer-international";
import OffterFacultiesDate from "./offter-date";

const OfferPage = ({ state }) => {

  // Get information about the current URL.
    const data = state.source.get(state.router.link);

  // Load the post, but only if the data is ready.
    return data.isReady? (
        <Container>
            <OfferCover />
            <OfferFaculties/>
            <OfferTecnics />
            <OfferInternational />
            <OffterFacultiesDate />
        </Container>
    ) : null;
};

export default connect(OfferPage);

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;