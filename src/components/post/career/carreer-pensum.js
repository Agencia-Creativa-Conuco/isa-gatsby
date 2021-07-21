import React from "react";
import { styled, css, connect } from "frontity";
import {Section, Container, Row, Col, mq} from "@osirispp/frontity-layout";
import Link from "../../link";
import {PensumIcon} from "../../icons";

const CareerPensum = ({ state, facultyColor, career })=>{

    const {
        meta_box,
        resources = []
    } = career;

    const pensums = resources.filter((resource)=>{
        
        const {
            resource_type
        } = resource;

        return resource_type == "pensum";
    })

    return pensums.length?(
        <Section css={sectionStyles}>
            <Container>
                <Row>
                {
                    pensums.map((resource, index)=>{
                        const{
                            title,
                            file
                        } = resource;

                        return(
                            <Col size={12} sizeSM="auto" mxAuto key={index}>
                                <Card>
                                    <CardLink
                                        to={file.url}
                                        download
                                        noDecoration
                                    >
                                        <Row alignCenter>
                                            <Col>
                                                <CardSpan color={facultyColor}>Descargar</CardSpan>
                                                <CardTitle color={facultyColor}>{ title.rendered }</CardTitle>
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

export default connect(CareerPensum);

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

const CardLink = styled(Link)`
    padding: 1.5rem;
    display: block;
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