import React from 'react';
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import {useState} from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import colors from '../../../components/styles/colors';

import {Spring, animated} from "@react-spring/web";

const NosotrosPhilosophy = () =>{

    const tabs = [
        {
            title: "Perfil Universidad ISA",
            content: `
                <p>Universidad ISA es una institución privada con fines no lucrativos, de proyección nacional e internacional, que busca estimular el talento humano y la creación del conocimiento científico como ejes fundamentales para impulsar, de manera sostenible, el desarrollo social, económico y ambiental, sin distinción de raza, credo, preferencia sexual, condición social o económica.</p>
                <p>ISA propicia en sus aulas el desarrollo de líderes visionarios, guiados por los valores de honestidad, responsabilidad, respeto, compromiso social y calidad. Forma hombres y mujeres pragmáticos, disciplinados, con capacidad de emprender iniciativas empresariales, poseedores de una fuerte sensibilidad social y de espíritu de servicio. </p>
                <p>La Universidad desarrolla todo su accionar en un ambiente democrático, apolítico, innovador, abierto a la diferencia de opiniones y con respeto a la dignidad humana. Cree firmemente que todo programa académico debe integrar armónicamente la teoría, la práctica, la investigación y el servicio, como vía para construir perfiles laborales consistentes con los requerimientos competitivos de los diferentes sectores de la sociedad.</p>
                <p>La excelencia en el proceso educativo, la formación integral, el uso de metodologías novedosas que desarrollen la capacidad analítica y la aplicación del conocimiento, forman parte de la esencia de la Universidad. Su profunda vocación de servicio y contacto permanente con los sectores productivos y sociales del país, le permiten el mejoramiento continuo de sus programas basado en los cambios y desafíos del entorno.</p>
            `
        },
        {
            title: "Misión",
            content: `
                <p>Contribuir al desarrollo social, económico y ambiental, a través de un quehacer académico y científico enfocado en:</p>
                <ul>
                    <li>Formación de Recursos Humanos íntegros, competentes, visionarios y pragmáticos. </li>
                    <li>Desarrollo de investigaciones estratégicas enfocadas en la búsqueda de soluciones a las problemáticas y necesidades que enfrentan los sectores productivos y sociales, así como impulsar la transferencia de las tecnologías resultantes. </li>
                    <li>Servicios de soporte que mejoren la competitividad de los sectores productivos, empresariales y sociales.</li>
                </ul>
            `
        },
        {
            title: "Visión",
            content: `
                <p>Ser una Universidad reconocida, nacional e internacionalmente, por la excelencia de sus egresados, su enfoque tecnológico, su aporte a la competitividad de los sectores productivos y al desarrollo económico y social del país.</p>
            `
        },
        {
            title: "Valores",
            content: `
                <ul>
                    <li>Honestidad</li>
                    <li>Responsabilidad</li>
                    <li>Respeto</li>
                    <li>Compromiso social</li>
                    <li>Calidad</li>
                </ul>
            `,
        },
        {
            title: "Principios",
            content: `
                <ul>
                    <li>Equidad e Igualdad</li>
                    <li>Formación integral</li>
                    <li>Democracia </li>
                    <li>Servicio</li>
                    <li>Excelencia</li>
                    <li>Liderazgo</li>
                    <li>Innovación</li>
                    <li>Pensamiento crítico</li>
                    <li>Respeto a la dignidad humana</li>
                    <li>Respeto al ambiente</li>
                    <li>Identidad cultural</li>
                    <li>Apoliticidad</li>
                </ul>
            `,
        }
    ];

    // Index 0 by default
    const [view, setView] = useState( 0 );

    const handlerView = value => setView(value);

    return (
        <StyledSection spaceBottomNone bgColor={colors.blue.dark} decoBg={colors.blue.base} id="section_3" >
            <Container>
                <DecoContainer bgColor={colors.gray.light} />
                <Row>
                    <Col  
                        noGutterns 
                        size={12} 
                        sizeLG={6}
                        orderLG={1}
                        order={2}
                        css={colStyle({
                            active:view? true: false,
                            bgColor:colors.blue.dark
                        })}
                    >
                        {tabs.map( (item,i) => {
                                const {
                                    title,
                                    content
                                } = item;

                                const isActive = view === i;

                                return(
                                    <Spring
                                        key={i} 
                                        reset={ isActive}
                                        from={{ opacity: 0}}
                                        to={[
                                        { opacity: 1},
                                        ]}
                                    >
                                    {
                                        styles =>(
                                            <animated.div style={styles}>
                                                <CardInfo 
                                                    key={i} 
                                                    bg={colors.blue.dark}
                                                    active={isActive}
                                                >
                                                    <CardTitle>{title}</CardTitle>
                                                    <div dangerouslySetInnerHTML={{__html: content}} />
                                                </CardInfo>
                                            </animated.div>
                                        )
                                    }

                                    </Spring>
                                )
                            })}
                    </Col>
                    <Col  
                        order={1}
                        orderLG={2} 
                        mlAuto
                    >
                        <List bgColor={colors.gray.light} decoBg={colors.blue.dark}>
                        {tabs.map( (item,i) => {
                            
                            const {
                                title
                            } = item;

                            const isActive = view === i;
                            
                            return(
                                <Item 
                                    key={i} 
                                    onClick={()=> handlerView(i)} 
                                    active={isActive}
                                    bg={colors.gray.light}
                                    bgA={colors.secondary.base}
                                    decoBg={colors.blue.dark}
                                >
                                    {title}   
                                </Item>
                            )
                        })}
                        </List>
                    </Col>
                </Row>
               
            </Container>
        </StyledSection>
    );

}

export default NosotrosPhilosophy;

const StyledSection = styled(Section)`
    ${({bgColor="blue", decoBg="red"})=>css`
        background-color: white;
        &:before{
            content:'';
            background-color: ${bgColor};
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            ${mq.lg}{
                width: 50%;
            }
        }
        &:after{
            content:'';
            position:absolute;
            background: ${decoBg};
            width: 15%;
            padding-bottom: 15%;
            bottom: 0;
            right: 0;
            border-radius: 50%;
            transform: translate(50%, 50%);
            opacity: 0.8;
        }
    `}
`

const DecoContainer = styled.div`
    position: relative;
    content:"";
    background:${ props => props.bgColor};
    width: 100%;
    padding-bottom: 13%;
    position: absolute;
    top: 0;
    left:0;
    margin-top: -5rem;
    display: none;
    ${mq.lg}{
        display: block;
    }
`

const colStyle = ({active, bgColor="blue"}) => css`
    background-color: ${bgColor};
`;

const CardInfo = styled.div`
    display: none;
    margin-top: 4rem;
    min-height: 40rem;
    color: white;
    padding-bottom: 4rem;

    ${mq.lg}{
        min-height: 70rem;
        margin-top: 6rem;
    }
    ${props => props.active?`
        display: block;
    `:""};
`;

const CardTitle = styled.h2`
    color: white;
    text-transform: uppercase;
    margin-bottom: 5rem;
`;

const List = styled.ul`
    ${({bgColor="lightgray", decoBg="blue"})=>css`
        padding: 1rem 0;
        max-width: 75rem;
        margin: 0 auto;
        text-align: center;
        background-color: ${bgColor};
        margin-top: -4rem;
        position: relative;
        ${mq.lg}{
            text-align: left;
            background-color: initial;
            margin-top: initial;
            padding: 0;
            padding-left: 3rem;
        }
        &:before{
            content:'';
            position: absolute;
            top: 0;
            right: 0;
            width: 3rem;
            padding-bottom: 3rem;
            background-color: ${decoBg};
            border-radius: 50%;
            transform: translate(-50%, -50%);
            ${mq.lg}{
                width: 6rem;
                padding-bottom: 6rem;
                transform: translate(0%, -120%);
            }
        }
    `}
`;

const Item = styled.li`
    display: inline-block;
    list-style: none;
    font-size: 2rem;
    text-transform: uppercase;
    cursor: pointer;
    padding: 1rem;
    margin: 0;
    ${mq.lg}{
        display: block;
        font-size: 3rem;
    }

    ${props => props.active?`
        font-weight: 600;
        text-decoration: underline;
        text-decoration-color: ${props.bgA};
        text-decoration-thickness: 0.3rem;
        transition: padding 900ms  ease-out;
    `:""};
`;