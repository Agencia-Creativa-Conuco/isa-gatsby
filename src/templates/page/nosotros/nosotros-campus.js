import React,{useState, useEffect} from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import Carousel from "react-slick";
import {LeftArrowIcon, RightArrowIcon} from "../../../components/icons";
import colors from '../../../components/styles/colors';
import { useStaticQuery, graphql } from 'gatsby';
import useGlobalOption from '../../../hooks/useGlobalOption';
import  ReactPlayer  from  'react-player';

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


const NosotrosCampus = () =>{

        //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
  query {
    allFile(filter: { relativeDirectory: { in: ["nosotros"] } }) {
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
const [isPlaying, setIsPlaying] = useState(false);
// const [isPause, setIsPause] = useState(false);



const [{videoInstitucional}] =useGlobalOption();


// function Player() {
  const handleisPlaying = () => {
    console.log("before playing?", isPlaying);
    setIsPlaying(false);
    console.log("after playing?", isPlaying);
  };


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
        <Section spaceNone id="section_5" >
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
                        <button onClick={handleisPlaying}>pause</button>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel
                           
                            prevArrow={<Arrows bgColor={"white"} color={colors.primary.dark}  ><LeftArrowIcon/></Arrows>}
                            nextArrow={<Arrows bgColor={"white"} color={colors.primary.dark}><RightArrowIcon/></Arrows>}
                            beforeChange={() =>  setIsPlaying(false) }
                        >

                        {
                            Object.values(images).filter((item) => item.name.includes("campus")).map((item, index) => {
                                
                                return videoInstitucional && index < 1 ? (
                                
                                   <DivVideo key={item.id} >
                                    <ReactPlayer
                                      width="100%"
                                      height= "100%"
                                      css={reactPlayer}
                                      // controls
                                      url={videoInstitucional}
                                      playing={isPlaying}
                                      onStart={() => setIsPlaying(true)}
                                      // onPause={() => isPlaying}
                                      onPlay={() =>  setIsPlaying(false)}
                                      // onEnded={() => setIsPlaying(false)}
                                    />
                                  </DivVideo>                    
                                ):(

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

export default NosotrosCampus;


const SectionTitle = styled.h2`
    text-align: center;
    margin-top: 4rem;
    ${mq.lg}{
        margin-top: -5rem;
        margin-bottom: 0;
    }
`;

const DivVideo = styled.div`
  position: relative;
  /* z-index: -1; */

  padding-top: 56.25%;

  ${mq.xl} {
    padding-top: 40.25%;
  }

`;

const reactPlayer = css`
  position: absolute;
  top: 0;
  left: 0;
`;