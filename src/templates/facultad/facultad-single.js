import React from "react";
import styled from "@emotion/styled";
import FacultadCover from "./facultad-cover";
import FacultadPerfil from "./facultad-perfil";
import FacultadAreas from "./facultad-areas";

const FacultadSingle = ({ facultad })=>{

    return (
        
        <Article>
            <FacultadCover {...{facultad}} />
            <FacultadPerfil {...{facultad}} />
            <FacultadAreas {...{facultad}} />
        </Article>
    )
}

export default FacultadSingle;

const Article = styled.article``;
