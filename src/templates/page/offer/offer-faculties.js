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

const Item = ({item, state})=>{
    
    const {
        title,
        uri,
        parent,
        type,
        careers = [],
        children = []
    } = item;

    const isMain = parent?false: true;

    const isCareer = type === "career";

    return (
        <Col size={12} sizeMD={isCareer? 12 : isMain? 12 : 6 }>
            <Component>
                <Link to={uri} noDecoration>
                    <Title 
                        color={isCareer?colors.text.base:colors.primary.dark} 
                        bgHover={colors.gray.light}
                        {...{isMain, isCareer}}
                    >{title}</Title>
                </Link>
                {
                    careers.length?(
                        <ItemList items={careers} />
                    ):null
                }
                {
                    children.length?(
                        <ItemList items={children} />
                    ):null
                }
            </Component>
        </Col>
    );

}

const Component = styled.li`
    list-style: none;
    padding: 0;
    margin: 0;
`

const Title = styled.span`
    ${({isMain, isCareer, color="blue", bgHover="lightgray"})=>css`
        color: ${color};
        padding: .5rem 1.5rem;
        text-transform: uppercase;
        font-size: 2rem;
        display: block;
        ${mq.md}{
            display: inline-block;
        }
        &:hover{
            background-color: ${bgHover};
        }
        ${isMain?css`
            font-weight: 900;
        `: isCareer? css`
            text-transform: capitalize;
            font-weight: 600;
        `: css`
            font-weight: 300;
        `}
    `}
`;

const ItemList = ({items})=>{

    return (
        <Container noGutters>
            <StyledRow as="ul">
            {
                items.map((item,index)=>{
                    return (
                        <Item key={index} item={item} />
                    )
                })
            }
            </StyledRow>
        </Container>
    )
} 

const StyledRow = styled(Row)`
    padding: 0;
`;

//Construye la jerarquía completa facultades->departamentos->grados->carreras
const hierarchy = ({faculties=[], departaments=[], careers=[], grade}) => {

    return faculties
         .map((faculty)=>{

            return {
                ...faculty,
                children: departaments.filter((item) => item.faculty.id === faculty.id),
                careers: careers.filter((career)=>{
                    return (career?.faculty?.id === faculty.id)
                })
            }
         })
         .filter((faculty)=>faculty.children.length || faculty.careers.length)
 }

const OfferFaculties = ({ page }) =>{

    //Obtiene los datos de los Careeras
    const careers = useCareers();

    //Obtiene las facultades que tienen carreras relacionadas.
    const faculties = useFaculties();

    //Obtiene los departamentos que tienen carreras relacionadas.
    const departaments = useDepartaments();

    //Obtiene y ordena los grados a mostrar en el menú
    const grades = useGrades().sort((a,b)=>a.order - b.order);

    console.log(faculties, departaments)
    const [view, setView] = useState(0);

    return careers.length && faculties.length?(
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
                        grades.map((item, index) =>{
                        
                            const items = hierarchy({ faculties, departaments, careers, grade: item.id});

                            const isActive = view === index;

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
                                                    <ItemList items={items}/>
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
    ):null;

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