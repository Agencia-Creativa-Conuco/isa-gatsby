import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col} from "../../components/layout/index";
import Link from "../../components/link";
import colors from '../../components/styles/colors';
import useDepartamentos from "../../hooks/useDepartamentos";

const FacultadAreas = ({ facultad }) =>{
    
    const { 
        color = colors.primary.base
    } = facultad;

    const departamentos = useDepartamentos().filter( departament => departament.facultad.id === facultad.id );
    
    return departamentos.length?(
        <SectionStyles spaceTopNone >
            <Container> 
                <Row>
                    <Col>
                        <Card>
                            <Row>      
                                <Col size={12} noGutters>
                                    <SectionTitle color={ color  } > Areas Académicas </SectionTitle>
                                </Col>
                                <Col size={10} sizeMD={7} mxAuto   > 
                                    <List>
                                    {
                                        departamentos.filter((departament)=>{
                                            return departament.carreras.length;
                                        })
                                        .map((departament, index)=>{
                                            
                                            const {
                                                nombre,
                                                uri,
                                            } = departament;

                                            return(
                                                <Item key={index}>
                                                    <SLink 
                                                        to={uri}
                                                        color={ color  } 
                                                        color2={colors.text.base}
                                                    >
                                                        {nombre}
                                                    </SLink>
                                                </Item>
                                            )
                                        })
                                    }
                                    </List>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>        
            </ Container>
        </SectionStyles>
    ):null;

}

export default FacultadAreas;

const SectionStyles =styled(Section)`
    margin-top: -10rem !important;
`;

const Card = styled.div`
    box-shadow: 0 0.7rem 2rem  rgba(0,0,0,0.15);
    border-radius: 15px;
    padding-bottom: 4rem;
    position: relative;
    margin-bottom: 50px;
    background: white;
`;

const SectionTitle = styled.h2`
    margin-top: 4rem;
    margin-bottom: 2rem;
    text-align: center;
    color: ${props => props.color};
`;


const SLink = styled( Link )`
    text-decoration: none;
    color: ${props => props.color2};
    position:relative;
    display: block;
    
    &:hover{
        cursor: pointer;
        color:${props => props.color} 
    }

    &:before {
        content: "•";
        transform-origin: 50% 50%;
        transform: scale(2);
        display: inline-block;
        margin-right: 1rem;
        margin-left: -1.5rem;
    }
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
`;

const Item = styled.li`
    list-style: none;
    line-height: 1;
`;
