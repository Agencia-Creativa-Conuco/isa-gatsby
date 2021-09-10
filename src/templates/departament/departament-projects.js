import React from "react";
import styled from "@emotion/styled";
import {Section, Container, Row, Col} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import Link from "../../components/link";
import colors from "../../components/styles/colors";
import { css } from "@emotion/react";

const DepartamentsProjects  = ({ faculty, projects, projectLines })=>{

    return projectLines.length?(
        <BGSection thin>
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
                                    <Col size={12} sizeMD={6}  key={index}>
                                        <SLink to={uri}>
                                            <Card>
                                                <Row>
                                                    <Col size="auto">
                                                        <CardMedia>
                                                            <FeaturedMedia 
                                                                media={ featuredImage }
                                                                size="100%"   
                                                                bgColor
                                                            /> 
                                                        </CardMedia>
                                                    </Col>
                                                    <Col>
                                                        <CardTitle color={faculty.color || colors.primary.dark }>{ title }</CardTitle>
                                                    </Col>
                                                </Row>
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

const SectionTitle = styled.h2`
    ${({color="inherit"})=>css`
        text-align:center;
        text-transform: uppercase;
        color: ${color};
    `}
`;

const Title = styled.h3`
    ${({color="inherit"})=>css`
        /* text-align:center; */
        text-transform: uppercase;
        font-weight: 300;
        color: ${color};
    `}
`;

const SLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Card = styled.div`
    padding: 1.5rem;
    background-color: #FAFAFA;
    transition: all 0.25s ease-in-out;
    margin: .5rem 0;
    &:hover{
        background-color: #F5F5F5;
    }
`;

const CardMedia = styled.div`
    width: 8rem;
`;

const CardTitle = styled.h3`
    color:${props => props.color};
    text-transform: uppercase;
    margin: 0;
`;