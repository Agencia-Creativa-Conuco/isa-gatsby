import React from "react";
import { connect, styled, css } from "frontity";
import {Section} from "../../layout/index";
import AdmissionCover from "./admission-cover";
import Calendar from "../../calendar";
import AdmissionForm from "./admission-form";
import ResourceList from "../../resourceslist";
import AdmissionInfo from "./admission-info";

const AdmissionPage = ({ state }) => {

  // Get information about the current URL.
    const data = state.source.get(state.router.link);

    const {
        colors
    } = state.theme;

    // Load the post, but only if the data is ready.
    return data.isReady? (
        <Container>
            <AdmissionCover />
            <CalendarSection bgColor={colors.gray.light} spaceNone>
                <Calendar/>
            </CalendarSection>
            <AdmissionInfo />
            <AdmissionForm />
            <ResourceList />
        </Container>
    ) : null;
};

export default connect(AdmissionPage);

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;

const CalendarSection = styled(Section)`
    ${({bgColor})=>css`
        background-color: ${bgColor};
        overflow: hidden;
    `}
`;