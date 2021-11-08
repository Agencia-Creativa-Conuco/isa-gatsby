import React from "react";
import styled from "@emotion/styled";
import Cover from "./carrera-cover";
import Perfil from "./carrera-perfil";
import Competencies from "./carrera-competencies";
import Pensum from "./carrera-pensum";
import CareerForm from './carrera-form';
import useFacultades from "../../hooks/useFacultades";

const Career = ({ carrera })=>{

    const [facultad] = useFacultades().filter( facultad => facultad.id === carrera.facultad.id);

    return (
        <Article>
            <Cover {...{carrera, facultad}}/>
            <Perfil {...{carrera, facultad}}/>
            <Competencies {...{carrera, facultad}}/>
            <Pensum {...{carrera, facultad}}/>
            <CareerForm {...{carrera, facultad}}/> 
        </Article>
    );
}

export default Career;

const Article = styled.article``;

