import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from '../../components/styles/colors';
import { useStaticQuery, graphql } from 'gatsby';

const OfferCover = () =>{

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

    const 
        title = "Ofeta Académica",
        copy = "Desde 1962 hemos construido una plataforma que responde a las necesidades de la población estudiantil que busca formarse para ayudar al desarrollo económico y social de la República Dominicana y el mundo, de la mano de expertos en cada área del saber que abarca nuestra oferta académica.";

    return (
        <Section spaceNone>
            <Container fluid>
                <Row alignCenter>
                    <Col size={12} sizeMD={6} sizeLG={7} noLGutters>
                        <DivLogo decoBg={ colors.blue.dark } decoBgA={colors.blue.base}>    
                            <Image
                                media={images.cover}
                                alt={title}
                                size="100%"
                                sizeMD="120%"
                                sizeLG="100%"
                                sizeXL="80%"
                                position="90% 50%"
                                bgColor
                            />
                        </DivLogo>
                    </Col>
                    <Col size={12} sizeMD={6} sizeLG={5}>
                        <DivTitle>
                            <SectionTitle> {title} </SectionTitle>
                            <div dangerouslySetInnerHTML={{__html: copy}} />
                        </DivTitle>
                    </Col>
                </Row>
            </Container>
        </Section>
    );

}

export default OfferCover;

const DivLogo = styled.div`
    position:relative;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        background-color: ${props => props.decoBgA};
        padding: 4%;
        clip-path: circle(50%  at 50% 50%); 
        right: 0;
        opacity: 0.8;
        transform: translate(-2rem, 7rem);
        ${mq.md}{
            transform: translate(${8.2*100}%, 9rem);
        }
    }
    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        background-color: ${props => props.decoBg};
        padding: 20%;
        clip-path: circle(50%  at 50% 100%); 
        right: -3%;
        z-index:5;
        ${mq.md}{
            right: -12%;
            z-index:0;
        }
    }


`;

const DivTitle = styled.div`
    max-width: 57rem;
    margin: 10% auto;
    ${mq.md}{
        margin: 10rem auto;
    }
`;

const SectionTitle = styled.h1``;

const Image = styled(FeaturedMedia)`
clip-path: ellipse(88% 75% at left);
z-index: 5;
${mq.md}{
        clip-path: ellipse(100% 100% at left);
    }
`;