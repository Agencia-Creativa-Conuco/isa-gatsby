import React from "react";
import styled from "@emotion/styled";
import {Section, Container, Row, Col} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import Link from "../../components/link";
import colors from "../../components/styles/colors";
import useCareer from "../../hooks/useCarreras";

const SchoolCareers  = ({ school, faculty })=>{

    const {
        careers
    } = school;

    const careerList = useCareer().filter( item => careers.map( career=>career.id).includes(item.id) );

    return careerList.length?(
        <BGSection spaceTopNone bg={colors.green.base}>
            <Container>
                <Row>
                    <Col>
                        <Title>Programas de grado</Title>
                    </Col>
                </Row>
                <Row>
                {  
                    careerList.map((career,index)=>{

                        const {
                            parent,
                            title,
                            featuredImage,
                            link
                        } = career;

                        return parent? 
                        (
                            <Col size={6} sizeMD={6}  mxAuto key={index}>
                                <StyledLink to={link}>
                                    <Card>
                                        <FeaturedMedia 
                                            media={ featuredImage }
                                            size="100%"   
                                            bgColor
                                        /> 
                                        <CardTitle color={faculty.color}>{ title }</CardTitle>
                                    </Card>
                                </StyledLink>
                            </Col>
                        ):null;
                    })
                }
                </Row>
            </Container>
        </BGSection>
    ) : null;
}

export default SchoolCareers;

const BGSection = styled( Section )`
    position: relative;
    margin-top: -25rem !important;
`;

const Card = styled.div`
    margin: 2rem auto;
    max-width: 40rem;
`;

const Title = styled.h2`
    text-align:center;
    color: white;
    margin-bottom: 10rem;
`;

const CardTitle = styled.h3`
    text-align:center;
    color:${props => props.color};
    text-transform: uppercase;
`;

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;


