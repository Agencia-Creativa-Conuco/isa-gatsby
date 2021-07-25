import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Cover from "./carreer-cover";
import Perfil from "./carreer-perfil";
// import Competencies from "./carreer-competencies";
// import Pensum from "./carreer-pensum";
// import CareerForm from './career-form';
// import ResourceList from '../../components/resourceslist';
import colors from "../../components/styles/colors";

const Career = ({ career })=>{

    return (
        <Article>
            <Cover {...{career}}/>
            <Perfil {...{career}}/>
            {/* <Competencies {...{career, facultyColor}}/> */}
            {/* <Pensum {...{career, facultyColor}}/> */}
            {/* <CareerForm {...{career, facultyColor}}/>  */}
            {/* <ResourceList filter={['pensum']} titleColor={facultyColor} resourceColor={facultyColor}/> */}
        </Article>
    );
}

export default Career;

const Article = styled.article``;

