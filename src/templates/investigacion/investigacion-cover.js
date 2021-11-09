import React from "react";
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {Section, Container, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import { h2 } from "../../components/styles/posts-tipography";
import colors from "../../components/styles/colors";

const InvestigacionCover = ({ investigacion })=>{

    const {
        nombre,
        imagenPortada,
        descripcion,
    } = investigacion;

    return (
        <Section spaceNone zIndex='4' >

            <DivBG  bg={ colors.primary.base } />
            <DecoContent>
                <Row>
                    <Col 
                        size={12} 
                        sizeLG={5}
                        noGutters
                    >
                        <FeaturedMedia 
                            media={ imagenPortada }
                            size="56.25%"
                            sizeLG="130%"
                            heightLG="100%"
                            bgColor
                        />
                    </Col>

                    <Col
                        size={12} 
                        sizeLG={7}
                        noGutters
                    >
                        <StylesContent>
                        <Title  >
                            { nombre }
                        </Title>  
                        <Copy dangerouslySetInnerHTML={{__html: descripcion}} />
                        </StylesContent> 
                    </Col>
                </Row>
            </DecoContent>
        </Section>

    );
}

export default InvestigacionCover;



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

        ${mq.lg}{
            border-radius: 0 3rem 3rem 0;
        }
`;
const StylesContent = styled.div`
        padding: 2rem 4rem;
        ${mq.lg}{
            padding: 4rem 5rem;
        }

`;

const Title = styled.h1 `
        margin-bottom: 3rem;
        ${h2}
`;

const Copy = styled.p`
    white-space: break-spaces;
    ${mq.xl}{
        max-width: 57rem;
    }

`;