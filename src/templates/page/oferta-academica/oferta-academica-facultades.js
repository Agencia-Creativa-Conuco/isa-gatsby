import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import { useState } from "react";
import Link from "../../../components/link";
import {Spring, animated} from "@react-spring/web";
import colors from '../../../components/styles/colors';
import useCarreras from '../../../hooks/useCarreras';
import useFacultades from "../../../hooks/useFacultades";
import useGrados from '../../../hooks/useGrados';
import useDepartamentos from '../../../hooks/useDepartamentos';

const OfferFaculties = () =>{

    //Obtiene y ordena los grados a mostrar en el menú
    const grados = useGrados().sort((a,b)=>a.order - b.order);

    const facultades = useFacultades();
    
    const departamentos = useDepartamentos();
    
    const carreras = useCarreras();

    const [view, setView] = useState(0);

    return (
        <StyledSection spaceNone  color={colors.gray.base}>
            <Container fluid>
                <Row>
                    <StyledCol size={12} sizeLG={2} bg={colors.blue.base} mxAuto>
                        <Section as="div">
                            <Container>
                                <Row>
                                    <Col>
                                        <Menu>
                                        {
                                            grados.map((item,index)=>{
                                                return( 
                                                    <Option
                                                        key={item.id}
                                                        onClick={ (e) => setView( view === index ? view : index ) }
                                                        active={view === index} 
                                                        color={view === index ? colors.blue.dark : colors.white} 
                                                        >  
                                                        {item.nombre}
                                                    </Option>                                       
                                                )
                                            })
                                        }
                                        </Menu>
                                    </Col>
                                </Row>
                            </Container>
                        </Section>
                    </StyledCol>  

                    <NavCol size={12} sizeLG={8} lineColor={colors.gray.base}>
                    {
                        grados.map((grado, index) =>{
                        
                            const isActive = view === index;

                            //Retorna las carreras que pertenecen al grado seleccionado.
                            const listaDeCarreras = carreras.filter( carrera => {
                                return  grado.id === carrera.grado.id 
                            } );

                            //Retorna las facultades que tienen carreras del grado seleccionado.
                            const facultyList = facultades.filter( facultad => {
                                return facultad.carreras.filter( carrera => listaDeCarreras.map( item => item.id ).includes(carrera.id)).length;
                            });

                            //Retorna los departamentos que tienen carreras del grado seleccionado. 
                            const listaDeDepartamentos = departamentos.filter( departamento => {
                                return departamento.carreras.filter( carrera => listaDeCarreras.map( item => item.id ).includes(carrera.id)).length;
                            })

                            return facultades.length > 0?(
                                <Wrapper key={index} hidden={!isActive}>
                                    <Section as="div">
                                        <Spring
                                            reset={ isActive}
                                            from={{ marginTop: "-100%", opacity: 0}}
                                            to={[
                                            { marginTop: "0", opacity: 1},
                                            ]}
                                        >
                                        {
                                            styles =>(
                                                <Anim style={styles}>
                                                    <Container>
                                                        <Row>
                                                        {
                                                            facultyList.map( facultad => {

                                                                return (
                                                                    <Col key={facultad.id} size={12}>
                                                                        <Link to={facultad.uri}>
                                                                            <Title 
                                                                                color={colors.primary.dark} 
                                                                                bgHover={colors.gray.light}
                                                                                isFaculty
                                                                            >{facultad.nombre}</Title>
                                                                        </Link>
                                                                        <Row>
                                                                        {
                                                                            listaDeCarreras.filter( carrera => {
                                                                                return !carrera?.departamento?.id && facultad.id === carrera?.facultad?.id;
                                                                            } )
                                                                            .map( carrera => {
                                                                                return (
                                                                                    <Col key={carrera.id} size={12} sizeMD={6}>
                                                                                        <Link to={carrera.uri}>
                                                                                            <Title 
                                                                                                color={colors.text.base} 
                                                                                                bgHover={colors.gray.light}
                                                                                                isCareer
                                                                                            >{carrera.nombre}</Title>
                                                                                        </Link>
                                                                                    </Col>
                                                                                ) 
                                                                            })
                                                                        }
                                                                        </Row>
                                                                        <Row>
                                                                        {
                                                                            listaDeDepartamentos.filter( departamento => {
                                                                                return facultad.id === departamento?.facultad?.id;
                                                                            } )
                                                                            .map( departamento => {
                                                                                return (
                                                                                    <Col key={departamento.id} size={12} sizeMD={6}>
                                                                                        <Link to={departamento.uri}>
                                                                                            <Title 
                                                                                                color={colors.primary.dark} 
                                                                                                bgHover={colors.gray.light}
                                                                                            >{departamento.nombre}</Title>
                                                                                        </Link>
                                                                                        <Row>
                                                                                        {
                                                                                            listaDeCarreras.filter( carrera => {
                                                                                                return departamento.id === carrera?.departamento?.id;
                                                                                            } )
                                                                                            .map( carrera => {
                                                                                                return (
                                                                                                    <Col key={carrera.id} size={12}>
                                                                                                        <Link to={carrera.uri}>
                                                                                                            <Title 
                                                                                                                color={colors.text.base} 
                                                                                                                bgHover={colors.gray.light}
                                                                                                                isCareer
                                                                                                            >{carrera.nombre}</Title>
                                                                                                        </Link>
                                                                                                    </Col>
                                                                                                ) 
                                                                                            })
                                                                                        }
                                                                                        </Row>
                                                                                    </Col>
                                                                                ) 
                                                                            })
                                                                        }
                                                                        </Row>
                                                                    </Col>
                                                                )
                                                            })
                                                        }
                                                        </Row>
                                                    </Container>
                                                </Anim>
                                            )
                                        }
                                        </Spring>
                                    </Section>
                                </Wrapper>                            
                            ):null
                                
                        })
                    }
                     
                    </NavCol>
                </Row>
            </Container>
        </StyledSection>
    );

}

export default OfferFaculties;

const Anim = styled(animated.div)`
`;

const StyledSection = styled(Section)`
    overflow: hidden;
    ${mq.lg}{
        box-shadow: 0 0 .5rem rgba(0,0,0,.15) inset;
    }
`;

const StyledCol = styled(Col)`
    &:before{
        content: '';
        background: ${props => props.bg};
        position: absolute;
        top: 0;
        left: 50%;
        width: 150%;
        height: 100%;
        transform: translate(-50%);
        ${mq.lg}{
            width: 120%;
        }
    }
`;

const NavCol = styled(Col)`
    &:before{
        content: '';
        position: absolute;
        background:  ${props => props.lineColor};
        opacity: 0.4;
        top: 50%;
        left: 0%;
        width: .2rem;
        height: 40%;
        transform: translate(0, -50%);
    }
`;

const Menu = styled.ul`
    position: relative;
    list-style: none;
    margin: 0;
`;

const Option = styled.li`
    ${({active, color="white"})=>css`
        font-size: 2.7rem;
        font-weight: bold;
        color: ${color};
        transition: all 0.25s ease-in-out;
        margin: 0;
        margin-bottom: 1rem;
        ${active?css`
            transform-origin: 0% 50%;
            transform: scale(1.15);
        `:css``}
        &:hover{
            cursor: pointer;
        }
    `}
`;

const Wrapper  = styled.div``;

const Title = styled.span`
    ${({isFaculty, isCareer, color="blue", bgHover="lightgray"})=>css`
        color: ${color};
        padding: .5rem 1.5rem;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 2rem;
        display: inline-block;
        ${mq.md}{
            display: inline-block;
        }
        &:hover{
            background-color: ${bgHover};
        }
        ${isFaculty?css`
            font-weight: 900;
        `: isCareer? css`
            text-transform: capitalize;
            font-weight: 400;
        `: css`
            font-weight: 300;
            text-transform: capitalize;
        `}
    `}
`;
