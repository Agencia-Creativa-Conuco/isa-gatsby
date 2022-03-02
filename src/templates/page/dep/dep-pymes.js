import React from "react";
import styled from "@emotion/styled";
import Cta from "../../../components/cta";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import useFiles from "../../../hooks/useFiles";
import { container, mq } from "../../../components/layout/new";

const DEPPymes = () => {
  const images = useFiles();
  const image = images["direccion-extension-y-proyectos"].centro_mipymes;

  const title = "Centro MIPYMES",
    copy =
      "El Centro MIPYMES (Centro de Servicios de Apoyo Integral de las micro, pequeñas y medianas empresas) es una iniciativa por parte del Ministerio de Industria y Comercio a través del Viceministerio de Fomento a las  MIPYMES en alianza con la Universidad ISA, el cual tiene como objetivo principal brindar los servicios y las consultorías necesarias a las micro, pequeñas y medianas empresas, de manera gratuita, para fortalecer su capacidad productiva, competitividad y eficiencia.",
    cta = {
      url: "/centro-mipymes",
      title: "Conoce más",
      target: null,
    };

  return (
    <Section spaceBottomNone id="section_4">
      <Container>
        <Media>
          <FeaturedMedia media={image} size="100%" mxAuto />
        </Media>
        <Content>
          <SectionTitle>{title}</SectionTitle>
          <DivTitle>
            <Copy>{copy}</Copy>
          </DivTitle>
          {cta ? (
            <Cta to={cta.url} target={cta.target}>
              {cta.title}
            </Cta>
          ) : null}
        </Content>
      </Container>
    </Section>
  );
};

export default DEPPymes;

const Section = styled.section`
  background: ${colors.blue.base};
  margin-top: 15rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 1.6%;
    padding-bottom: 17%;
    right: 0;
    top: 0;
    background: ${colors.blue.dark};
    opacity: 0.8;
  }
`;

const Container = styled.div`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 7rem;
  ${mq.md} {
    grid-template-columns: 42% 50%;
  }
`;
const Content = styled.div`
  padding: 0 1.5rem 4rem 1.5rem;
`;

const DivTitle = styled.div`
  color: ${colors.white};
  padding: 5rem 0;
  padding-top: 0;
  ${mq.md} {
    padding: 5rem 0;
    padding: 5rem 0rem 2rem 0rem;
  }

  ${mq.lg} {
    padding: 2rem 0rem 2rem 0rem;
  }
`;

const SectionTitle = styled.h2`
  ${mq.md} {
    margin-top: -4rem;
  }

  ${mq.lg} {
    margin-top: 0;
    transform: translateY(-6rem);
  }
`;

const Copy = styled.p``;

const Media = styled.div`
  position: relative;
  margin-top: -10%;
  ${mq.md} {
    margin-top: -20%;
  }
  &::before {
    content: "";
    position: absolute;
    width: 200%;
    padding-bottom: 10%;
    right: 25%;
    top: 13%;
    background: ${colors.blue.dark};
  }
`;
