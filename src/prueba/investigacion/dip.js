import React from "react";
import styled from "@emotion/styled";
import DIPCover from "./dip-cover";
import DIPProcess from "./dip-process";
import useInvestigaciones from "../../hooks/useInvestigaciones";
import useDepartamentos from "../../hooks/useDepartamentos";
import useFacultades from "../../hooks/useFacultades";
import useLineasInvestigacion from "../../hooks/useLineasInvestigacion";
import useInvestigadores from "../../hooks/useInvestigadores";
import DIPTeam from "../../components/team-slider";
import DIPGeneral from "./dip-general";
import DIPPhilosophy from "./dip-philosophy";
import Layout from "../../components/layout";

const ResearchPage = (props) => {

  //Obtiene los datos de las facultades.
  const faculties = useFacultades();

  //Obtiene los datos de los departamentos que tienen líneas de investigación relacionadas
  const departaments = useDepartamentos().filter(
    (departament) => departament.projectLines.length
  );

  //Obtiene los datos de las líneas de investigación
  const projectLines = useLineasInvestigacion();

  //Obtiene los datos de los Proyectos
  const projects = useInvestigaciones();

  //Obtiene los datos de las Persons
  const persons = useInvestigadores();

  return (
    <Layout {...props}>
      <Container>
        <DIPCover />
        <DIPPhilosophy />
        <DIPTeam {...{ persons }} />
        <DIPGeneral
          {...{ projects, projectLines, faculties, departaments }}
        />
        <DIPProcess {...{ projects }} />
      </Container>
    </Layout>
  );
};

export default ResearchPage;

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`;
