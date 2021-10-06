import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import Carousel from "react-slick";
import {LeftArrowIcon, RightArrowIcon} from "../../components/icons";
import colors from '../../components/styles/colors';
import { useStaticQuery, graphql } from 'gatsby';

const Arrows = (props => {

    const Arrow = styled.div`
      ${({bgColor="blue", color="white"})=>css`
        padding: 1rem;
        border-radius: 50%;
        background-color: ${bgColor};
        color: ${color};
        width: 5rem;
        height: 5rem;
        margin: 0 3rem;
        z-index: 2;
        position: absolute;
        top: 50%;
        display: none !important;
        ${mq.lg}{
            display: block !important;
        }
        &:focus{
          background-color: ${bgColor};
          color: ${color};
        }
        &:hover{
          background-color: ${bgColor};
          color: ${color};
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


const AboutCampus = () =>{

        //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
  query {
    allFile(filter: { relativeDirectory: { in: ["oferta-academica"] } }) {
      nodes {
        id
        name
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`);

// Convierte arreglo de imágenes en objeto cuya llave es el nómbre del archivo
// Esto para facilitar la búsqueda de la imagenes en los componentes hijos.
const images = allFile.nodes.reduce((obj, item) => {
  return {
    ...obj,
    [item.name]: item,
  };
}, {});
    
    const title = "Nuestro campus";

    return Object.values(images).length?(
        <Section spaceNone>
            <Container
                fluid 
                noGutters
            >
                <Row>
                    <Col 
                        sizeLG={6}
                        mlAuto
                    >
                        <SectionTitle>{ title }</SectionTitle>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel
                            prevArrow={<Arrows bgColor={"white"} color={colors.primary.dark}><LeftArrowIcon/></Arrows>}
                            nextArrow={<Arrows bgColor={"white"} color={colors.primary.dark}><RightArrowIcon/></Arrows>}
                        >
                        {
                            Object.values(images).filter((item) => item.name.includes("campus")).map((item, index) => {
                                
                                return (
                                    <FeaturedMedia 
                                        key={item.id}
                                        media={item}
                                        size="56.25%"
                                        sizeXL="40%"
                                        bgColor={colors.gray.light}
                                        alt={`Campus Universidad ISA - ${index}`}
                                    />
                                )
                        })}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default AboutCampus;

// const colStyles = css`
//     padding: 1.5rem;
//     margin-top: -1.5rem;
// `;

const SectionTitle = styled.h2`
    text-align: center;
    margin-top: 4rem;
    ${mq.lg}{
        margin-top: -5rem;
        margin-bottom: 0;
    }
`;