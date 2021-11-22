import React from "react";
import styled from "@emotion/styled";
import { Row, Col, Container } from "./layout/index";
import FeaturedMedia from "./featured-media";
import Cta from "./cta";

const CardInfo = ({ item = {} }) => {
  const {
    nombre,
    imagenPortada,
    descripcion,
    archivo,
  } = item;

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col order={2} orderLG={1}>
            <Content>
              <Title>{nombre}</Title>
              <Copy>{descripcion}</Copy>
              <Cta to={archivo} download>
                Descargar
              </Cta>
            </Content>
          </Col>
          {imagenPortada ? (
            <Col size={12} sizeLG={6} order={1} orderLG={2}>
              <Media>
                <FeaturedMedia media={imagenPortada} bgColor="rgba( 0 0 0 / 10%)" />
              </Media>
            </Col>
          ) : null}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default CardInfo;

const Wrapper = styled.div``;

const Content = styled.div`
    margin: 2rem 0;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
`;

const Copy = styled.p`
  margin: 0 auto;
  margin-bottom: 4rem;
`;

const Media = styled.div`
    margin: 2rem 0;
    max-width: 30rem;
    box-shadow: .2rem .2rem .2rem rgba(0 0 0 / .5);
`;
