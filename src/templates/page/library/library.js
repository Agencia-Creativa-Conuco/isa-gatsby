import React from "react";
import styled from "@emotion/styled";
import LibraryCover from "./library-cover";
import LibraryServices from "./library-services";
import LibraryResources from "./library-resources";
import LibraryHorary from "./library-horary";

const LibraryPage = ({ ...page }) => {

    return (
        <Container>

            <LibraryCover {...page}/>
            <LibraryServices {...page}/>
            <LibraryResources {...page}/>
            <LibraryHorary {...page}/>
        </Container>
    );
};

export default LibraryPage;

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;