import React from "react";
import { styled, css, connect } from "frontity";
import Cover from "./carreer-cover";
import Perfil from "./carreer-perfil";
import Competencies from "./carreer-competencies";
import Pensum from "./carreer-pensum";
import CareerForm from './career-form';
import ResourceList from '../../resourceslist';

const Career = ({ state, actions, libraries })=>{

    const data = state.source.get(state.router.link);
    
    const career = state.source[data.type][data.id];

    const {
        main_faculty,
    } = career;

    const {
        colors
    } = state.theme;

    const {
        faculty_color
    } = main_faculty.meta_box;

    const facultyColor = faculty_color || colors.primary.dark;

    return (
        <Article key={data.id}>
            <Cover {...{career, facultyColor}}/>
            <Perfil {...{career, facultyColor}}/>
            <Competencies {...{career, facultyColor}}/>
            <Pensum {...{career, facultyColor}}/>
            <CareerForm {...{career, facultyColor}}/> 
            <ResourceList filter={['pensum']} titleColor={facultyColor} resourceColor={facultyColor}/>
        </Article>
    );
}

export default connect(Career);

const Article = styled.article``;

