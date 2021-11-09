import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {Section, Container, Row, Col, mq} from "../../components/layout/index";
import {PensumIcon} from "../../components/icons";
import useRecursos from "../../hooks/useRecursos";

const CarreraPensum = ({ carrera, facultad })=>{

    const {
        recursos = []
    } = carrera;

    
    const pensums = useRecursos().filter((recurso)=>{
        
        const {
            id,
            tipoRecurso
        } = recurso;

        //verifica que el recurso esta enlazado a la carrera
        const esRecurso = recursos.filter( (item) => item.id === id ).length

        return tipoRecurso === "pensum" && esRecurso;
    });

    const facultyColor = facultad.color;

    return pensums.length?(
        <Section css={sectionStyles}>
            <Container>
                <Row>
                {
                    pensums.map((pensum, index)=>{
                        const{
                            nombre,
                            archivo
                        } = pensum;

                        return(
                            <Col size={12} sizeSM="auto" mxAuto key={index}>
                                <Card>
                                    <CardLink
                                        href={archivo}
                                        download
                                    >
                                        <Row alignCenter>
                                            <Col>
                                                <CardSpan color={facultyColor}>Descargar</CardSpan>
                                                <CardTitle color={facultyColor}>{ nombre }</CardTitle>
                                            </Col>
                                            <Col size="auto">
                                                <CardIcon color={facultyColor}>
                                                    <PensumIcon />
                                                </CardIcon>
                                            </Col>
                                        </Row>
                                    </CardLink>
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

export default CarreraPensum;

const sectionStyles = css`
    margin-top: -10rem;
    ${mq.md}{
        margin-top: -15rem;
    }
`;

const Card = styled.div`
    box-shadow: .5rem .5rem .5rem rgba(0,0,0,0.15);
    background-color: white;
    border-radius: 1.5rem;
    max-width: 32rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
`;

const CardLink = styled.a`
    padding: 1.5rem;
    display: block;
    text-decoration: none;
    cursor: pointer;
    color: inherit;
`;

const CardTitle = styled.h3`
    ${({color="green"})=>css`
        color: ${color};
        text-transform: uppercase;
        font-weight: 900;
        margin: 0;
        font-size: 2rem;
    `}
`;

const CardSpan = styled.span`
    ${({color="green"})=>css`
        color: ${color};
        text-transform: uppercase;
        font-weight: 300;
    `}
`;

const CardIcon = styled.div`
    ${({color="green"})=>css`
        max-width: 8rem;
        color: ${color};
    `}
`;