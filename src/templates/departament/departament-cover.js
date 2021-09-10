import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {Section, Container, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import {lighten} from "polished";
import colors from "../../components/styles/colors";

const DepartamentCover = ({ departament, faculty })=>{

    const {
        featuredImage,
        title,
        content,
    } = departament;

    return (
        <Section spaceNone >
            <Container fluid>
                <Row>
                    <Col 
                        size={12} 
                        sizeLG={6} 
                        noGutters>
                            <FeaturedMedia 
                                media={ featuredImage }
                                size="56.25%"
                                sizeLG="80%"
                                heightLG="100%"
                                bgColor
                            />
                    </Col>
                    <ColStyles
                        size={12}
                        sizeLG={6}
                        color={ faculty.color || colors.primary.dark }      
                    >
                        <Container noGutters>
                            <Row>
                                <Col>
                                    <Wrapper as="div">
                                        <Title color={colors.white}> {title}</Title>
                                        <Content dangerouslySetInnerHTML={{__html: content}} />    
                                    </Wrapper>
                                </Col>
                            </Row>
                        </Container>

                    </ColStyles>
                  
                </Row>
            </Container>
        </Section>
    );
}

export default DepartamentCover;

const ColStyles = styled( Col )`
    background-color:  ${props => props.color};
`

const Wrapper = styled(Section)`
    ${mq.lg}{
        padding: 4rem 0;
    }
    ${mq.xl}{
        max-width: 57rem;
        margin-left: auto;
        margin-right: auto;
        padding: rem 0;
    }
`;

const Title = styled.h1`
    color:  white;
    margin-bottom: 4rem;
`;

const SubTitle = styled.h2`
    color:  white;
    margin-bottom: 2rem;
    margin-top: 4rem;
    text-transform: uppercase;
`;

const Paragraph = styled.p`
    color: white;
`;

const Content = styled.div`
    position: relative;
    color: white;
`;
