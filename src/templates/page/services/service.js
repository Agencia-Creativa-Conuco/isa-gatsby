import React from "react";
import styled from "@emotion/styled";
import ServiceCover from "./service-cover";
import ServicePsychology from "./service-psychology";
import ServiceWellneres from "./service-wellneres";
import ServiceResidence from "./service-residence";
import ServiceEconomics from "./service-economics";
import ServiceSurgery from "./service-surgery";
import ServiceSport from "./service-sport";
import ServiceActivities from "./service-activities";

const ServicePage = ({ page }) => {

  // Load the post, but only if the data is ready.
    return (
        <Container>
            <ServiceCover {...{page}} /> 
            <ServiceActivities {...{page}} />
            <ServicePsychology {...{page}} />
            <ServiceWellneres {...{page}} />
            <ServiceResidence {...{page}} />
            <ServiceSurgery {...{page}} />
            <ServiceSport {...{page}} />
            <ServiceEconomics {...{page}} />
        </Container>
    );
};

export default ServicePage;

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;