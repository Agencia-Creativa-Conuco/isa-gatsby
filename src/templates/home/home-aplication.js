import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import FeaturedMedia from "../../components/featured-media";
import colors from "../../components/styles/colors";
import Cta from "../../components/cta";
import useFiles from "../../hooks/useFiles";
import { container, mq } from "../../components/layout/new";

const HomeAplication = () => {
  const images = useFiles();
  const title = "Te invitamos a descubrir y vivir la experiencia ISA";
  const copy =
    "Estudia en uno de los  campus universitarios más  verdes y funcional del país, rodeado de un ecosistema diseñado para aprender haciendo, desarrollar al máximo tu potencial y vivir en comunidad. ¡Súmate a la Familia ISA!  ";

  return (
    <Section id="section_4" fluid>
      <Deco bgColor={colors.gray.light} />

      <Wrapper>
        <Media bgDeco={colors.primary.dark}>
          <Image
            media={images.home.application}
            size="75%"
            sizeLG="155%"
            position="50% 10%"
          />
        </Media>
        <Content bg={colors.white} decoBg={colors.blue.dark}>
          <Title>{title}</Title>
          <p>{copy}</p>
          <Cta
            to="/admisiones"
            aria-label="Click para abrir el..."
            shadowColor="black"
          >
            Estudia con nosotros
          </Cta>
        </Content>
      </Wrapper>
    </Section>
  );
};

export default HomeAplication;

const Section = styled.section`
  ${container}

  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background-color: ${colors.blue.light};
    z-index: 2;
    ${mq.lg} {
      width: 50%;
    }
  }
  &:after {
    content: "";
    background: ${colors.blue.dark};
    position: absolute;
    border-radius: 50%;
    width: 20%;
    padding-bottom: 20%;
    top: 0;
    left: 80%;
    transform: translate(-50%, 0);
    z-index: 1;
    ${mq.lg} {
      left: 50%;
    }
  }
`;

const Deco = styled.div`
  ${({ bgColor = "lightgray" }) => css`
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 50%;
    background-color: ${bgColor};
    z-index: 1;
  `}
`;

const Wrapper = styled.div`
  position: relative;
  ${container}
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr;

  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  position: relative;
  border-radius: 2rem;
  box-shadow: lightGray 0 0 10px;
  background-color: white;
  margin-bottom: 10%;
  padding: 2rem;
  ${mq.sm} {
    padding: 5rem;
  }
  ${mq.lg} {
    box-sizing: content-box;
    width: 100%;
    height: fit-content;
    margin: 25% 0;
    padding: 10%;
    padding-left: 25%;
    margin-left: -35%;
  }
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Media = styled.div`
  ${({ bgDeco = "lightblue" }) => css`
    position: relative;
    padding-top: 4rem;
    ${mq.md} {
      z-index: 2;
    }
    &::before {
      content: "";
      background: ${bgDeco};
      position: absolute;
      border-radius: 50%;
      padding: 8%;
      top: 0;
      left: 0;
      z-index: 3;
      transform: translate(4rem, 10rem);
    }
  `}
`;

const Image = styled(FeaturedMedia)``;
