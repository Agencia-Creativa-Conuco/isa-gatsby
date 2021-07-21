import React from "react";
import { styled, css, connect } from "frontity";
import {Section, Container, Row, Col, mq} from "@osirispp/frontity-layout";
import Related from "../../related";


const NewsRelated = ({ state })=>{

    const data = state.source.get(state.router.link);
    const news = state.source[data.type][data.id];

    const{
        related
    } = news;
    
    return (
        <Section >
            <Container>
                     <Row>
                         <Col>
                                <Related title="Publicaciones recientes" items={ related }/>
                            </Col>
                     </Row>
            </Container>
        </Section>

    );
}

export default connect( NewsRelated );


