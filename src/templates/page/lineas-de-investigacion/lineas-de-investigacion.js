import React from "react";
import styled from "@emotion/styled";
import Link from "../../../components/link";
import Layout from "../../../components/layout";
import useFacultades from "../../../hooks/useFacultades";
import useLineasInvestigacion from "../../../hooks/useLineasInvestigacion";
import useDepartamentos from "../../../hooks/useDepartamentos";
import colors from "../../../components/styles/colors";
import { container, mq } from "../../../components/layout/new";

const ProjectLines = (props) => {
  const lineasDeInvestigacion = useLineasInvestigacion();

  const departamentos = useDepartamentos().filter((departamento) =>
    lineasDeInvestigacion
      .map((line) => line.departamento.id)
      .includes(departamento.id)
  );

  const facultades = useFacultades().filter((facultad) =>
    departamentos
      .map((departamento) => departamento.facultad.id)
      .includes(facultad.id)
  );

  const metaData = {
    title: "Líneas de investigación",
    description: "Líneas de investigación",
  };

  return (
    <Layout {...props} {...metaData}>
      <Section>
        <Cover spaceNone>
          <Container>
            <Title>Líneas de investigación</Title>
          </Container>
        </Cover>
        <List thin>
          <Container>
            {facultades.map((facultad) => {
              return (
                <Section as="div" spaceTopNone>
                  <Faculty key={facultad.id}>{facultad.nombre}</Faculty>
                  {departamentos
                    .filter(
                      (departamento) => departamento.facultad.id === facultad.id
                    )
                    .map((departamento) => {
                      return (
                        <div>
                          <Departament>{departamento.nombre}</Departament>
                          <ContainerLine>
                            {lineasDeInvestigacion
                              .filter(
                                (line) =>
                                  line.departamento.id === departamento.id
                              )
                              .map((line) => {
                                return (
                                  <SLink to={line.uri} key={line.id}>
                                    <Line>{line.nombre}</Line>
                                  </SLink>
                                );
                              })}
                          </ContainerLine>
                        </div>
                      );
                    })}
                </Section>
              );
            })}
          </Container>
        </List>
      </Section>
    </Layout>
  );
};

export default ProjectLines;

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
const ContainerLine = styled.div`
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
  margin-bottom: 4rem;
  margin-top: 4rem;
  text-shadow: ${colors.shadow.base};
`;

const Faculty = styled.h2`
  text-align: center;
  font-weight: 300;
  padding: 0 0 1rem;

`;

const Departament = styled.h3`
  text-transform: uppercase;
`;

const Line = styled.h4`
  font-weight: normal;
  padding: 1.5rem;
  background-color: #fafafa;
  transition: all 0.25s ease-in-out;
  margin: 0.5rem 0;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
