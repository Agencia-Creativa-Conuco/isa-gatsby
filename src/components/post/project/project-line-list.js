import React from "react";
import { styled, css, connect } from "frontity";
import {Section, Container, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";

const ProjectLineList = ({ state, libraries })=>{

    const data = state.source.get(state.router.link);

    const project = state.source[data.type][data.id];

    const {
        children = []
    } = project;

    const {
        colors
    } = state.theme;

    return children.length?(
        <Section>
            <Container>
                <Row>
                    
                    <Col 
                        size={12} 
                    >
                        <Title>Proyectos de investigación</Title>  
                    </Col>
                    
                </Row>
                <Row as="ul">
                    {
                        children.map((item,index)=>{
                            
                            const {
                                featured_media,
                                title,
                                link
                            } = item;

                            return(
                                <Col
                                    key={index}
                                    size="auto"
                                    mxAuto
                                >
                                    <Card>
                                        <Link to={link} noDecoration>
                                            <FeaturedMedia 
                                                media={featured_media}
                                                size="56.25%"
                                                bgColor
                                            />
                                            <CardTitle>{title.rendered}</CardTitle>
                                        </Link>
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

export default connect( ProjectLineList );

const Title = styled.h2`
    margin-bottom: 4rem;
    text-align: center;
`;

const Card = styled.li`
    list-style: none;
    margin: 0;
    margin-bottom: 4rem;
    padding: 0;
    max-width: 32rem;
`;

const CardTitle = styled.h3`
    text-transform: uppercase;
`;