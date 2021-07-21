import React from "react";
import { styled, css, connect } from "frontity";
import {Section, Container, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../../featured-media";
import {lighten, darken} from "polished";

const SchoolCover = ({ state, libraries })=>{

    const data = state.source.get(state.router.link);
    const school = state.source[data.type][data.id];
    
    const {
        featured_media,
        meta_box,
        main_faculty,
        title,
        content,
    } = school;

    const {
        faculty_color = "#001F56"
    } = main_faculty.meta_box;

    const { colors } = state.theme;

    const Html2React = libraries.html2react.Component;

    return (
        <SSection spaceNone bgColor={faculty_color || colors.primary.dark}>
            <FeaturedMedia 
                media={ featured_media }
                size="56.25%"   
                sizeLG="45%"
                bgColor
            /> 
            <SContainer bgColor={lighten(0.15, faculty_color || colors.primary.dark)}>  
                <Deco bgColor={lighten(0.15, faculty_color || colors.primary.dark)} bgColorBefore={lighten(0.03, faculty_color || colors.primary.dark)} bgColorAfter={lighten(0.03, faculty_color || colors.primary.dark)} />
                <Row>
                    <Col>
                        <Title> { title.rendered}</Title>
                        <Copy>
                            <Html2React html={content.rendered} />
                        </Copy>   
                    </Col>
                </Row>
            </SContainer>
        </SSection>
    );
}

export default connect( SchoolCover );

const SSection = styled(Section)`
    ${({bgColor="darkblue"})=>css`
        background-color: ${bgColor};
        padding-bottom: 15rem;
    `}
`;

const SContainer = styled(Container)`
    ${({bgColor="blue"})=>css`
        background-color: ${bgColor};
        color: white;
        padding-top: 4rem;
        padding-bottom: 15rem;
        ${mq.sm}{
            margin-top: -15%;
        }
        ${mq.xl}{
            margin-top: -25rem;
        }

        *{
            color: inherit;
        }
    `}
`;

const Deco = styled.div`
    ${({ bgColor="green", bgColorBefore="green", bgColorAfter="green"})=>css`
        position: absolute;
        top: 0;
        left: 50%;
        width: 110%;
        height: 100%;
        background-color: ${bgColor};
        transform: translate(-50%, 0);
        &:before{
            content:'';
            position:absolute;
            top:8rem;
            left:-3rem;
            padding: 3rem;
            background-color: ${bgColorBefore};
        }
        &:after{
            content:'';
            position:absolute;
            top:15rem;
            right:-2rem;
            padding: 2rem;
            background-color: ${bgColorAfter};
        }
    `}
`;

const Title = styled.h1`
        text-align:center;
        color: white;
        margin-bottom: 4rem;
`;

const Copy  = styled.div`
    margin-bottom: 4rem;
`;
