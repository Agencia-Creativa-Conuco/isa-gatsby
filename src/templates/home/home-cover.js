import React from "react";
import styled from "@emotion/styled";
import colors from "../../components/styles/colors";
import useFiles from "../../hooks/useFiles";
import FeaturedMedia from "../../components/featured-media";
import  {container,mq } from "../../components/layout/new/";

const HomeCover = (props) => {
  const images = useFiles();

  const items = {
    titulo: "¡Bienvenidos a la UNIVERSIDAD ISA!",
    copy: "La Universidad ISA propicia en sus aulas el desarrollo de líderes visionarios, guiados por los valores de honestidad, responsabilidad, respeto, compromiso social y calidad. Forma hombres y mujeres pragmáticos, disciplinados, con capacidad de emprender iniciativas empresariales, poseedores de una fuerte sensibilidad social y de espíritu de servicio.",
    imagenPortada: images.home.cover,
    cta: {
      url: "/admisiones",
      target: null,
      title: "Estudia con nosotros",
    },
  };

  return (
    <Cover spaceNone fluid bgDeco={colors.primary.dark}>
      <Media>
        <SlideImage
          media={items.imagenPortada}
          alt={items.titulo}
          bgColor
          size="100%"
          sizeXL="80%"
          position="30% 0%"
          loading="eager"
          height="50%"
        />
      </Media>
      <Content bg={colors.blue.dark}>
        <Title>{items.titulo}</Title>
        <Copy>{items.copy}</Copy>
      </Content>
    </Cover>
  );
};

export default HomeCover;

const Cover = styled.section`
  ${container}
  padding: 0;
  display: grid;
  justify-content: end;
  grid-template-columns: 17% 1fr 1fr;
  grid-template-areas:
    "col col_1 col_1"
    "col_2 col_2 col_2";
  ${mq.md} {
    align-items: center;
    grid-template-columns: 50% 1fr;
    grid-template-areas: "col_2 col_1";
  }
  &:after {
    content: "";
    background: ${colors.primary.dark};
    width: 8%;
    padding: 8%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 100%;
    transform: translate(-50%, 50%);
    z-index: -1;
  }
`;



const Content = styled.div`
  padding: 4rem 1.5rem;
  position: relative;
  z-index: 1;
  justify-self: center;
  grid-area: col_2;
  max-width: 54rem;

  ${mq.md} {
    order: 1;
    max-width: 36rem;
  }
  ${mq.lg} {
    order: 1;
    max-width: 48rem;
  }
  ${mq.lg} {
    order: 1;
    max-width: 57rem;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  ${mq.lg} {
  }
`;

const Copy = styled.div``;

const Media = styled.div`
    position: relative;
    grid-area: col_1;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translate(-125%, 0);
      background-color:#CCEDFA;
      width: 15%;
      padding-bottom: 15%;
      z-index: 1;
      clip-path: ellipse(100% 100% at 100% 100%);
    }
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translate(-25%, -100%);
      background-color:#001F56;
      width: 15%;
      padding-bottom: 15%;
      z-index: 1;
    }
`;

const SlideImage = styled(FeaturedMedia)`
  z-index: 2;
  clip-path: ellipse(100% 100% at right);
`;
