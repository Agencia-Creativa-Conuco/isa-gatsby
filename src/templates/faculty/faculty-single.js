import React from "react";
import styled from "@emotion/styled";
import FacultyCover from "./faculty-cover";
import FacultyPerfil from "./faculty-perfil";
import FacultyAreasAcademic from "./faculty-areas";
import Contact from "../../components/contact";

const Faculty = ({ faculty })=>{

    return (
        
        <Article>
            <FacultyCover {...{faculty}} />
            <FacultyPerfil {...{faculty}} />
            <FacultyAreasAcademic {...{faculty}} />
            <Contact data={faculty.contact} color={faculty.color} />
        </Article>
    )
}

export default Faculty;

const Article = styled.article``;
