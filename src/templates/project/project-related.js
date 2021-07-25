import React from "react";
import { styled, css, connect } from "frontity";
import {Section, Container, Row, Col, mq} from "../../layout/index";
import Related from "../../related";


const ProjectsRelated = ({ state })=>{


    const data = state.source.get(state.router.link);
    const projects = state.source[data.type][data.id];

    const{
        meta_box,
        related
    } = projects
    
    return (
        <Section >
            <Container>
                    <Row>
                        <Col>
                            <Related title="Investigaciones Recientes" items={ related }/>
                        </Col>
                     </Row>
            </Container>
        </Section>

    );
}

export default connect( ProjectsRelated );
