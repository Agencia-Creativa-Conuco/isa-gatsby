import React from "react";
import styled from '@emotion/styled';
import ProjectsCover from "./project-cover";
import useInvestigaciones from "../../hooks/useInvestigaciones";
import useInvestigadores from "../../hooks/useInvestigadores";
import Related from "../../components/related";
import TeamSlider from "../../components/team-slider";

import ProjectsCarrousel from "./project-carrousel";
import ProjectsResume from "./project-resume";


const Project  = ({ project })=>{

    const {
        researchers
    } = project;

    const projects = useInvestigaciones();

    const persons = useInvestigadores().filter( person => researchers.map( researcher => researcher.id ).includes(person.id) );

    const relatedProjects = projects.filter( (item, index) => item.id !== project.id).slice(0,3);

    return(  
        <Article key={project.id}>
            <ProjectsCover {...{ project }}/>
            <ProjectsCarrousel {...{ project }}/>
            <TeamSlider {...{persons}}/>
            <ProjectsResume {...{ project }}/>
            <Related items={relatedProjects} />
        </Article>
    )
}

export default Project;

const Article = styled.article``;
