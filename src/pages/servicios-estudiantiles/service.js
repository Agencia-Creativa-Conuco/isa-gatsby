import React from "react";
import styled from "@emotion/styled";
import ServiceCover from "./service-cover";
import ServicePsychology from "./service-psychology";
import ServiceWellneres from "./service-wellneres";
import ServiceResidence from "./service-residence";
import ServiceAGISA from "./service-agisa";
import ServiceSurgery from "./service-surgery";
import ServiceSport from "./service-sport";
import ServiceExcellence from "./service-excellence";
import ServiceActivities from "./service-activities";
import Layout from "../../components/layout";

const ServicePage = (props) => {

  // Load the post, but only if the data is ready.
    return (
        <Layout {...props}>
            <Container>
                <ServiceCover /> 
                <ServiceActivities />
                <ServiceWellneres />
                <ServicePsychology />
                <ServiceResidence />
                <ServiceSurgery />
                <ServiceSport />
                <ServiceExcellence />
                <ServiceAGISA />
            </Container>
        </Layout>
    );
};

export default ServicePage;

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;