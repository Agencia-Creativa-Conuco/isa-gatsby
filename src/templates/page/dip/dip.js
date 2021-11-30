import React from "react";
import styled from "@emotion/styled";
import useInvestigaciones from "../../../hooks/useInvestigaciones";
import useDepartamentos from "../../../hooks/useDepartamentos";
import useFacultades from "../../../hooks/useFacultades";
import useLineasInvestigacion from "../../../hooks/useLineasInvestigacion";
import useInvestigadores from "../../../hooks/useInvestigadores";
import DIPCover from "./dip-cover";
import DIPProcess from "./dip-process";
// import DIPTeam from "../../../components/team-slider";
import DIPGeneral from "./dip-general";
import DIPPhilosophy from "./dip-philosophy";
import Layout from "../../../components/layout";
import DIPTeam from "./dip-team";
const ResearchPage = (props) => {

  //Obtiene los datos de las facultades.
  const facultades = useFacultades();

  //Obtiene los datos de los departamentos que tienen líneas de investigación relacionadas
  const departamentos = useDepartamentos().filter(
    (departamento) => departamento.lineasInvestigacion.length
  );

  //Obtiene los datos de las líneas de investigación
  const lineasInvestigacion = useLineasInvestigacion();

  //Obtiene los datos de los Proyectos
  const investigaciones = useInvestigaciones();

  //Obtiene los datos de las Persons
  const investigadores = useInvestigadores().filter( item => item.esEquipo );


  return (
    <Layout {...props}>
      <Container>
        <DIPCover />
        <DIPPhilosophy />
        <DIPTeam {...{ investigadores}} />
        <DIPGeneral
          {...{ investigaciones, lineasInvestigacion, facultades, departamentos }}
        />
        <DIPProcess {...{ investigaciones }} />
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
