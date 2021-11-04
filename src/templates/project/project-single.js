import React from "react";
import styled from '@emotion/styled';
import ProjectsCover from "./project-cover";
import useInvestigaciones from "../../hooks/useInvestigaciones";
import useInvestigadores from "../../hooks/useInvestigadores";
import Related from "../../components/related";
import TeamSlider from "../../components/team-slider";

import ProjectsCarrousel from "./project-carrousel";
import ProjectsResume from "./project-resume";


const Project  = ({ investigacion })=>{

    const {
        investigadores
    } = investigacion;

    const investigaciones = useInvestigaciones();

    const listaInvestigadores = useInvestigadores().filter( investigador => investigadores.map( researcher => researcher.id ).includes(investigador.id) );

    const relatedProjects = investigaciones.filter( (item, index) => item.id !== investigacion.id).slice(0,3);

    return(  
        <Article key={investigacion.id}>
            <ProjectsCover {...{ investigacion }}/>
            <ProjectsCarrousel {...{ investigacion }}/>
            <TeamSlider investigadores={listaInvestigadores} />
            <ProjectsResume {...{ investigacion }}/>
            <Related items={relatedProjects} />
        </Article>
    )
}

export default Project;

const Article = styled.article``;
