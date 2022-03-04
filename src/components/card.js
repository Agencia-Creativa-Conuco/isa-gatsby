import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "./featured-media";
import Cta from "./cta";
import { container, mq } from "./layout/new";

const CardInfo = ({ item = {} }) => {
  const { nombre, imagenPortada, descripcion, archivo } = item;

  return (
    <Wrapper value={imagenPortada ? "50% auto" : "100%"}>
      <Content>
        <Title>{nombre}</Title>
        <Copy>{descripcion}</Copy>
        <Cta to={archivo} download>
          Descargar
        </Cta>
      </Content>
      {imagenPortada ? (
        <Media>
          <FeaturedMedia media={imagenPortada} bgColor="rgba( 0 0 0 / 10%)" />
        </Media>
      ) : null}
    </Wrapper>
  );
};

export default CardInfo;

const Wrapper = styled.div`
  ${container};
  display: grid;

  grid-template-columns: 100%;
  div:first-of-type {
    order: 2;
  }
  ${mq.lg} {
    grid-template-columns: ${(props) => props.value};
    div:last-of-type {
      order: 2;
    }
  }
`;

const Content = styled.div`
padding:0 1.5rem ;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
`;

const Copy = styled.p`
  margin: 0 auto;
  margin-bottom: 4rem;
`;

const Media = styled.div`
  width: 100%;
  align-self: center;
  margin: 2rem 0;
  height: fit-content;
  max-width: 30rem;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0 0 0 / 0.5);
`;
