import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col,mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from '../../components/styles/colors';
import { useStaticQuery, graphql } from "gatsby";

const DEPCover = () =>{

      //Obtiene las imágenes localmente desde la ruta "images/home"
    const { allFile } = useStaticQuery(graphql`
    query {
        allFile(filter: { relativeDirectory: { in: ["direccion-extension-y-proyectos"] } }) {
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
        title = "Dirección Extensión y Proyectos",
        copy = "La Dirección de Extensión y Proyectos es una dependencia de la Vicerrectoría de Investigación, Extensión y Postgrado (VIEP), la misma ha sido como un instrumento para la difusión del conocimiento, la aplicación de la ciencia, el apoyo a los sectores productivos y empresariales, el mejoramiento de la competitividad, así como el intercambio cultural y deportivo, todo ello visto como fundamento para el desarrollo integral de la sociedad y el cumplimiento de la labor de la Universidad.";
    
    return (
        <Section spaceNone>
            <Container fluid noGutters>
                <Row alignCenter>
                    <Col size={12} sizeLG={7}>
                        <DecoLogo
                            decoBg ={colors.blue.base}
                        >
                        <Logo
                            media={images.cover}
                            size="80%"
                            alt="Dirección Extensión y Proyectos"
                            bgColor
                        />
                        <DecoLogo2 decoBg={colors.blue.dark}/>
                        </DecoLogo>
                    </Col>
                    <Col>
                        <Col>
                          <Content>
                             <DivTitle>
                                 <SectionTitle> {title}</SectionTitle>
                                 <Copy>{copy}</Copy>
                             </DivTitle>
                           </Content>
                         </Col>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default DEPCover;

const DivTitle = styled.div`
    ${mq.xl}{
        max-width: 57rem;
        margin: 0 auto;
    }
`;

const SectionTitle = styled.h1`
    margin-top: 0;
    margin-bottom: 3rem;
`;

const Copy = styled.p``;

const Logo = styled(FeaturedMedia)`
    clip-path: circle(85% at 20% 3%);
`;
const Content = styled.div`
    margin: 2rem auto;
    max-width: 50rem;
    position: relative;
`;
const DecoLogo = styled.div`
    position: relative;
    &::before{
        content: "";
        position: absolute;
        right:23%;
        bottom:0;
        background: ${props => props.decoBg};
        width: 17%;
        padding-bottom: 35%;
        opacity: 0.4;
    }
    &::after{
        content: "";
        position: absolute;
        right:7%;
        bottom:0;
        background: ${props => props.decoBg};
        width: 16%;
        padding-bottom: 12%;
    }
`;


const DecoLogo2 = styled.div`
    &::before{
        content: "";
        position: absolute;
        right:10%;
        bottom:21%;
        background: ${props => props.decoBg};
        padding:4.5%;
        clip-path: circle(50% at 50% 50%);
    }
`;