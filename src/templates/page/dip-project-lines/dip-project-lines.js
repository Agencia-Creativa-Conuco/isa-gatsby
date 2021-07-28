import React from "react";
import { connect, styled } from "frontity";
import Cover from "./dip-project-lines-cover";
import ProjectLines from "./dip-project-lines-list";

const DIPProjectLines = ({ state }) => {

  // Get information about the current URL.
    const data = state.source.get(state.router.link);

  // Load the post, but only if the data is ready.
    return data.isReady? (
        <Container>
            <Cover />
            <ProjectLines />
        </Container>
    ) : null;
};

export default connect(DIPProjectLines);

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;