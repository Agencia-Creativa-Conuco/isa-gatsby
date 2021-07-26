import React from "react";
import styled from "@emotion/styled";
import FacultyCover from "./faculty-cover";
import FacultyPerfil from "./faculty-perfil";
import FacultyAreasAcademic from "./faculty-areas";
// import Contact from "../../contact";


const Faculty = ({ faculty })=>{

    return (
        
        <Article>
            <FacultyCover {...{faculty}} />
            <FacultyPerfil {...{faculty}} />
            <FacultyAreasAcademic {...{faculty}} />
            {/* <Contact color={faculty_color || colors.primary.dark }/> */}
        </Article>
    )
}

export default Faculty;

const Article = styled.article``;
