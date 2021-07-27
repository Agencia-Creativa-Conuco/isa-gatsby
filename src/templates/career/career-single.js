import React from "react";
import styled from "@emotion/styled";
import Cover from "./carreer-cover";
import Perfil from "./carreer-perfil";
import Competencies from "./carreer-competencies";
import Pensum from "./carreer-pensum";
import CareerForm from './career-form';
import ResourceList from '../../components/resourceslist';

const Career = ({ career })=>{

    const {
        faculty
    } = career;

    return (
        <Article>
            <Cover {...{career}}/>
            <Perfil {...{career}}/>
            <Competencies {...{career}}/>
            <Pensum {...{career}}/>
            <CareerForm {...{career}}/> 
            <ResourceList 
                items={ career.resources } 
                exclude={['pensum']} 
                titleColor={faculty.color} 
                resourceColor={faculty.color}
            />
        </Article>
    );
}

export default Career;

const Article = styled.article``;

