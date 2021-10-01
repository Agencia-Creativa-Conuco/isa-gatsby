import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';
import Cta from '../../../components/cta';

const LibraryCover = ({ page}) =>{

    const {
        title,
        featuredImage,
        library:{
            cover:{
                copy
            }
        },
    } = page;

    
    return (
        <Section spaceNone css={sectionStyles}>
            <Container fluid>
                <Row alignCenter >
                    <Col 
                        size={12} 
                        sizeMD={6} 
                        sizeLG={5} 
                        zIndex={2}
                        order={2} 
                        orderMD={1}
                    >
                        <Content decoBg={colors.blue.base}>
                        
                            <SectionTitle>{title} </SectionTitle>
                            <Copy>{copy}</Copy>
                            <Cta to="http://bibliotecaunisa.com/" target="_blank">ir al Sitio oficial</Cta>
                         
                        </Content>
                    </Col>
                    <Col 
                        size={11} 
                        sizeMD={6}
                        sizeLG={7} 
                        noGutters 
                        zIndex={1}
                        order={1} 
                        orderMD={2}
                        mlAuto
                    >
                     <Media 
                        decoBg={colors.secondary.light}
                        decoBgB={colors.secondary.dark}>

                            <Logo
                                media={featuredImage}
                                size="100%"
                                sizeLG="80%"
                                loading="eager"
                            />
                        </Media>
                    </Col>
                </Row>
            </Container>
        </Section>
    );

}

export default LibraryCover;

const sectionStyles = css`
    overflow: hidden;
`;

const Content = styled.div`
    margin: 2rem auto;
    max-width: 50rem;
    position: relative;
`;


const SectionTitle = styled.h1`
    margin-bottom: 2.5rem;
`;

const Copy = styled.p`
    margin-bottom: 2rem;
`;


const Media = styled.div`
position: relative;
&::before{
    content: "";
    position: absolute;
    padding:27%;
    clip-path: circle(50%  at 50% 50%);
    background: ${props => props.decoBg};
    z-index: 1;
    left: 7%;
    top: -25%;
    box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.15);

}
    &::after{
        content: "";
        position: absolute;
        top: 15%;
        left: 9%;
        padding: 4%;
        background-color:${props => props.decoBgB};
        clip-path: circle(50%  at 50% 50%); 
        z-index: 2;
        ${mq.lg}{
            top: 18%;
            left: 5%;
        }
    }

`;

const Logo = styled(FeaturedMedia)`
    clip-path: ellipse(100% 100% at right 88%);
    z-index: 4;
`;

