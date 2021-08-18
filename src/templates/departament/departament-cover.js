import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {Section, Container, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import {lighten} from "polished";
import colors from "../../components/styles/colors";

const DepartamentCover = ({ departament, faculty })=>{

    const {
        featuredImage,
        title,
        content,
    } = departament;

    return (
        <SSection spaceNone bgColor={faculty.color || colors.primary.dark}>
            <FeaturedMedia 
                media={ featuredImage }
                size="56.25%"   
                sizeLG="45%"
                bgColor
            /> 
            <SContainer bgColor={lighten(0.15, faculty.color || colors.primary.dark)}>  
                <Deco bgColor={lighten(0.15, faculty.color || colors.primary.dark)} bgColorBefore={lighten(0.03, faculty.color || colors.primary.dark)} bgColorAfter={lighten(0.03, faculty.color || colors.primary.dark)} />
                <Row>
                    <Col>
                        <Title> { title }</Title>
                        <Copy dangerouslySetInnerHTML={{__html: content}} />
                    </Col>
                </Row>
            </SContainer>
        </SSection>
    );
}

export default DepartamentCover;

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
