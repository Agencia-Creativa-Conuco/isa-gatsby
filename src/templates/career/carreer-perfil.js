import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {Section, Container, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";

const CareerPerfil = ({career })=>{

    const {
        perfil,
        faculty
    } = career;

    const {
        image,
        title,
        content
    } = perfil;

    const facultyColor = faculty?.color;

    console.log(image)

    return (
        <Section >
            <Container>
                <Row>
                    <Col size={12} sizeLG={6} orderLG={2}>
                        <Media decoBgColor={facultyColor}>
                            <FeaturedMedia 
                                media={ image?.localFile }
                                size="130%"
                                bgColor
                            />
                        </Media>
                    </Col>
                    <Col size={12} sizeLG={6} orderLG={1}>
                        <Content>
                            <Title color={facultyColor}>{title}</Title>
                            <Description dangerouslySetInnerHTML={{__html: content}} />
                        </Content>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default CareerPerfil;

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
