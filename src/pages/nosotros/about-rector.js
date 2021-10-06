import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from '../../components/styles/colors';
import { useStaticQuery, graphql } from 'gatsby';

const AboutRector = () =>{

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

    const 
        name= "Ingeniero Benito A. Ferreiras",
        jobtitle= "Rector",
        content= `
            <p>En nombre de la Universidad ISA, les doy la bienvenida a este portal a través del cual podrán obtener información relevante sobre nuestra institución, además de todas las opciones que tiene la Universidad para ofrecerles como alternativa al momento de elegir una alma máter para su educación.</p>
            <p>Nuestra institución brinda opciones que comprenden diferentes áreas del conocimiento, tanto a nivel técnico, grado y postgrado. Asimismo, nos preocupamos por la formación de recursos humanos para nuestra sociedad, siendo un espacio que se enfoca en generar tecnologías y servicios a los sectores productivos.</p>
            <p>De su lado, nuestro excelente equipo de profesores está empeñado en educar a nuestros estudiantes como buenos profesionales en cada una de sus áreas, cada uno orientados a inculcar valores que primen en cada componente de nuestra estructura social.</p>
            <p>Nuestros egresados, son muestra de nuestros principios de honestidad y responsabilidad que nos distinguen en el quehacer profesional.</p>
            <p>En esta página podrán encontrar la información necesaria para poder orientarse sobre todo lo que ofrecemos, espero les sirva de ayuda.</p>
        `;

    return (
        <BgSection id="rector" decoBg={colors.blue.base} spaceTopNone>
            <Container >
                <Row alignCenter>
                    <Col 
                    size={12} 
                    sizeLG={6} 
                    >
                        <CubeRector decoBg={colors.blue.base}>
                            <FeaturedMedia
                                media={images.rector}
                                alt={name}
                                size="100%"
                                rounded
                                zIndex="1"
                                bgColor={colors.gray.light}
                            />
                            <CubeRector2 decoBg={colors.blue.base}/>
                        </CubeRector>
                    </Col>

                    <Col
                     size={12} 
                     sizeLG={6}
                      >
                        <Content decoBg={colors.blue.base} >
                            <SectionTitle decoBg={colors.blue.base}> 
                                <TitleText >{name}</TitleText>
                                <TitleText >{jobtitle}</TitleText>
                            </SectionTitle>
                            <div dangerouslySetInnerHTML={{__html: content}} />
                        </Content>
                    </Col>
                </Row>
            </Container>
        </BgSection>
    );

}

export default AboutRector;

const BgSection = styled(Section)`
&::before{
    content: "";
    position: absolute;
    width: 7%;
    padding-bottom: 7%;
    background: ${props => props.decoBg};
    right: 0;
    top: -1%;
    box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.25);
    } 
`;

const Content = styled.div``;

const SectionTitle = styled.h2`
    margin-top: 10rem;
`;

const TitleText = styled.span`
    display: block;
    &:last-of-type{
        transform-origin: 0 0;
        transform: scale(0.7);
    }
`;

const CubeRector = styled.div`
        position: relative;
        max-width: 50rem;
        margin: 0 auto;
        margin-top: 4rem;
        &::before{
            content: "";
            position: absolute;
            left: 8%;
            top: 8%;
            width: 13%;
            padding-bottom: 13%;
            background: ${props => props.decoBg};
            z-index: 2;
            box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.5);
        }
         &::after{
            content: "";
            position: absolute;
            width: 5%;
            padding-bottom: 5%;
            background: ${props => props.decoBg};
            left: 2%;
            top: 2%;
            opacity: 0.6;
        }   
`;

const CubeRector2 = styled.div`
    position:relative;
    &::before{
        content: "";
        position: absolute;
        width: 45%;
        padding-bottom: 35%;
        background: ${props => props.decoBg};
        opacity:0.3; 
        right: 0;
        bottom: 0;
        transform: translate(-40%, 20%);
    }
    &::after{
        content: "";
        position: absolute;
        width: 30%;
        padding-bottom: 15%;
        background: ${props => props.decoBg};
        opacity:0.3;
        right: 0;
        bottom: 0;
        transform: translate(-10%, 47%);
    }
`