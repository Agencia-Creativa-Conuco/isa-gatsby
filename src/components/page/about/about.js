import React from "react";
import { connect, styled } from "frontity";
import AboutCover from "./about-cover";
import AboutHistory from "./about-history";
import AboutRector from "./about-rector";
import AboutCampus from "./about-campus";
import AboutPhilosophy from "./about-philosophy";

const About = ({ state }) => {

  // Get information about the current URL.
    const data = state.source.get(state.router.link);

  // Load the post, but only if the data is ready.
    return data.isReady? (
        <Container>
            <AboutCover />
            <AboutHistory />
            <AboutRector />
            <AboutPhilosophy />
            <AboutCampus />
        </Container>
    ) : null;
};

export default connect(About);

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;