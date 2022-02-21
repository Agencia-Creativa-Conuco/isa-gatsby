import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import container, { gap } from "../../components/layout/new/container";
import colors from "../../components/styles/colors";
import useFiles from "../../hooks/useFiles";
import FeaturedMedia from "../../components/featured-media";
import mq from "../../components/layout/new/mq";

const EgresadosCover = (props) => {
  const images = useFiles();

  const data = {
    titulo: "Egresados",
    copy: "Mantiene una comunicación permanente con los egresados facilitando su actualización profesional y el fortalecimiento de su vínculo con la Universidad.",
    imagenPortada: images.egresados.cover,
  };


  return (
      <Cover spaceNone fluid bgDeco={colors.primary.dark}>
        {/* <Deco/> */}
        <Media>
          <CoverImage
            media={data.imagenPortada}
            alt={data.titulo}
            bgColor
            size="100%"
            sizeXL="80%"
            position="30% 0%"
            loading="eager"
            height="50%"
          />
        </Media>
        <Content bg={colors.blue.dark}>
          <Title>{data.titulo}</Title>
          <Copy>{data.copy}</Copy>
        </Content>
      </Cover>

  );
};

export default EgresadosCover;

const Cover = styled.section`
  ${container}
  display: grid;
  justify-content: end;
  grid-template-columns: 17% 1fr 1fr;
  padding: 0;
  grid-template-areas:
    "col col_1 col_1"
    "col_2  col_2  col_2";
  ${mq.md} {
    align-items: center;
    grid-template-columns: 50% 1fr;
    grid-template-areas: "col_2 col_1";
  }
`;

const Content = styled.div`
  padding: 4rem ${gap};
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
  ${({ bgColorAfter = " #001F56", bgColorBefore = "#CCEDFA" }) => css`
    position: relative;
    grid-area: col_1;

    &:before {
      content: "";
      position: absolute;
      left: 1rem;
      bottom: 0;
      background-color: ${bgColorAfter};
      width: 17%;
      padding-bottom: 17%;
      z-index: 1;
    }
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translate(-88%, 0);
      background-color: ${bgColorBefore};
      width: 17%;
      padding-bottom: 17%;
      z-index: 1;
      clip-path: ellipse(100% 100% at 100% 100%);
    }
  `}
`;

const CoverImage = styled(FeaturedMedia)`
  z-index: 2;
  clip-path: ellipse(100% 100% at right);
`;

const Deco = styled.div`
  ${({ bgColorAfter = " #001F56", bgColorBefore = "#CCEDFA" }) => css`
    position: relative;

    &:before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: ${bgColorAfter};
      width: 8%;
      padding-bottom: 8%;
      z-index: 2;
      transform: translate(0, -100%);

    }
  `}
`;
