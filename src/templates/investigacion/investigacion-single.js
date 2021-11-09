import React from "react";
import styled from '@emotion/styled';
import InvestigacionCover from "./investigacion-cover";
import useInvestigaciones from "../../hooks/useInvestigaciones";
import useInvestigadores from "../../hooks/useInvestigadores";
import Related from "../../components/related";
import TeamSlider from "../../components/team-slider";

import InvestigacionCarrousel from "./investigacion-carrousel";
import InvestigacionResume from "./investigacion-resume";


const InvestigacionSingle  = ({ investigacion })=>{

    const {
        investigadores
    } = investigacion;

    const investigaciones = useInvestigaciones();

    const listaInvestigadores = useInvestigadores().filter( investigador => investigadores.map( researcher => researcher.id ).includes(investigador.id) );

    const relatedProjects = investigaciones.filter( (item, index) => item.id !== investigacion.id).slice(0,3);

    return(  
        <Article key={investigacion.id}>
            <InvestigacionCover {...{ investigacion }}/>
            <InvestigacionCarrousel {...{ investigacion }}/>
            <TeamSlider investigadores={listaInvestigadores} />
            <InvestigacionResume {...{ investigacion }}/>
            <Related items={relatedProjects} />
        </Article>
    )
}

export default InvestigacionSingle;

const Article = styled.article``;
