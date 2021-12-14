import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col } from "../../../components/layout/index";
import colors from "../../../components/styles/colors";
import {   ClockIcon  } from "../../../components/icons";

const BibliotecaHorario = () =>{

    return (
        <SectionStyles color={colors.blue.dark} id="section_3">
            <Row>
                <Icon bgColor={colors.cta.base} >
                        <ClockIcon />
                </Icon>   
            </Row>
            <StylesContainer>         
                <Row >
                    <Col size={12}  noGutters>
                      <SectionTitle>Horario de servicios</SectionTitle>
                    </Col>
                </Row>
                    <Row>      
                        <Col size={12} sizeMD={6} sizeLG={4} mxAuto > 
                            <ScheduleContainer>
                                <Service>HORARIO DE SERVICIOS</Service>
                                <Area>Circulación y préstamos de colecciones general, de referencia y reserva</Area>

                                <ScheduleTitle>LUNES A VIERNES</ScheduleTitle>
                                <Schedule>8:00 a.m. - 12:00 p.m. / 1:00 p.m. - 10:00 p.m.</Schedule>

                                <ScheduleTitle>SÁBADO</ScheduleTitle>
                                <Schedule>8:00 a.m. - 12:00 p.m. / 1:00 p.m. - 5:00 p.m.</Schedule>
                            </ScheduleContainer>
                        </Col>
                        <Col size={12} sizeMD={6} sizeLG={4} mxAuto > 
                            <ScheduleContainer>
                                <Service>SERVICIO DE SALA DIGITAL</Service>
                                <Area>Uso de computadora con acceso a internet, escáneres e impresión de documentos</Area>

                                <ScheduleTitle>LUNES A VIERNES</ScheduleTitle>
                                <Schedule>8:00 a.m. - 12:00 p.m. / 1:00 p.m. - 5:00 p.m.</Schedule>

                                <ScheduleTitle>SÁBADO</ScheduleTitle>
                                <Schedule>8:00 a.m. - 12:00 p.m.</Schedule>
                            </ScheduleContainer>
                        </Col>
                        <Col size={12} sizeMD={6} sizeLG={4} mxAuto > 
                            <ScheduleContainer>
                                <Service>EQUIPOS AUDIOVISUALES</Service>
                                <Area>Circulación y préstamos de equipos audiovisuales</Area>

                                <ScheduleTitle>LUNES A VIERNES</ScheduleTitle>
                                <Schedule>8:00 a.m. - 12:00 p.m. / 1:00 p.m. - 5:00 p.m.</Schedule>

                                <ScheduleTitle>SÁBADO</ScheduleTitle>
                                <Schedule>8:00 a.m. - 12:00 p.m.</Schedule>
                            </ScheduleContainer>
                        </Col>
                    </Row>
            </ StylesContainer>
        </SectionStyles>
    );

}


export default BibliotecaHorario;

const SectionStyles =styled(Section)`
&::before{
    content: '';
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.color};
}
`;

const StylesContainer = styled(Container)`
    box-shadow: 0 .7rem  0.7rem  rgba(0,0,0,0.15);
    border-radius: 15px;
    padding-bottom: 4rem;
    position: relative;
    margin-bottom: 50px;
    background: white;
`;


const SectionTitle = styled.h2`
    margin-top: 7rem;
    margin-bottom: 2rem;
    text-align: center;
`;

const Icon = styled.div`
    ${({bgColor="#00A4E5"})=>css`
        position: relative;
        display: block;
        margin: 0 auto;
        bottom: -5rem;
        width: 100px;
        background-color: ${bgColor};
        padding-bottom: 100px;
        border-radius: 50%;
        z-index: 2;
        svg{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.5);
            fill: white;
        }
    `}
`;

const ScheduleContainer = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`;

const Service = styled.p`
    margin-bottom: 0;
    color: green;
    font-weight: bold;
`;

const Area = styled.p``;

const ScheduleTitle = styled.p`
    margin-bottom: 0;
`;

const Schedule = styled.p``;