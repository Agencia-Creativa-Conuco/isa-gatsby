import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {Section, Container, Row, Col, mq} from "../../components/layout/index";
import {PensumIcon} from "../../components/icons";

const CareerPensum = ({ career })=>{

    const {
        faculty,
        resources = []
    } = career;

    
    const pensums = resources.filter((item)=>{
        
        const {
            resource: {
                type
            }
        } = item;
        
        return type === "pensum";
    });

    const facultyColor = faculty.color;

    return pensums.length?(
        <Section css={sectionStyles}>
            <Container>
                <Row>
                {
                    pensums.map((pensum, index)=>{
                        const{
                            title,
                            resource: {
                                file : {
                                    localFile : {
                                        publicURL
                                    }
                                }
                            }
                        } = pensum;

                        return(
                            <Col size={12} sizeSM="auto" mxAuto key={index}>
                                <Card>
                                    <CardLink
                                        href={publicURL}
                                        download
                                    >
                                        <Row alignCenter>
                                            <Col>
                                                <CardSpan color={facultyColor}>Descargar</CardSpan>
                                                <CardTitle color={facultyColor}>{ title }</CardTitle>
                                            </Col>
                                            <Col size="auto">
                                                <CardIcon color={facultyColor}>
                                                    <PensumIcon />
                                                </CardIcon>
                                            </Col>
                                        </Row>
                                    </CardLink>
                                </Card>
                            </Col>
                        )
                    })   
                }
                </Row>
            </Container>
        </Section>
    ):null;
}

export default CareerPensum;

const sectionStyles = css`
    margin-top: -10rem;
    ${mq.md}{
        margin-top: -15rem;
    }
`;

const Card = styled.div`
    box-shadow: .5rem .5rem .5rem rgba(0,0,0,0.15);
    background-color: white;
    border-radius: 1.5rem;
    max-width: 32rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
`;

const CardLink = styled.a`
    padding: 1.5rem;
    display: block;
    text-decoration: none;
    cursor: pointer;
    color: inherit;
`;

const CardTitle = styled.h3`
    ${({color="green"})=>css`
        color: ${color};
        text-transform: uppercase;
        font-weight: 900;
        margin: 0;
        font-size: 2rem;
    `}
`;

const CardSpan = styled.span`
    ${({color="green"})=>css`
        color: ${color};
        text-transform: uppercase;
        font-weight: 300;
    `}
`;

const CardIcon = styled.div`
    ${({color="green"})=>css`
        max-width: 8rem;
        color: ${color};
    `}
`;