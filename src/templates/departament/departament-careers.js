import React from "react";
import styled from "@emotion/styled";
import {Section, Container, Row, Col} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import Link from "../../components/link";
import colors from "../../components/styles/colors";
import { css } from "@emotion/react";

const DepartamentsCareers  = ({ faculty, careers, grades })=>{

    return grades.length?(
        <BGSection spaceTopNone bg={colors.green.base}>
            {
                grades.map( (grade, index) => (
                    <Container key={grade.id} >
                        <Row>
                            <Col>
                                <Title color={ index? faculty.color : "white" } main={ index? false: true }>Programas de {grade.title}</Title>
                            </Col>
                        </Row>
                        <Row>
                        {  
                            careers.filter( career => career.grade.id === grade.id ).map((career,index)=>{

                                const {
                                    title,
                                    featuredImage,
                                    uri
                                } = career;

                                return (
                                    <Col size={6} sizeMD={6}  mxAuto key={index}>
                                        <StyledLink to={uri}>
                                            <Card>
                                                <FeaturedMedia 
                                                    media={ featuredImage }
                                                    size="100%"   
                                                    bgColor
                                                /> 
                                                <CardTitle color={faculty.color || colors.primary.dark }>{ title }</CardTitle>
                                            </Card>
                                        </StyledLink>
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

export default DepartamentsCareers;

const BGSection = styled( Section )`
    position: relative;
    margin-top: -25rem !important;
`;

const Card = styled.div`
    margin: 2rem auto;
    max-width: 40rem;
`;

const Title = styled.h2`
    ${({color="inherit", main})=>css`
        text-align:center;
        margin-bottom: 10rem;
        color: ${color};
        ${ main? css``:css`
            margin-top: 10rem;
        `}
    `}
`;

const CardTitle = styled.h3`
    text-align:center;
    color:${props => props.color};
    text-transform: uppercase;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
