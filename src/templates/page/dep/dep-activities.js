import React from "react";
import styled from "@emotion/styled";
import colors from "../../../components/styles/colors";
import { container, mq } from "../../../components/layout/new";

const DEPActivities = () => {
  const title = "Actividades Que Realiza",
    content = `
            <p>La Universidad ISA, desde sus inicios, ha enfocado sus esfuerzos en realizar labores extensionistas y comunitarias para apoyar a la sociedad en su conjunto, especialmente a aquellos sectores más susceptibles. Dichas actividades son realizadas a través de la Dirección de Extensión y Proyectos, de los departamentos académicos y de programas y proyectos específicos.</p>
            <p>Entre las actividades de extensión relacionadas con enriquecimiento de los conocimientos de los involucrados (profesores, estudiantes, personal administrativo, egresados, entre otros) sobresalen aquellas relacionadas con el deporte, la cultura y el fomento de los valores. ISA, además se ha posicionado por su trayectoria en la ejecución de iniciativas y actividades de extensión que responden a la búsqueda de soluciones y de problemáticas que afectan la sociedad y los distintos sectores del país.</p>
        `;

  return (
    <Section spaceNone  id="section_1">
      <Container>
        <DivTitle>
          <SectionTitle>{title}</SectionTitle>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Content>
        </DivTitle>
      </Container>
    </Section>
  );
};

export default DEPActivities;

const Section = styled.section`
  background: ${colors.gray.light};
`;

const Container = styled.div`
  ${container}
  padding-top: 1.5em;
  padding-bottom: 6em;
  display: grid;
  grid-template-columns: 100%;

`;

const DivTitle = styled.div`
  align-self: center;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
`;

const Content = styled.div``;
