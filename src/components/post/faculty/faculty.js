import React from "react";
import { styled, css, connect } from "frontity";
import FacultyCover from "./faculty-cover";
import FacultyPerfil from "./faculty-perfil";
import FcaultyAreasAcademic from "./faculty-areas";
import School from "./school/index";
import Contact from "../../contact";


const Faculty = ({ state, actions, libraries })=>{

    const data = state.source.get(state.router.link);
    const faculty = state.source[data.type][data.id];

    const {
        meta_box
    } = faculty;

    const {
        faculty_color
    } = meta_box;

    const {
        colors
    } = state.theme;

    return faculty.parent == 0 ?(
        
        <Article key={data.id}>
            <FacultyCover />
            <FacultyPerfil />
            <FcaultyAreasAcademic />
            <Contact color={faculty_color || colors.primary.dark }/>
        </Article>
    ): 
        <School/>
}

export default connect( Faculty );

const Article = styled.article``;
