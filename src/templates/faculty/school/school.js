import React from "react";
import { styled, css, connect } from "frontity";
import SchoolCover from "./school-cover";
import SchoolCareers from "./school-careers";
import Contact from "../../../contact";

const School= ({ state })=>{

    const data = state.source.get(state.router.link);

    const type = state.source[data.type][data.id];

    const {
        main_faculty
    } = type;

    const {
        faculty_color
    } = main_faculty.meta_box;

    const {
        colors
    } = state.theme;

    return (
        <Article key={data.id}>
            <SchoolCover />
            <SchoolCareers />
            <Contact color={faculty_color || colors.primary.dark} bgColor={colors.gray.light} />
        </Article>
    );
}

export default connect( School );

const Article = styled.article``;
