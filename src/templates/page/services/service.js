import React from "react";
import { connect, styled } from "frontity";
import ServiceCover from "./service-cover";
import ServicePsychology from "./service-psychology";
import ServiceWellneres from "./service-wellneres";
import ServiceResidence from "./service-residence";
import ServiceEconomics from "./service-economics";
import ServiceSurgery from "./service-surgery";
import ServiceSport from "./service-sport";
import ServiceActivities from "./service-activities";

const ServicePage = ({ state }) => {

  // Get information about the current URL.
    const data = state.source.get(state.router.link);

  // Load the post, but only if the data is ready.
    return data.isReady? (
        <Container>
            <ServiceCover /> 
            <ServiceActivities />
            <ServicePsychology />
            <ServiceWellneres />
            <ServiceResidence />
            <ServiceSurgery />
            <ServiceSport />
            <ServiceEconomics />
        </Container>
    ) : null;
};

export default connect(ServicePage);

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;