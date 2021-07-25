import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {Section, Container, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import {darken,lighten} from "polished";

const CareerCover = ({ career })=>{

    const {
        title,
        featuredImage,
        faculty,
        cover: {
            copy,
            metadata,
        }, 
    } = career;
    
    const facultyColor = faculty.color;

    return (
        <Section spaceNone css={sectionStyles({
            bgColor: facultyColor,
            decoBgColor:darken(.15,facultyColor)
        })}>
            <Container fluid>
                <Row>
                    <Col size={12} sizeLG={6} noGutters>
                        <Media decoBgColor={lighten(0.15, facultyColor)}>
                            <FeaturedMedia 
                                media={featuredImage?.node?.localFile}
                                size="56.25%"
                                // sizeLG="60%"
                                heightLG="100%"
                                bgColor
                            />
                        </Media>
                    </Col>
                    <Col 
                        size={12} sizeLG={6}
                        css={contentColStyles({
                        bgColor: facultyColor
                    })}>
                        <Section as="div">
                            <Container noGutters>
                                <Row>
                                    <Col>
                                        <Content>
                                            <Faculty color="#FFFFFF">{ faculty?.title }</Faculty>
                                            <Title>{ title }</Title>
                                            <Copy dangerouslySetInnerHTML={{__html: copy}} />
                                            <Gadgets>
                                                <Row justifyContent="space-around">
                                                    {
                                                        metadata.map((item, index)=>{

                                                            const {
                                                                name,
                                                                value
                                                            } = item;

                                                            return(
                                                                <Col size="auto" key={index}>
                                                                    <Gadget>
                                                                        <GadgetName>{ name }</GadgetName>
                                                                        <GadgetValue>{ value }</GadgetValue>
                                                                    </Gadget>
                                                                </Col>
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Gadgets>
                                        </Content>
                                    </Col>
                                </Row>
                            </Container>
                        </Section>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default CareerCover;

const sectionStyles = ({
    bgColor="green",
    decoBgColor="green"
}) => css`
    background-color: ${bgColor};
    position: relative;
    &:before{
        content: '';
        background-color: ${decoBgColor};
        width: 20%;
        padding-bottom: 20%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(50%, -50%);
        border-radius: 50%;
        box-shadow: .25rem .25rem .25rem rgba(0,0,0,.15);
        z-index: 1;
    }
`;

const Media = styled.div`
    ${({decoBgColor="green"})=>css`
        position: relative;
        height: 100%;
        &:before{
            content: '';
            background-color: ${decoBgColor};
            width: 10%;
            padding-bottom: 10%;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translate(-25%, 50%);
            border-radius: 50%;
            box-shadow: .25rem .25rem .25rem rgba(0,0,0,.15);
            z-index: 1;
            ${mq.lg}{
                width: 20%;
                padding-bottom: 20%;
            }
        }
    `}
`;

const contentColStyles = ({bgColor="green"}) => css`
    background-color: ${bgColor};
    max-width: 54rem;
    margin: 0 auto;
    ${mq.md}{
        max-width: 72rem;
    }
    ${mq.lg}{
        max-width: 48rem;
        margin: initial
    }
    ${mq.xl}{
        max-width: 57rem;
    }
`

const Content = styled.div`
    margin: 0 auto;
    padding-bottom: 25%;
    color: white;
    position: relative;
    z-index: 2;
`;

const Faculty = styled.h3`
    ${({color="white"})=>css`
        text-transform: uppercase;
        margin: 0;
        color: ${color};
        font-weight: 300;
    `}
`;

const Title = styled.h1`
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 3rem;
    color: white;
`;

const Copy = styled.div`
    margin-bottom: 3rem;
    white-space: break-spaces;
`;

const Gadgets = styled.ul`
    margin: 0;
    padding: 0;
`;

const Gadget = styled.li`
    width: 15rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    padding: 0;
    list-style: none;
`;

const GadgetName = styled.span`
    display: block;
    text-align: center;
    text-transform: uppercase;
`;

const GadgetValue = styled.span`
    display: block;
    padding: .5rem 1rem;
    border: 0.2rem solid white;
    text-align: center;
    font-weight: 900;
    font-size: 2rem;
`;
