import React from "react";
import styled from "@emotion/styled";
import DIPCover from "./dip-cover";
import DIPProcess from "./dip-process";
import useProjects from "../../../hooks/useProjects";
import usePersons from "../../../hooks/usePersons";
import usePosts from "../../../hooks/usePosts";
import DIPNews from "./dip-news"
import DIPTeam from "./dip-team";
import DIPGeneral from "./dip-general"

const ResearchPage = ({ ...page }) => {

  //Obtiene los datos de las Persons
  const persons = usePersons();

 //Obtiene los datos de los Posts
 const posts = usePosts();

//Obtiene los datos de los Proyectos
const projects = useProjects();

    return (
        <Container>
            <DIPCover { ...page } />
            <DIPGeneral {...{ projects, page }} />
            <DIPProcess {...{page, projects}} />
            <DIPTeam { ...{persons} } />
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