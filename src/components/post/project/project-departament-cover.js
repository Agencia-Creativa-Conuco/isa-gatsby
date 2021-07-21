import React from "react";
import { styled, css, connect } from "frontity";
import {Section, Container, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import { h2 } from "../../styles/posts-tipography";


const ProjectLineCover = ({ state, libraries })=>{

    const data = state.source.get(state.router.link);

    const projects = state.source[data.type][data.id];

    const {
        featured_media,
        meta_box
    } = projects;


    const {
        colors
    } = state.theme;

    const {

        project_cover_copy,
        project_cover_image,
        
    } = meta_box

    const Html2React = libraries.html2react.Component;

    return (
        <Section spaceTopNone zIndex='4' >

            <DivBG  bg={ colors.primary.base } />
            <DecoContent>
                <Row>
                    <Col 
                        size={12} 
                        // sizeLG={5}
                        noGutters
                    >
                        <FeaturedMedia 
                            media={ featured_media }
                            size="56.25%"
                            sizeLG="40%"
                            heightLG="100%"
                            bgColor
                        />
                    </Col>

                    <Col
                        size={12} 
                        // sizeLG={7}
                        noGutters
                    >
                        <StylesContent>
                            <Title  >
                                { projects.title.rendered}
                            </Title>  
                            <Copy>
                                <Html2React html ={ project_cover_copy }/>
                            </Copy>
                        </StylesContent> 
                    </Col>
                </Row>
            </DecoContent>
        </Section>

    );
}

export default connect( ProjectLineCover );



const DivBG = styled.div`

    ${({ bg })=>css`
        width: 100%;
        height: 25rem;
        position: relative;
        top 0;
        background: ${bg};
        ${mq.lg}{
            height: 30rem;
        }
    `}

`;

const DecoContent = styled( Container ) `
    position:relative;
    background:white;
    position: relative;
    margin-top: -12rem;
    border-radius: 0 0rem 3rem 3rem;
    box-shadow: silver 0 10px 10px;
`;

const StylesContent = styled.div`
    padding: 2rem 4rem;
    ${mq.lg}{
        padding: 4rem 5rem;
    }
`;

const Title = styled.h1 `
    margin-bottom: 3rem;
    text-align: center;
`;

const Copy = styled.p`
    white-space: break-spaces;
`;