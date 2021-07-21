import React from "react";
import { styled, css, connect } from "frontity";
import {Section, Container, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";

const CareerPerfil = ({ state, libraries, actions, facultyColor, career })=>{

    const {
        title,
        meta_box
    } = career;

    const { 
        career_perfil_title, 
        career_perfil_copy, 
        career_perfil_image
     } = meta_box;

    const Html2React = libraries.html2react.Component;

    return (
        <Section >
            <Container>
                <Row>
                    <Col size={12} sizeLG={6} orderLG={2}>
                        <Media decoBgColor={facultyColor}>
                            <FeaturedMedia 
                                media={ career_perfil_image }
                                size="130%"
                                bgColor
                            />
                        </Media>
                    </Col>
                    <Col size={12} sizeLG={6} orderLG={1}>
                        <Content>
                            <Title color={facultyColor}>{career_perfil_title}</Title>
                            <Description>
                                <Html2React html={ career_perfil_copy } />
                            </Description>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default connect(CareerPerfil);

const Media = styled.div`
    ${({decoBgColor="green"})=>css`
        position: relative;
        max-width: 40rem;
        margin: 0 auto;
        margin-top: -25%;
        ${mq.lg}{
            max-width: 75%;
        }
        &:before{
            content: '';
            background-color: ${decoBgColor};
            width: 15%;
            padding-bottom: 15%;
            position: absolute;
            bottom: 0;
            right: 0;
            transform: translate(50%, 50%);
            box-shadow: .25rem .25rem .25rem rgba(0,0,0,.15);
            z-index: 1;
        }
    `}
`;

const Content = styled.div`
    margin: 0 auto;
    padding: 4rem 0;
    position: relative;
    z-index: 2;
`;

const Title = styled.h2`
    ${({color="green"})=>css`
        color: ${color};
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 3rem;
    `}
`;

const Description = styled.div``;
