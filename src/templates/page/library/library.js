import React from "react";
import styled from "@emotion/styled";
import LibraryCover from "./library-cover";
// import LibraryServices from "./library-services";
// import LibraryResources from "./library-resources";
// import LibraryRegulation from "./library-regulation";
// import LibraryHorary from "./library-horary";

const LibraryPage = ({ ...page }) => {


console.log(page)
    return (
        <Container>

            <LibraryCover {...page}/>
            {/* <LibraryServices /> */}
            {/* <LibraryResources /> */}
            {/* <LibraryRegulation /> */}
            {/* <LibraryHorary /> */}
        </Container>
    );
};

export default LibraryPage;

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;