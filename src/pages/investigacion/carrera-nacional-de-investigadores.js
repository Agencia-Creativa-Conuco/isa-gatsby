import React from "react";
import styled from "@emotion/styled";
import Layout from "../../components/layout";
import colors from "../../components/styles/colors";
import useInvestigadores from "../../hooks/useInvestigadores";
import { container, mq } from "../../components/layout/new";

const CarreraNacionalDeInvestigadores = (props) => {
  const investigadores = useInvestigadores().filter(
    (investigador) => investigador.esCarrera
  );

  const title = "Miembros De La Carrera Nacional De Investigadores UNISA";

  const metaData = {
    title: "Carrera nacional de investigadores",
    description:
      "Investigadores que apoyan a Universidad ISA en sus investigaciones y que pertenecen a la carrera nacional de investigadores",
  };

  return (
    <Layout {...props} {...metaData}>
      <Section as="article" spaceNone>
        <Cover bgColor={colors.primary.base} spaceNone>
          <Container>
            <Title>{title}</Title>
          </Container>
        </Cover>
        <Facilidades>
          <List thin>
            <Container>
              <STitle>Listado de miembros</STitle>

              <ContainerInveestigador>
                {investigadores.map((investigador, index) => {
                  const {
                    nombre,
                    puestoTrabajo,
                    tituloAcademico,
                    carreraNacionalInvestigacion,
                  } = investigador;

                  const { anoIngreso, area, areaInvestigacion, categoria } =
                    carreraNacionalInvestigacion;

                  return (
                    <Card key={index}>
                      <Name>{nombre}</Name>
                      <Line>
                        <Label>Formación académica:</Label>{" "}
                        <Value>{tituloAcademico}</Value>
                      </Line>
                      <Line>
                        <Label>Posición en UNISA:</Label>{" "}
                        <Value>{puestoTrabajo}</Value>
                      </Line>
                      <Line>
                        <Label>
                          Área de investigación / Departamento UNISA:
                        </Label>{" "}
                        <Value>{area}</Value>
                      </Line>
                      <Line>
                        <Label>Categoría: </Label> <Value>{categoria}</Value>
                      </Line>
                      <Line>
                        <Label>Año de Ingreso:</Label>{" "}
                        <Value>{anoIngreso}</Value>
                      </Line>
                      <Line>
                        <Label>Área de Investigación:</Label>{" "}
                        <Value>{areaInvestigacion}</Value>
                      </Line>
                    </Card>
                  );
                })}
              </ContainerInveestigador>
            </Container>
          </List>
        </Facilidades>
      </Section>
    </Layout>
  );
};

export default CarreraNacionalDeInvestigadores;

const Section = styled.article`
  margin-bottom: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.5rem;
  }
`;

const Cover = styled.section`
  overflow: hidden;
  background: ${colors.primary.base};

  padding-top: 5.6rem;
  margin-bottom: 5.6rem;
  ${mq.md} {
    padding-top: 9.6rem;
    margin-bottom: 9.5rem;
  }
`;

const Container = styled.div`
  ${container}
`;

const ContainerInveestigador = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2.8rem;

  ${mq.md} {
    grid-template-columns: 48% 48%;
  }
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
  height: fit-content;
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
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
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
