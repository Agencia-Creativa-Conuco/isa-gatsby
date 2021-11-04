import React from "react";
import styled from "@emotion/styled";
import Cover from "./carrera-cover";
import Perfil from "./carrera-perfil";
import Competencies from "./carrera-competencies";
import Pensum from "./carrera-pensum";
import CareerForm from './carrera-form';
import ResourceList from '../../components/resourceslist';
import useFacultades from "../../hooks/useFacultades";
import Contact from "../../components/contact";
import colors from "../../components/styles/colors";

const Career = ({ carrera })=>{

    const [facultad] = useFacultades().filter( facultad => facultad.id === carrera.facultad.id);

    return (
        <Article>
            <Cover {...{carrera, facultad}}/>
            <Perfil {...{carrera, facultad}}/>
            <Competencies {...{carrera, facultad}}/>
            <Pensum {...{carrera, facultad}}/>
            <CareerForm {...{carrera, facultad}}/> 
            <ResourceList 
                items={ carrera.resources } 
                exclude={['pensum']} 
                titleColor={facultad.color} 
                resourceColor={facultad.color}
            />
            <Contact data={carrera.contact} color={facultad.color} bgColor={colors.gray.light} />
        </Article>
    );
}

export default Career;

const Article = styled.article``;

