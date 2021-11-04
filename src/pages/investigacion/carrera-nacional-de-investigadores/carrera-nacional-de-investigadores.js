import React from "react";
import styled from "@emotion/styled";
import { Section, Container, Row, Col } from "../../../components/layout/index";
import Layout from "../../../components/layout";
import colors from "../../../components/styles/colors";
import useInvestigadores from "../../../hooks/useInvestigadores";

const CarreraNacionalDeInvestigadores = (props) => {

  const investigadores = useInvestigadores().filter( investigador => investigador.esMiembro);

  const title = "Miembros De La Carrera Nacional De Investigadores UNISA";

  return (
    <Layout {...props}>
      <Section as="article" spaceNone>
        <Cover bgColor={colors.primary.base} spaceNone>
          <Section as="div" spaceBottomNone>
            <Container>
              <Row>
                <Col>
                  <Title>{title}</Title>
                </Col>
              </Row>
            </Container>
          </Section>
        </Cover>
        <Facilidades>
          <List thin>
            <Container>
              <Row>
                <Col>
                  <STitle>Listado de miembros</STitle>
                </Col>
              </Row>
              <Row>
                {investigadores.map((investigador, index) => {

                  const {
                    title,
                    jobTitle,
                    degree,
                    carreraNacionalInvestigacion
                  } = investigador;

                  const {
                    anoIngreso,
                    area,
                    areaInvestigacion,
                    categoria,
                  } = carreraNacionalInvestigacion;

                  return (
                    <Col key={index} size={12} sizeMD={6}>
                      <Card>
                        <Name>{title}</Name>
                        <Line><Label>Formación académica:</Label> <Value>{degree}</Value></Line>
                        <Line><Label>Posición en UNISA:</Label> <Value>{jobTitle}</Value></Line>
                        <Line><Label>Área de investigación / Departamento UNISA:</Label> <Value>{area}</Value></Line>
                        <Line><Label>Categoría: </Label> <Value>{categoria}</Value></Line>
                        <Line><Label>Año de Ingreso:</Label> <Value>{anoIngreso}</Value></Line>
                        <Line><Label>Área de Investigación:</Label> <Value>{areaInvestigacion}</Value></Line>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </List>
        </Facilidades>
      </Section>
    </Layout>
  );
};

export default CarreraNacionalDeInvestigadores;

const Cover = styled(Section)`
  overflow: hidden;
`;

const List = styled(Section)``;

const Title = styled.h1`
  text-align: center;
  color: white;
  text-shadow: ${colors.shadow.base};
  margin-bottom: 4rem;
  margin-top: 4rem;
`;

const Facilidades = styled.div``;

const Card = styled.article`
  font-weight: normal;
  padding: 1.5rem;
  background-color: #fafafa;
  transition: all 0.25s ease-in-out;
  margin: 0.5rem 0;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const STitle = styled.h2``;

const Name = styled.h3`
  /* text-transform: uppercase; */
  margin: 0;
  margin-bottom: .5rem;
  padding-bottom: .5rem;
  border-bottom: 0.2rem solid #606060;
`;

const Line = styled.p`
  margin: 0;
`;

const Label = styled.span`
  font-weight: 300;
`;

const Value = styled.span`
  font-weight: 600;
`;