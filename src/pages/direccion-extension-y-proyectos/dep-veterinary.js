import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Container,
  Section,
  Row,
  Col,
  mq,
} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from "../../components/styles/colors";
import useFiles from "../../hooks/useFiles";

const DEPVeterinary = ({ page }) => {

  const images = useFiles();

  const 
    title = "Clínica Veterinaria",
    copy = "La Clínica Veterinaria está preparada para ofrecerle a nuestros clientes los mejores servicios en cuanto a la salud de sus animales, tanto en el ámbito preventivo como curativo y en el aspecto docente ofrece a los estudiantes la oportunidad de poder conocer, diagnosticar, tratar y sobre todo prevenir las principales patologías que afectan a nuestros animales de compañía.",
    list = [
      {
        title: "Servicios",
        items: [
          { content: "Consulta"},
          { content: "cirugía"},
          { content: "Vacunaciones"}
        ]
      },
      {
        title: "Diagnósticos",
        items: [
          { content: "Parasitología"},
          { content: "Rayos X"},
          { content: "Ecografía"},
          { content: "Biopsia"},
          { content: "Necropsia"}
        ]
      }
    ],
    image = images["direccion-extension-y-proyectos"].clinica_veterinaria;

  return (
    <Section>
      <Container>
        <WrapperRow>
          <Row>
            <SpecialCol
              size={12}
              sizeMD={5}
              noGutters
              DecoBg={colors.blue.base}
              DecoBgA={colors.blue.dark}
              orderMD={2}
            >
              <Media media={image} size="90%" />
            </SpecialCol>
            <Col size={12} sizeMD={7} noGutters>
              <DivTitle color={colors.blue.dark} bg={colors.blue.dark}>
                <Title> {title} </Title>
                <Copy> {copy} </Copy>
                <Row>
                  {list.map((item, index) => {
                    return (
                      <Col key={index} size={12} sizeMD={6} css={stylesCol}>
                        <ItemTitle color={colors.blue.base}>
                          {" "}
                          {item.title}{" "}
                        </ItemTitle>
                        <Row>
                          {item.items.map((item, index) => {
                            return (
                              <Col key={index} size={12}>
                                <ServiceCopy color={colors.gray.base}>
                                  {" "}
                                  {item.content}{" "}
                                </ServiceCopy>
                              </Col>
                            );
                          })}
                        </Row>
                      </Col>
                    );
                  })}
                </Row>
              </DivTitle>
            </Col>
          </Row>
        </WrapperRow>
      </Container>
    </Section>
  );
};

export default DEPVeterinary;

const WrapperRow = styled.div`
  box-shadow: silver 0 0 10px;
  border-radius: 20px;
  margin-top: 15rem;
`;

const DivTitle = styled.div`
  color: ${(props) => props.color};
  padding: 10%;
  padding-bottom: 10%;

  ${mq.lg} {
    padding: 5rem 7rem 3rem 10rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 3rem;
`;

const Copy = styled.p``;

const stylesCol = css`
  margin-top: 2rem;
  margin-bottom: 5rem;
`;
const ItemTitle = styled.h3`
  ${({ color }) => css`
    color: ${color};
  `}
`;

const ServiceCopy = styled.div`
  color: ${(props) => props.color};
`;

const Media = styled(FeaturedMedia)`
  top: -10%;
  height: 110%;
`;

const SpecialCol = styled(Col)`
  background: ${(props) => props.DecoBg};
  border-radius: 0px 20px 20px 0px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    padding: 10%;
    right: 10%;
    top: -7%;
    background: ${(props) => props.DecoBgA};
    clip-path: circle(50% at 50% 50%);
    z-index: 1;
    ${mq.lg} {
      top: -13%;
    }
  }
`;