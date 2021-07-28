import React from "react";
import { connect, styled } from "frontity";
import ResearchCover from "./dip-cover";
import ResearchProcess from "./dip-process";
import ResearchNews from "./dip-news";
import ResearchTeam from "./dip-team";
import ResearchGeneral from "./dip-general";

const ResearchPage = ({ state }) => {

  // Get information about the current URL.
    const data = state.source.get(state.router.link);

  // Load the post, but only if the data is ready.
    return data.isReady? (
        <Container>
            <ResearchCover />
            <ResearchGeneral />
            <ResearchProcess />
            <ResearchTeam />
            <ResearchNews />
        </Container>
    ) : null;
};

export default connect(ResearchPage);

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;