import React from "react";
import styled from "@emotion/styled";
import FacultyCover from "./facultad-cover";
import FacultyPerfil from "./facultad-perfil";
import FacultyAreasAcademic from "./facultad-areas";

const Faculty = ({ facultad })=>{

    return (
        
        <Article>
            <FacultyCover {...{facultad}} />
            <FacultyPerfil {...{facultad}} />
            <FacultyAreasAcademic {...{facultad}} />
        </Article>
    )
}

export default Faculty;

const Article = styled.article``;
