import React from "react";
import styled from "@emotion/styled";
import DIPCover from "./dip-cover";
import DIPProcess from "./dip-process";
import useProjects from "../../../hooks/useProjects";
import useDepartaments from "../../../hooks/useDepartaments";
import useFaculties from "../../../hooks/useFaculties";
import useProjectLines from "../../../hooks/useProjectLines";
import usePersons from "../../../hooks/usePersons";
import usePosts from "../../../hooks/usePosts";
import DIPNews from "./dip-news";
import DIPTeam from "../../../components/team-slider";
import DIPGeneral from "./dip-general";

const ResearchPage = ({ ...page }) => {

    //Obtiene los datos de las facultades.
  const faculties = useFaculties();

  //Obtiene los datos de los departamentos que tienen líneas de investigación relacionadas
  const departaments = useDepartaments().filter(
    (departament) => departament.projectLines.length
  );

  //Obtiene los datos de las líneas de investigación
  const projectLines = useProjectLines();

  //Obtiene los datos de los Proyectos
  const projects = useProjects();

  //Obtiene los datos de las Persons
  const persons = usePersons();

  //Obtiene los datos de los Posts
  const posts = usePosts();


  return (
    <Container>
      <DIPCover {...page} />
      <DIPGeneral
        {...{ page, projects, projectLines, faculties, departaments }}
      />
      <DIPProcess {...{ page, projects }} />
      <DIPTeam {...{ persons }} />
      <DIPNews {...{ page, posts }} />
    </Container>
  );
};

export default ResearchPage;

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`;
