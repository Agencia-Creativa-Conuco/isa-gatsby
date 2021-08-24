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
                                    <Col size={6} sizeMD={6} key={index}>
                                        <StyledLink to={uri}>
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


const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
