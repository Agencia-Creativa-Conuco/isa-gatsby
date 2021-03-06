import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";
import { useStaticQuery, graphql } from "gatsby";
import { container, mq } from "../../../components/layout/new/";

const AdmisionesCover = () => {
  //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: ["admisiones"] } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  // Convierte arreglo de imágenes en objeto cuya llave es el nómbre del archivo
  // Esto para facilitar la búsqueda de la imagenes en los componentes hijos.
  const images = allFile.nodes.reduce((obj, item) => {
    return {
      ...obj,
      [item.name]: item,
    };
  }, {});

  const title = "Estudia con nosotros",
    copy =
      "Sigue estos pasos y estudia con nosotros, aplica para vivir una experiencia educativa de calidad que marcará un antes y un después en tu carrera profesional. ¿Estás listo?",
    cta = {
      url: "#form",
      title: "Aplicar",
    };
  return (
    <Section spaceNone fluid>
      <DivLogo decoBg={colors.secondary.light}>
        <DecoLogo decoBg={colors.secondary.light}>
          <Logo
            media={images.cover}
            alt="Admisiones Universidad ISA"
            size="100%"
            sizeXL="90%"
            bgColor
            position="35% 50%"
            loading="eager"
          />
        </DecoLogo>
      </DivLogo>
      <Content as="div" decoBg={colors.secondary.light}>
        <SectionTitle>{title}</SectionTitle>
        <Copy>{copy}</Copy>
        <StyledCTA to={cta.url} paddingX="7rem">
          {cta.title}
        </StyledCTA>
      </Content>
    </Section>
  );
};

export default AdmisionesCover;

const Section = styled.section`
  ${container}
  padding: 0;

  display: grid;
  grid-template-columns: 100%;

  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`;

const Content = styled.div`
  align-self: center;
  position: relative;
  max-width: 58rem;
  padding: 7% 1.5rem;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;

  ${mq.md} {
    &:after {
      content: "";
      position: absolute;
      top: 0%;
      right: 0%;
      transform: translate(90%, -40%);
      background-color: ${(props) => props.decoBg};
      padding: 5%;
      opacity: 0.7;
      z-index: -1;
    }
  }
`;

const SectionTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 3rem;
  text-align: center;

  ${mq.md} {
    text-align: left;
  }
`;

const Copy = styled.p``;

const StyledCTA = styled(Cta)`
  ${mq.md} {
    margin-top: 3rem;
  }
`;

const DivLogo = styled.div`
  position: relative;
  &::before {
    content: "";
    background-color: ${(props) => props.decoBg};
    position: absolute;
    padding: 15%;
    bottom: 0;
    right: 0;
    transform: translate(2rem, 0);
    opacity: 0.3;
  }

  &::after {
    content: "";
    background-color: ${(props) => props.decoBg};
    position: absolute;
    padding: 20%;
    bottom: 0;
    right: 0;
    transform: translate(2rem, 0rem);
    opacity: 0.2;
  }
`;

const DecoLogo = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    padding: 5%;
    right: 13%;
    top: 27%;
    background-color: ${(props) => props.decoBg};
    opacity: 0.7;
  }
  &&:after {
    content: "";
    position: absolute;
    padding: 1.7%;
    right: 6%;
    top: 22%;
    background-color: ${(props) => props.decoBg};
    opacity: 0.7;
  }
`;

const Logo = styled(FeaturedMedia)`
  clip-path: ellipse(97% 100% at left 88%);
  z-index: 5;
`;
