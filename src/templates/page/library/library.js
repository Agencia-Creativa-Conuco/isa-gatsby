import React from "react";
import { connect, styled } from "frontity";
import LibraryCover from "./library-cover";
import LibraryServices from "./library-services";
import LibraryResources from "./library-resources";
import LibraryRegulation from "./library-regulation";
import LibraryHorary from "./library-horary";

const LibraryPage = ({ state }) => {

  // Get information about the current URL.
    const data = state.source.get(state.router.link);

  // Load the post, but only if the data is ready.
    return data.isReady? (
        <Container>
            <LibraryCover />
            <LibraryServices />
            <LibraryResources />
            <LibraryRegulation />
            <LibraryHorary />
        </Container>
    ) : null;
};

export default connect(LibraryPage);

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;