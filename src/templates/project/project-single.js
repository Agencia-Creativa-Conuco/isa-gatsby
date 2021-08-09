import React from "react";
import styled from '@emotion/styled';
import ProjectsCover from "./project-cover";
import useProjects from "../../hooks/useProjects";
import usePersons from "../../hooks/usePersons";
import Related from "../../components/related";
import TeamSlider from "../../components/team-slider";

import ProjectsCarrousel from "./project-carrousel";
import ProjectsResume from "./project-resume";


const Project  = ({ project })=>{

    const {
        researchers
    } = project;

    const projects = useProjects();

    const persons = usePersons().filter( person => researchers.map( researcher => researcher.id ).includes(person.id) );

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
