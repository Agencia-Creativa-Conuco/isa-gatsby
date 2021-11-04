import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from '../../components/styles/colors';
import useFiles from '../../hooks/useFiles';

const DepNAF = () =>{

    const images = useFiles();

    return (
        <Section spaceTopNone>
            <Container>
                <Row>
                    <Col size={12} sizeLG={6} noGutters zIndex={2} >
                        <Media>
                            <FeaturedMedia
                                media={ images["direccion-extension-y-proyectos"].naf }
                                // size="56.25%"
                                zIndex="2"
                            />
                        </Media>
                    </Col>
                    <Col css={css`background-color: ${colors.secondary.dark};`} >
                        <Content>
                            <Title color={colors.white}> Centro NAF </Title>
                            <Copy>
                                <p>Ofrece orientación tributaria gratuita.</p>
                                <p>Servicios de inforamción y orientación básica sobre los siguientes trámites y procesos tributarios:</p>
                            </Copy>
                        </Content>
                    </Col>
                    <Col css={css`background-color: ${colors.secondary.base};`} size={12} >
                        <Content>
                            <Copy>
                                <ul css={listStyles}>
                                    <li>Promoción de Cultura Tributaria.</li>
                                    <li>Deberes y derechos de los contribuyentes y ciudadanos.</li>
                                    <li>Uso de los servicios en línea del portal web y oficina virtual de Inpuestos Internos.</li>
                                    <li>Inscripción y actualización del Registro Nacional de Contribuyentes (RNC).</li>
                                    <li>Registro del Régimen Simplificado de Tributación (RST).</li>
                                    <li>Solicitud de comprobantes fiscales.</li>
                                    <li>Impuestos sobre Sucesiones.</li>
                                    <li>Impuestos sobre Donaciones.</li>
                                    <li>Impuesto al Patrimonio Inmobiliario (IPI).</li>
                                    <li>Trámites de vehículos de motor.</li>
                                    <li>Selección del único agente de retención para asalariados.</li>
                                    <li>Reporte de gastos educativos.</li>
                                    <li>Solicitud de Bono Vivienda de Bajo Costo.</li>
                                </ul>
                            </Copy>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </Section>
    );

}

export default DepNAF;

const Title = styled.h2`
    color: inherit;
`;

const Content = styled.div`
    color: white;
    padding-top: 2rem;
    padding-bottom: 2rem;
    ${mq.md}{
        padding: 3rem;
    }
`;

const Copy = styled.p``;

const Media = styled.div`
    ${mq.md}{
        transform: translate(3rem, 3rem);
    }
`;

const listStyles = css`
    margin: 0;
    display: grid;
    gap: .5rem 2.5rem;
    grid: auto-flow / 1fr;
    ${mq.md}{
        grid: auto-flow / 1fr 1fr;
    }
    ${mq.lg}{
        grid: auto-flow / 1fr 1fr 1fr;
    } 
`;