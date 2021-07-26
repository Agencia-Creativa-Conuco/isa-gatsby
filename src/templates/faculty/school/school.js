import React from "react";
import styled from "@emotion/styled";
// import SchoolCover from "./school-cover";
// import SchoolCareers from "./school-careers";
// import Contact from "../../../contact";

const School= ({ faculty })=>{

    return (
        <Article >
            {/* <SchoolCover /> */}
            {/* <SchoolCareers /> */}
            {/* <Contact color={faculty_color || colors.primary.dark} bgColor={colors.gray.light} /> */}
        </Article>
    );
}

export default School;

const Article = styled.article``;
