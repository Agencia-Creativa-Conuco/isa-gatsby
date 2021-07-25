import React from "react";
import styled from '@emotion/styled';
import ProjectsCover from "./project-cover";
import useProjects from "../../hooks/useProjects";
import Related from "../../components/related";

// import ProjectsCarrousel from "./project-carrousel";
import ProjectsResume from "./project-resume";
// import ProjectsRelated from './project-related'


const Project  = ({ project })=>{

    const projects = useProjects();

    const relatedProjects = projects.filter( (item, index) => item.id != project.id).slice(0,3);

    return(  
        <Article key={project.id}>
            <ProjectsCover {...{ project }}/>
            {/* <ProjectsCarrousel/> */}
            <ProjectsResume {...{ project }}/>
            <Related items={relatedProjects} />
        </Article>
    )
}

export default Project;

const Article = styled.article``;
