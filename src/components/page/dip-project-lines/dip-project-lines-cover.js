import React, {useState, useEffect} from "react";
import { connect, styled, css } from "frontity";
import { Container, Row, Col, Section} from "@osirispp/frontity-layout";

const DIPGeneral = ({ state }) =>{
    const data = state.source.get(state.router.link);
    
    const page = state.source[data.type][data.id];

    const {
        title
    } = page;

    return data.isReady?(
        <Section spaceBottomNone>
            <Container>
                <Row>
                    <Col>
                        <Title>{title.rendered}</Title>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(DIPGeneral);
const Title = styled.h1`
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 4rem;
`;