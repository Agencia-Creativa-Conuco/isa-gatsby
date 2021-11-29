import React from "react";
import styled from "@emotion/styled";
import Cta from "../../../components/cta";
import {
  Container,
  Section,
  Row,
  Col,
  mq,
} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import useFiles from "../../../hooks/useFiles";

const DEPPymes = () => {

  const images = useFiles();
  const image = images["direccion-extension-y-proyectos"].centro_mipymes;

  const 
    title = "Centro MIPYMES", 
    copy = "El Centro MIPYMES (Centro de Servicios de Apoyo Integral de las micro, pequeñas y medianas empresas) es una iniciativa por parte del Ministerio de Industria y Comercio a través del Viceministerio de Fomento a las  MIPYMES en alianza con la Universidad ISA, el cual tiene como objetivo principal brindar los servicios y las consultorías necesarias a las micro, pequeñas y medianas empresas, de manera gratuita, para fortalecer su capacidad productiva, competitividad y eficiencia.", 
    cta ={
      url: "/centro-mipymes",
      title: "Conoce más",
      target: null
    };
  
  return (
    <Section spaceBottomNone>
      <WrapperRow bg={colors.blue.base} decoBg={colors.blue.dark}>
        <Container>
          <Row>
            <Col size={12} sizeMD={5} noGutters>
              <Media decoBg={colors.blue.dark}>
                <FeaturedMedia media={image} size="100%" mxAuto />
              </Media>
            </Col>
            <Col size={12} sizeMD={6} mxAuto>
              <Content>
                <SectionTitle>{title}</SectionTitle>
                <DivTitle color={colors.white} decoBg={colors.blue.dark}>
                  <Copy>{copy}</Copy>
                </DivTitle>
                {cta ? (
                  <Cta to={cta.url} target={cta.target}>
                    {cta.title}
                  </Cta>
                ) : null}
              </Content>
            </Col>
          </Row>
        </Container>
      </WrapperRow>
    </Section>
  );
};

export default DEPPymes;

const WrapperRow = styled.div`
  background: ${(props) => props.bg};
  margin-top: 15rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 1.6%;
    padding-bottom: 17%;
    right: 0;
    top: 0;
    background: ${(props) => props.decoBg};
    opacity: 0.8;
  }
`;

const Content = styled.div`
  padding: 0 0 4rem 0;
`;

const DivTitle = styled.div`
  color: ${(props) => props.color};
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
    background: ${(props) => props.decoBg};
  }
`;
