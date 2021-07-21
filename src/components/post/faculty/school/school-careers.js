import React from "react";
import { styled, css, connect } from "frontity";
import {Section, Container, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../../featured-media";
import {  PhoneIcon, MailIcon  } from "../../../icons";
import Link from "../../../link";

const SchoolCareers  = ({ state, libraries })=>{

    const data = state.source.get(state.router.link);
    const school = state.source[data.type][data.id];
    
    const {
        featured_media,
        meta_box,
        careers=[],
        main_faculty
    } = school;

    const {
        faculty_color
    } = main_faculty.meta_box;

    const { colors } = state.theme;

    return (
        <BGSection spaceTopNone bg={colors.green.base}>
            <Container>
                <Row>
                    <Col>
                        <Title>Programas de grado</Title>
                    </Col>
                </Row>
                <Row>
                {  
                    careers.map((career,index)=>{

                        const {
                            parent,
                            title,
                            featured_media,
                            link
                        } = career;

                        return parent != 0 ? 
                        (
                            <Col size={6} sizeMD={6}  mxAuto key={index}>
                                <Link to={link} noDecoration>
                                    <Card>
                                        <FeaturedMedia 
                                            media={ featured_media }
                                            size="100%"   
                                            bgColor
                                        /> 
                                        <CardTitle color={faculty_color || colors.primary.dark }>{ title.rendered }</CardTitle>
                                    </Card>
                                </Link>
                            </Col>
                        ):null;
                    })
                }
                </Row>
            </Container>
        </BGSection>
    );
}

export default connect( SchoolCareers );

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


