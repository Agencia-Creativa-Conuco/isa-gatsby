import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import useFiles from "../../../hooks/useFiles";
import { container, mq } from "../../../components/layout/new/";

const DIPCover = () => {
  const images = useFiles();

  const title = "Investigación",
    copy =
      "La Vicerrectoría de Investigaciones es la unidad operativa de la Universidad ISA que tiene como misión institucional normar, dirigir y desarrollar las actividades de investigación de la institución.",
    featuredImage = images.investigacion.cover;

  return (
    <Section fluid>
      <Content as="div">
        <Title> {title} </Title>
        <Copy>{copy}</Copy>
      </Content>
      <DecoLogo decoBg={colors.blue.dark}>
        <Logo
          media={featuredImage}
          size="100%"
          sizeMD="90%"
          sizeXL="90%"
          bgColor
          loading="eager"
        />
      </DecoLogo>
    </Section>
  );
};

export default DIPCover;

const Section = styled.section`
  ${container}
  padding: 0;

  display: grid;
  grid-template-columns: 100%;
  

    &:before {
      content: '';
      position: absolute;
      top: 10%;
      left: 0%;
      width: 30%;
      padding-bottom: 30%;
      border-radius: 50%;
      background: ${colors.cta.base};
      transform: translate(-90%, 0);
    }
    div:first-of-type {
      order: 2;
    }
    ${mq.md} {
    grid-template-columns: 45% 55%;

    div:last-of-type {
      order: 2;
    }
    ${mq.lg} {
    grid-template-columns: 50% 50%;
  }

`;

const Content = styled.div`
  max-width: 60rem;
  align-self: center;
  padding: 0 1.5rem;
  margin: 10% auto;
  z-index: 2;
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Copy = styled.p``;

const Logo = styled(FeaturedMedia)`
  clip-path: ellipse(100% 100% at right);
`;

const DecoLogo = styled.div`
  margin-left: 9%;
  ${mq.md} {
    margin-left: 0;
  }
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: -8%;
    bottom: 15%;
    padding: 8%;
    clip-path: circle(50% at 50% 50%);
    background: ${(props) => props.decoBg};
  }
`;
