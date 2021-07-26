import React from "react";
import styled from "@emotion/styled";
import SchoolCover from "./school-cover";
import SchoolCareers from "./school-careers";
// import Contact from "../../../contact";
import useFaculty from "../../hooks/useFaculties";

const School= ({ faculty: school })=>{

    const {
        parent,
    } = school;

    const [ faculty ] = useFaculty().filter( faculty => faculty.id == parent);

    const facultyColor = faculty.color;

    return (
        <Article >
            <SchoolCover {...{faculty, facultyColor}} />
            <SchoolCareers {...{faculty, facultyColor}} />
            {/* <Contact color={faculty_color || colors.primary.dark} bgColor={colors.gray.light} /> */}
        </Article>
    );
}

export default School;

const Article = styled.article``;
