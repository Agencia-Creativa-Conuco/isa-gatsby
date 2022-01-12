import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq, mqVal} from "./layout/index";
import FeaturedMedia from "./featured-media";
import Carousel from "react-slick";
import {LeftArrowIcon, RightArrowIcon} from "./icons";
import colors from './styles/colors';


const TeamSlider = ({ investigadores = [], title = "Equipo de investigación" }) =>{



  investigadores.map((item) => {
    item.nombre = item.nombre.charAt(0).toUpperCase() + item.nombre.slice(1);
    return item;
  });

  //ordena de forma alfabética
  const researchers = investigadores.sort((a, b) => {
    if (a.nombre < b.nombre) return -1;
    if (a.nombre > b.nombre) return 1;
    return 0;
  });
    
    const Arrows = (props => {
  
        const Arrow = styled.div`
          ${({bgColor="blue"})=>css`
            padding: 1rem;
            border-radius: 50%;
            background-color: ${bgColor};
            color: white;
            width: 5rem;
            height: 5rem;
            margin: 2rem;
            z-index: 2;
            ${mq.md}{
              transform: translate(0, -100%);
            }
            &:focus{
                background-color: ${bgColor};
                color: white;
            }
            &:hover{
                background-color: ${bgColor};
                color: white;
            }
            &:before{
              content: initial;
            }
          `}
        `;
      
        return(
          <Arrow {...props}/>
        )
      
      })

    return researchers.length ?(
        <BGSection spaceNone bg={ colors.gray.light } >
            <Container fluid notFluidLG>
                <Row>
                    <Col size={12}>
                        <SectionTitle> { title } </SectionTitle>
                    </Col>
                    <Col size={12}>
                        <Carousel
                            className= "center"
                            infinite
                            fade
                            rows={2}
                            slidesPerRow={4}
                            prevArrow={<Arrows bgColor={colors.primary.base}><LeftArrowIcon/></Arrows>}
                            nextArrow={<Arrows bgColor={colors.primary.base}><RightArrowIcon/></Arrows>}
                            responsive={[
                                {
                                    breakpoint:mqVal.lg,
                                    settings:{
                                        rows:2,
                                        slidesPerRow:3,
                                    }
                                },
                                {
                                    breakpoint:mqVal.md,
                                    settings:{
                                        rows:2,
                                        slidesPerRow:2,
                                    }
                                },
                                {
                                    breakpoint:mqVal.sm,
                                    settings:{
                                        rows:2,
                                        slidesPerRow:1,
                                    }
                                }
                            ]}
                        >
                            { 
                                researchers.map((item, index) =>{
                                    const {
                                        nombre,
                                        imagenPortada,
                                        puestoTrabajo,
                                        tituloAcademicoAbreviado,
                                    } = item;

                                    return(
                                        <Card key={index}>
                                            <Media>
                                                <FeaturedMedia 
                                                    media={imagenPortada}
                                                    size="100%"
                                                    bgColor={colors.gray.base}
                                                />
                                            </Media>
                                            <DivTitle>
                                                <Name>{tituloAcademicoAbreviado? `${tituloAcademicoAbreviado} `: ""}{nombre}</Name>
                                                <JobTitle>{ puestoTrabajo }</JobTitle>
                                            </DivTitle>
                                        </Card>
                                    )
                                })
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </BGSection>      
    ):null ;
}


export default TeamSlider;


const BGSection = styled(Section)`
    background: ${props => props.bg};
    padding: 4rem 0;
    z-index: 3;
`;

const Card = styled.article`
    margin-bottom: 4rem;
    vertical-align: top;
`;

const Media = styled.div`
    border-radius: 50%;
    overflow: hidden;
    max-width: 18rem;
    margin: 0 auto;
`;


const DivTitle = styled.div`
    text-align: center;
`;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 4rem;
`;

const Name = styled.h3`
    font-weight: bold;
    margin-bottom: 0;
    font-size: 2rem;
`;

const JobTitle = styled.p`
    color: black;
`;