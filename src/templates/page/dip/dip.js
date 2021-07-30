import React from "react";
import styled from "@emotion/styled";
import ResearchCover from "./dip-cover";
import ResearchProcess from "./dip-process";
import ResearchNews from "./dip-news";
import ResearchTeam from "./dip-team";
import ResearchGeneral from "./dip-general";

const ResearchPage = ({ state }) => {

  // Load the post, but only if the data is ready.
    return (
        <Container>
            {/* <ResearchCover />
            <ResearchGeneral />
            <ResearchProcess />
            <ResearchTeam />
            <ResearchNews /> */}
        </Container>
    );
};

export default ResearchPage;

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;