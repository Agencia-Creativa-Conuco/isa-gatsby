import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import { useStaticQuery, graphql } from "gatsby";
import { container, mq } from "../../../components/layout/new/";

const OfferCover = () => {
  //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: ["oferta-academica"] } }) {
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

  const title = "Oferta Académica",
    copy =
      "La Universidad ha sabido responder a los cambios que la sociedad ha demandado, y en la actualidad ha diversificado su oferta curricular ofreciendo carreras que responden a las necesidades del país. En todas ellas introduciendo cambios en la estructura curricular para formar profesionales con las competencias requeridas para desarrollar su labor con profesionalidad, inspirados en los principios y valores que sustenta la Universidad.";

  return (
    <Section spaceNone fluid>
      <DivLogo>
        <Image
          media={images.cover}
          alt={title}
          size="100%"
          sizeMD="124%"
          sizeLG="100%"
          sizeXL="85%"
          position="90% 50%"
          bgColor
          loading="eager"
        />
      </DivLogo>
      <DivTitle>
        <SectionTitle> {title} </SectionTitle>
        <div dangerouslySetInnerHTML={{ __html: copy }} />
      </DivTitle>
    </Section>
  );
};

export default OfferCover;

const Section = styled.section`
  ${container}
  padding: 0;

  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    grid-template-columns: 55% 45%;
  }
`;

const DivLogo = styled.div`
  position: relative;

padding-right:1.5rem ;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    background-color: ${colors.blue.base};
    padding: 4%;
    clip-path: circle(50% at 50% 50%);
    right: 0;
    opacity: 0.8;
    transform: translate(-2rem, 7rem);
    z-index: -1;

    ${mq.md} {
      transform: translate(${8.2 * 100}%, 9rem);
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    background-color: ${colors.blue.dark};
    padding: 20%;
    clip-path: circle(50% at 50% 100%);
    right: -3%;
    z-index: 5;
    ${mq.md} {
      right: -12%;
      z-index: 0;
    }
  }
`;

const DivTitle = styled.div`
  max-width: 60rem;
  align-self: center;
  padding: 0 1.5rem;
  margin: 10% auto;
  ${mq.md} {
    margin: 10rem auto;
  }
`;

const SectionTitle = styled.h1`\
margin-top: 0;


`;

const Image = styled(FeaturedMedia)`
  clip-path: ellipse(88% 75% at left);
  z-index: 5;
  ${mq.md} {
    clip-path: ellipse(100% 100% at left);
  }
`;
