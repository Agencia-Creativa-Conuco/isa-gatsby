import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import AboutCover from "./about-cover";
import AboutHistory from "./about-history";
import AboutRector from "./about-rector";
import AboutCampus from "./about-campus";
import AboutPhilosophy from "./about-philosophy";

const About = ({ ...props }) => {
  // Load the post, but only if the data is ready.
  return (
    <Container>
      <AboutCover {...props} />
      <AboutHistory {...props} />
      <AboutRector {...props} />
      <AboutPhilosophy {...props} />
      <AboutCampus {...props} />
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`;
