import React from "react";
import styled from "@emotion/styled";
import LibraryCover from "./library-cover";
import LibraryServices from "./library-services";
import LibraryResources from "./library-resources";
import LibraryHorary from "./library-horary";
import Layout from "../../components/layout";

const LibraryPage = (props) => {

    return (
        <Layout {...props}>
            <Container>
                <LibraryCover />
                <LibraryServices />
                <LibraryResources />
                <LibraryHorary />
            </Container>
        </Layout>
    );
};

export default LibraryPage;

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;