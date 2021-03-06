import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";
import { useStaticQuery, graphql } from "gatsby";
import { container, mq } from "../../../components/layout/new/";

const NosotrosCover = () => {
  //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: ["nosotros"] } }) {
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

  const title = "UNIVERSIDAD ISA";
  const copy =
    "La Universidad ISA propicia en sus aulas el desarrollo de líderes visionarios, guiados por los valores de honestidad, responsabilidad, respeto, compromiso social y calidad.";
  const cta = {
    title: "Estudia con nosotros",
    url: "/admisiones",
    target: null,
  };

  return (
    <Container fluid spaceNone css={sectionStyles}>
      <Content>
        <SectionTitle> {title} </SectionTitle>
        <Copy>{copy} </Copy>

        {cta.url && cta.title ? (
          <Cta to={cta.url} target={cta.target}>
            {cta.title}
          </Cta>
        ) : null}
      </Content>
      <Media>
        <Logo
          media={images.cover}
          alt="Sobre Universidad ISA"
          size="100%"
          sizeXL="90%"
          bgColor
          loading="eager"
        />
        <DivCube />
      </Media>
    </Container>
  );
};

export default NosotrosCover;

const sectionStyles = css`
  overflow: hidden;
`;
const Container = styled.section`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;

                        div:first-of-type{
      order:2
    }
  ${mq.md} {
    grid-template-columns: 50% 50%;

    div:last-of-type{
      order:2
    }
  }
`;

const Content = styled.div`
  margin: 3rem auto;
  padding: 0 1.5rem;
  max-width: 57rem;
  position: relative;
  align-self: center;
  &::before {
    content: "";
    position: absolute;
    width: 25%;
    padding-bottom: 25%;
    left: 0;
    bottom: 0;
    background-color: ${colors.blue.base};
    opacity: 20%;
    transform: translate(-50%, 50%);
    z-index: -1;
  }
`;

const SectionTitle = styled.h1`
  margin-bottom: 2rem;
`;

const Copy = styled.p`
  margin-bottom: 3rem;
`;

const Media = styled.div`
  position: relative;
  margin-left: 10%;
  ${mq.md}{
    margin: 0;
  }
  &::before {
    content: "";
    position: absolute;
    width: 10%;
    padding-bottom: 10%;
    background: ${colors.blue.base};
    z-index: 10;
    left: 10%;
    top: 10%;
    box-shadow: 0 2.5rem 2.5rem rgba(0, 0, 0, 0.15);
  }
`;

const Logo = styled(FeaturedMedia)`
  clip-path: ellipse(100% 100% at right 73%);
  z-index: 4;
`;

const DivCube = styled.div`
    position: absolute;
    left: 0;
    bottom: 12%;
    width: 40%;
    padding-bottom: 15%;
    background: ${colors.primary.base};
    opacity: 80%;
    transform: translate(-75%, 0);
    z-index: 2;
    &::before {
      content: "";
      position: absolute;
      width: 35%;
      padding-bottom: 70%;
      top: 0;
      left: 0;
      background: ${colors.primary.base};
      opacity: 80%;
      z-index: 3;
    }
    &::after {
      content: "";
      position: absolute;
      left: 35%;
      top: 0;
      width: 65%;
      padding-bottom: 100%;
      background: ${colors.primary.light};
      opacity: 70%;
      transform: translate(0, -30%);
      z-index: 1;
    }
`;
