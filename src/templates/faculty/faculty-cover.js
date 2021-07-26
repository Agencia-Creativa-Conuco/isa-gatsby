import React from "react";
import styled from "@emotion/styled";
import {Section, Container, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from "../../components/styles/colors";

const FacultyCover = ({ faculty })=>{

    const {
        title,
        featuredImage,
        color,
        cover: {
            copy
        }
    } = faculty;

    return (
        <Section spaceNone >
            <Container fluid>
                <Row>
                    <ColStyles
                        order={2}
                        orderLG={1}
                        size={12}
                        sizeLG={6}
                        color={ color || colors.primary.dark }      
                    >
                        <Container noGutters>
                            <Row>
                                <Col>
                                    <Wrapper as="div">
                                        <Title color={colors.white}> {title}</Title>
                                        <Content dangerouslySetInnerHTML={{__html: copy}} />    
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
                                media={ featuredImage }
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

export default FacultyCover;

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