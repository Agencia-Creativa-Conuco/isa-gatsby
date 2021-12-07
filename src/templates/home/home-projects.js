import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {  Section, Container, Row, Col, mq } from "../../components/layout/index";
import Cta from '../../components/cta';

import FeaturedMedia from "../../components/featured-media";
import Carousel from "react-slick";
import useInvestigaciones from "../../hooks/useInvestigaciones";

import {h1} from "../../components/styles/tipography";

const HomeProjects = () =>{
    

    const investigaciones = useInvestigaciones();

    const projectTitle = "Proyectos de investigación"

    return investigaciones.length?(
        <Section spaceBottomNone  id="section_3" >
            <Container fluid>
                <Row>
                    <Col>
                        <Title>{projectTitle}</Title>
                    </Col>
                </Row>
                <Row>
                    <Col noGutters>
                        <Carousel css={css`overflow: hidden;`}>
                        {
                            investigaciones.map((investigacion,index)=>{

                                const {
                                    nombre,
                                    // excerpt,
                                    link,
                                    imagenPortada
                                } = investigacion

                                return (
                                    <Slide key={index}>
                                        <SlideWrapper>
                                            <SlideMedia>
                                                <FeaturedMedia 
                                                    media={imagenPortada}
                                                    alt={nombre}
                                                    size="150%"
                                                    sizeSM="100%"
                                                    sizeMD="56.25%"
                                                    sizeLG="50%"
                                                    sizeXL="35%"
                                                    bgColor
                                                />
                                            </SlideMedia>
                                            <SlideBody>
                                                <Container>
                                                    <Row>
                                                        <Col size={12} sizeMD={7} sizeLG={7} mlAuto>
                                                            <SlideTitle>{nombre}</SlideTitle>
                                                            {/* <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} /> */}
                                                            <LinkBox>
                                                                <Cta to={link} aria-label="Click para abrir el...">Conocer más</Cta>
                                                            </LinkBox>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </SlideBody>
                                        </SlideWrapper>
                                    </Slide>
                                )
                            })   
                        }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default HomeProjects;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 4rem;
`;

const Slide = styled.div``;

const SlideWrapper = styled.div`
    position: relative;
`;

const SlideMedia = styled.div``;

const SlideBody = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    min-height: 100%;
    z-index: 2;
    padding: 4rem 1.5rem;
    ${mq.md}{
        text-align: right;
    }
`;

const SlideTitle = styled.h3`
    text-transform: uppercase;
    font-weight: 900;
    color: white;
    text-shadow: .1rem .1rem .1rem gray;
    ${h1}
`;

// const Excerpt = styled.div`
//     color: white;
//     text-shadow: .1rem .1rem .1rem gray;
// `;

const LinkBox = styled.div`
    margin-top: 2rem;
`;