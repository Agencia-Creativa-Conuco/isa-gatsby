import React from "react";
import styled from "@emotion/styled";
import {Section, Container, Row, Col} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import Link from "../../components/link";
import colors from "../../components/styles/colors";
import { css } from "@emotion/react";

const DepartamentsProjects  = ({ faculty, projects, projectLines })=>{

    return projectLines.length?(
        <BGSection>
            <Container>
                <Row>
                    <Col>
                        <SectionTitle color={ faculty.color}>Líneas de investigación</SectionTitle>
                    </Col>
                </Row>
            </Container>
            {
                projectLines.map( line => (
                    <Container key={line.id} >
                        <Row>
                            <Col>
                                <SLink to={line.uri}>
                                    <Title color={ colors.text.base} >{line.title}</Title>
                                </SLink>
                            </Col>
                        </Row>
                        <Row>
                        {  
                            projects.filter( project => project.projectLine.id === line.id ).map((project,index)=>{

                                const {
                                    title,
                                    featuredImage,
                                    uri
                                } = project;

                                return (
                                    <Col size={6} sizeMD={6}  mxAuto key={index}>
                                        <SLink to={uri}>
                                            <Card>
                                                <FeaturedMedia 
                                                    media={ featuredImage }
                                                    size="100%"   
                                                    bgColor
                                                /> 
                                                <CardTitle color={faculty.color || colors.primary.dark }>{ title }</CardTitle>
                                            </Card>
                                        </SLink>
                                    </Col>
                                );
                            })
                        }
                        </Row>
                    </Container>
                ))
            }
        </BGSection>
    ):null;
}

export default DepartamentsProjects;

const BGSection = styled( Section )`
    position: relative;
`;

const Card = styled.div`
    margin: 2rem auto;
    max-width: 40rem;
`;

const SectionTitle = styled.h2`
    ${({color="inherit"})=>css`
        text-align:center;
        text-transform: uppercase;
        color: ${color};
    `}
`;

const Title = styled.h3`
    ${({color="inherit"})=>css`
        text-align:center;
        text-transform: uppercase;
        color: ${color};
    `}
`;

const CardTitle = styled.h4`
    text-align:center;
    color:${props => props.color};
    /* text-transform: uppercase; */
`;

const SLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
