import React from "react";
import styled from "@emotion/styled";
import Cover from "./carreer-cover";
import Perfil from "./carreer-perfil";
import Competencies from "./carreer-competencies";
import Pensum from "./carreer-pensum";
import CareerForm from './career-form';
import ResourceList from '../../components/resourceslist';
import useFaculties from "../../hooks/useFaculties";
import Contact from "../../components/contact";
import colors from "../../components/styles/colors";

const Career = ({ career })=>{

    const [faculty] = useFaculties().filter( faculty => faculty.id === career.faculty.id);

    return (
        <Article>
            <Cover {...{career, faculty}}/>
            <Perfil {...{career, faculty}}/>
            <Competencies {...{career, faculty}}/>
            <Pensum {...{career, faculty}}/>
            <CareerForm {...{career, faculty}}/> 
            <ResourceList 
                items={ career.resources } 
                exclude={['pensum']} 
                titleColor={faculty.color} 
                resourceColor={faculty.color}
            />
            <Contact data={career.contact} color={faculty.color} bgColor={colors.gray.light} />
        </Article>
    );
}

export default Career;

const Article = styled.article``;

