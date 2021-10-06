import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from "../../components/styles/colors";
import Cta from '../../components/cta';
import { useStaticQuery, graphql } from 'gatsby';

const AboutCover = () =>{

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

// Convierte arreglo de imágenes en objeto cuya llave es el nómbre del archivo
// Esto para facilitar la búsqueda de la imagenes en los componentes hijos.
const images = allFile.nodes.reduce((obj, item) => {
  return {
    ...obj,
    [item.name]: item,
  };
}, {});

    const title = "UNIVERSIDAD ISA";
    const copy = "La Universidad ISA es una institución de educación superior, privada, sin fines de lucro, amparada en la ley 139-01 del día 13 de agosto de 2001.";
    const cta = {
        title : "Estudia con nosotros",
        url : "/admisiones",
        target: null
    }

    return (
        <Section spaceNone css={sectionStyles}>
            <Container  fluid>
                <Row alignCenter >
                    <Col 
                        size={12} 
                        sizeMD={5}
                        sizeLG={6} 
                        zIndex={2}
                        order={2} 
                        orderMD={1}
                    >
                        <Content decoBg={colors.blue.base}>
                        
                            <SectionTitle> {title} </SectionTitle>
                            <Copy>{ copy } </Copy>

                            
                            {
                                cta.url && cta.title?(
                                    <Cta 
                                        to={cta.url}
                                        target={cta.target}
                                    >
                                        { cta.title }
                                    </Cta>
                                ):null
                            }
                        
                        </Content>
                    </Col>
                    <Col 
                     size={11} 
                     sizeSM={10}
                     sizeMD={7}
                     sizeLG={6}
                     order={1} 
                     orderMD={2}
                     mlAuto
                     noGutters
                    >
                        <Media decoBg={colors.blue.base}>
                            <Logo
                                media={images.cover}
                                alt="Sobre Universidad ISA"
                                size="100%"
                                sizeXL="90%"
                                bgColor
                            />
                            <DivCube 
                                decoBg={colors.primary.base} 
                                decoBgA={colors.primary.light}
                                decoBgB={colors.primary.base}
                            />
                        </Media>
                    </Col>
                </Row>
            </Container>
        </Section>
    );

}

export default AboutCover;

const sectionStyles = css`
    overflow: hidden;
`;

const Content = styled.div`
    margin: 4rem auto;
    max-width: 57rem;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        width: 25%;
        padding-bottom: 25%;
        left: 0;
        bottom: 0;
        background-color: ${props => props.decoBg};
        opacity: 20%;
        transform: translate(-50%, 50%);
        z-index: -1;
    }
`;

const SectionTitle = styled.h1`
    margin-bottom: 2rem;
`;

const Copy = styled.p`
    margin-bottom: 3rem;
`;

const Media = styled.div`
    position: relative;
    &::before{
        content: "";
        position: absolute;
        width: 10%;
        padding-bottom: 10%;
        background: ${props => props.decoBg};
        z-index: 10;
        left: 10%;
        top: 10%;
        box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.15);
    }
`;

const Logo = styled(FeaturedMedia)`
    clip-path: ellipse(100% 100% at right 73%);
    z-index: 4;
`;

const DivCube = styled.div`
    ${({decoBg = "#4B84E9", decoBgA="#CCEDFA", decoBgB="#4B84E9"})=>css`
        position: absolute;
        left: 0;
        bottom: 12%;
        width:40%;
        padding-bottom: 15%;
        background: ${decoBg};
        opacity: 80%;
        transform: translate(-75%, 0);
        z-index: 2;
        &::before {
            content: "";
            position: absolute;
            width: 35%;
            padding-bottom: 70%;
            top: 0;
            left: 0;
            background: ${decoBgB};
            opacity: 80%;
            z-index: 3;
        }
        &::after{
            content: "";
            position: absolute;
            left: 35%;
            top: 0;
            width: 65%;
            padding-bottom: 100%;
            background: ${decoBgA};
            opacity: 70%;
            transform: translate(0, -30%);
            z-index: 1;
        }
    `}
`;