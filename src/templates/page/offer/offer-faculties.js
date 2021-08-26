import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import { useState } from "react";
import Link from "../../../components/link";
import {Spring, animated} from "@react-spring/web";
import colors from '../../../components/styles/colors';
import useCareers from '../../../hooks/useCareers';
import useFaculties from "../../../hooks/useFaculties";
import useGrades from '../../../hooks/useGrades';
import useDepartaments from '../../../hooks/useDepartaments';

const OfferFaculties = ({ page }) =>{

    //Obtiene y ordena los grados a mostrar en el menú
    const grades = useGrades().sort((a,b)=>a.order - b.order);

    const faculties = useFaculties();
    
    const departaments = useDepartaments();
    
    const careers = useCareers();

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
                                            grades.map((item,index)=>{
                                                return( 
                                                    <Option
                                                        key={item.id}
                                                        onClick={ (e) => setView( view === index ? view : index ) }
                                                        active={view === index} 
                                                        color={view === index ? colors.blue.dark : colors.white} 
                                                        >  
                                                        {item.title}
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
                        grades.map((grade, index) =>{
                        
                            const isActive = view === index;

                            //Retorna las carreras que pertenecen al grado seleccionado.
                            const careerList = careers.filter( career => {
                                return  grade.id === career.grade.id 
                            } );

                            //Retorna las facultades que tienen carreras del grado seleccionado.
                            const facultyList = faculties.filter( faculty => {
                                return faculty.careers.filter( career => careerList.map( item => item.id ).includes(career.id)).length;
                            });

                            //Retorna los departamentos que tienen carreras del grado seleccionado. 
                            const departamentList = departaments.filter( departament => {
                                return departament.careers.filter( career => careerList.map( item => item.id ).includes(career.id)).length;
                            })

                            return faculties.length > 0?(
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
                                                            facultyList.map( faculty => {

                                                                return (
                                                                    <Col key={faculty.id} size={12}>
                                                                        <Link to={faculty.uri}>
                                                                            <Title 
                                                                                color={colors.primary.dark} 
                                                                                bgHover={colors.gray.light}
                                                                                isFaculty
                                                                            >{faculty.title}</Title>
                                                                        </Link>
                                                                        <Row>
                                                                        {
                                                                            careerList.filter( career => {
                                                                                return !career.departament && faculty.id === career.faculty.id;
                                                                            } )
                                                                            .map( career => {
                                                                                return (
                                                                                    <Col key={career.id} size={12} sizeMD={6}>
                                                                                        <Link to={career.uri}>
                                                                                            <Title 
                                                                                                color={colors.text.base} 
                                                                                                bgHover={colors.gray.light}
                                                                                                isCareer
                                                                                            >{career.title}</Title>
                                                                                        </Link>
                                                                                    </Col>
                                                                                ) 
                                                                            })
                                                                        }
                                                                        </Row>
                                                                        <Row>
                                                                        {
                                                                            departamentList.filter( departament => {
                                                                                return faculty.id === departament.faculty.id;
                                                                            } )
                                                                            .map( departament => {
                                                                                return (
                                                                                    <Col key={departament.id} size={12} sizeMD={6}>
                                                                                        <Link to={departament.uri}>
                                                                                            <Title 
                                                                                                color={colors.primary.base} 
                                                                                                bgHover={colors.gray.light}
                                                                                            >{departament.title}</Title>
                                                                                        </Link>
                                                                                        <Row>
                                                                                        {
                                                                                            careerList.filter( career => {
                                                                                                return departament.id === career?.departament?.id;
                                                                                            } )
                                                                                            .map( career => {
                                                                                                return (
                                                                                                    <Col key={career.id} size={12}>
                                                                                                        <Link to={career.uri}>
                                                                                                            <Title 
                                                                                                                color={colors.text.base} 
                                                                                                                bgHover={colors.gray.light}
                                                                                                                isCareer
                                                                                                            >{career.title}</Title>
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
            font-weight: 300;
        `: css`
            font-weight: 400;
        `}
    `}
`;
