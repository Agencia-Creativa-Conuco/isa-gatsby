import React from "react";
import styled from "@emotion/styled";
import CarreraCover from "./carrera-cover";
import CarreraPerfil from "./carrera-perfil";
import CarreraCompetencias from "./carrera-competencies";
import CarreraPensum from "./carrera-pensum";
import CarreraForm from './carrera-form';
import useFacultades from "../../hooks/useFacultades";

const CarreraSingle = ({ carrera })=>{

    const [facultad] = useFacultades().filter( facultad => facultad.id === carrera.facultad.id);

    return (
        <Article>
            <CarreraCover {...{carrera, facultad}}/>
            <CarreraPerfil {...{carrera, facultad}}/>
            <CarreraCompetencias {...{carrera, facultad}}/>
            <CarreraPensum {...{carrera, facultad}}/>
            <CarreraForm {...{carrera, facultad}}/> 
        </Article>
    );
}

export default CarreraSingle;

const Article = styled.article``;

