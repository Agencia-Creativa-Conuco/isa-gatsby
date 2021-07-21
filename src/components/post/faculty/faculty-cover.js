import React from "react";
import { styled, css, connect } from "frontity";
import {Section, Container, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";


const FacultyCover = ({ state, libraries })=>{

    const data = state.source.get(state.router.link);

    const faculty = state.source[data.type][data.id];

    const {
        featured_media,
        meta_box
    } = faculty;


    const {
        colors
    } = state.theme;

    const {
        faculty_cover_copy,
        faculty_color
    } = meta_box;

    const Html2React = libraries.html2react.Component;

    return (
        <Section spaceNone >
            <Container fluid>
                <Row>
                    <ColStyles
                        order={2}
                        orderLG={1}
                        size={12}
                        sizeLG={6}
                        color={ faculty_color || colors.primary.dark }      
                    >
                        <Container noGutters>
                            <Row>
                                <Col>
                                    <Wrapper as="div">
                                        <Title color={colors.white}> {faculty.title.rendered}</Title>
                                        <Content>  
                                            <Html2React  html={ faculty_cover_copy }/>
                                        </Content>    
                                    </Wrapper>
                                </Col>
                            </Row>
                        </Container>


                    </ColStyles>
                  
                    <Col 
                        size={12} 
                        sizeLG={6} 
                        order={1}
                        orderLG={2}
                        noGutters>
                            <FeaturedMedia 
                                media={ featured_media }
                                size="56.25%"
                                sizeLG="80%"
                                heightLG="100%"
                                bgColor
                            />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default connect(FacultyCover);

const ColStyles = styled( Col )`
    background-color:  ${props => props.color};
`

const Wrapper = styled(Section)`
    ${mq.xl}{
        max-width: 57rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

const Title = styled.h1`
    color:  white;
    margin-bottom: 4rem;
`;

const Content = styled.div`
    position: relative;
    color: white;
`;