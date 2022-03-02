import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";
import useFiles from "../../../hooks/useFiles";
import { container, mq } from "../../../components/layout/new";

const Biblioteca = () => {
  const images = useFiles();

  const title = "Biblioteca",
    copy =
      "La biblioteca de la Universidad ISA, se concibe como un centro de información y fuente de conocimiento en permanente renovación. Su accionar, está orientado a la búsqueda del crecimiento científico y espiritual de toda la comunidad universitaria, a través del contacto con los medios y actores que sirven de catalizador",
    featuredImage = images.biblioteca.cover;

  return (
    <Section fluid>
      <Content>
        <SectionTitle>{title} </SectionTitle>
        <Copy>{copy}</Copy>
        <Cta to="http://bibliotecaunisa.com/" rel="noopener" target="_blank">
          ir al Sitio oficial
        </Cta>
      </Content>
      <Media>
        <Logo media={featuredImage} size="100%" sizeLG="80%" loading="eager" />
      </Media>
    </Section>
  );
};

export default Biblioteca;

const Section = styled.section`
  ${container}
  overflow: hidden;
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  div:first-of-type {
    order: 2;
  }
  ${mq.md} {
    grid-template-columns: 50% 50%;
    div:last-of-type {
      order: 2;
    }
  }
  ${mq.lg} {
    grid-template-columns: 43% 57%;
  }
`;

const Content = styled.div`
  margin: 2rem auto;
  max-width: 50rem;
  position: relative;
  align-self: center;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h1`
  margin-bottom: 2.5rem;
`;

const Copy = styled.p`
  margin-bottom: 2rem;
`;

const Media = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    padding: 27%;
    clip-path: circle(50% at 50% 50%);
    background: ${colors.secondary.light};
    z-index: 1;
    left: 7%;
    top: -25%;
    box-shadow: 0 2.5rem 2.5rem rgba(0, 0, 0, 0.15);
  }
  &::after {
    content: "";
    position: absolute;
    top: 15%;
    left: 9%;
    padding: 4%;
    background-color: ${colors.secondary.dark};
    clip-path: circle(50% at 50% 50%);
    z-index: 2;
    ${mq.lg} {
      top: 18%;
      left: 5%;
    }
  }
`;

const Logo = styled(FeaturedMedia)`
  clip-path: ellipse(100% 100% at right 88%);
  z-index: 4;
`;
