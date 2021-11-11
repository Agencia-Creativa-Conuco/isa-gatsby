import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";
import useFiles from '../../../hooks/useFiles';

const ServiciosEstudiantilesAGISA = () =>{

    const images = useFiles();

    const 
        title = "Asociación De Graduados De ISA (AGISA)",
        content = `
            <p>Es una institución privada, sin fines de lucros que agrupa y promueve el mejoramiento de los profesionales graduados de los diversos programas de estudio del ISA. AGISA surge mediante el decreto número 455 del año 1990 con los objetivos de promover:</p>
            <ul>
                <li>El desarrollo institucional del Instituto Superior de Agricultura, y el acercamiento entre el ISA y sus egresados.</li>
                <li>El desarrollo social, cultural, científico y económico de sus miembros.</li>
                <li>El establecimiento de lazos de amistad, cooperación y compañerismo entre los miembros de la asociación.</li>
                <li>La Cooperación y acercamiento entre las instituciones cívicoculturales, del sector agropecuario y asociaciones que tengan relación o afinidad con AGISA.</li>
                <li>La divulgación de informaciones científicas del sector agropecuario entres sus miembro y a nivel público.</li>
                <li>La difusión de ideas no comprometidas en el orden político-partidista, que conlleven a la búsqueda de soluciones a los grandes problemas de la agricultura dominicana.</li>
            </ul>
        `,
        image = images["servicios-estudiantiles"].agisa,
        cta = null

    return (
        <Section>
            <Container>
                <Row>
                    <Col>
                        <Wrapper>
                            <Row>
                                <Col 
                                    size={12}
                                    sizeLG={6} 
                                    sizeXL={7} 
                                    noGuttersLG
                                >
                                    <DecoMedia 
                                        decoBg={colors.blue.dark}
                                        decoBgA={colors.cta.base}
                                    >
                                        <FeaturedMedia
                                            media={ image }
                                            size="56.25%"
                                            heightMD="100%"
                                            zIndex={3}
                                            bgColor
                                        />
                                        <DecoMedia2                          
                                            decoBg={colors.blue.dark}
                                            decoBgA={colors.cta.base}
                                        />
                                    </DecoMedia>
                                </Col>
                                <Col>
                                    <DivTitle 
                                        color={colors.blue.dark}
                                    >
                                        <SectionTitle> { title } </SectionTitle>
                                        <div dangerouslySetInnerHTML={{__html: content}} />
                                        {
                                            cta?(
                                                <StyledLink to={cta.url} target={cta.target}>
                                                    {cta.title}
                                                </StyledLink>
                                            ):null
                                        }
                                    </DivTitle>
                                </Col>
                            </Row>
                        </Wrapper>
                    </Col>
                </Row>
            </Container>
        </Section>
    );

}

export default ServiciosEstudiantilesAGISA;


const Wrapper = styled.div`
    box-shadow: silver 0 15px 20px;
    border-radius: 0 0 60px 60px;
    background-color: white;

    ${mq.lg}{
        border-radius: 0 50px 50px 0;
    }
`;


const DivTitle = styled.div`
    color: ${props => props.color};
    padding: 5%;
    padding-bottom: 10%;


    ${mq.lg}{
        padding: 5%;
    }

    ${mq.xl}{
        padding: 7%;
    }
`;


const SectionTitle = styled.h2`
    font-weight: 900;
    font-size: 2rem;
    margin-top: 0;
    ${mq.md}{
        font-size: 3rem;
    }
`;

const StyledLink = styled(Cta)`

    margin-top: 1rem;

    ${mq.md}{
        margin-top: 2.5rem;
    }
`;
const DecoMedia2 = styled.div`
    position: relative;
    &:before{
        content: "";
        position: absolute;
        left:-3%;
        bottom:-5%;
        background: ${props => props.decoBg};
        width: 13%;
        padding-bottom: 15%;
        z-index: 2;
    }
    &:after{
        content: "";
        position: absolute;
        left:-3%;
        bottom:0;
        background: ${props => props.decoBgA};
        width: 13%;
        padding-bottom: 40%;
        z-index: 1;
    }
`
const DecoMedia = styled.div`
    height: 100%;
    &:before{
        content: "";
        position: absolute;
        right:5%;
        top:0%;
        transform: translate(0,-50%);
        background: ${props => props.decoBgA};
        width: 23%;
        padding-bottom: 4%;
        z-index: 0;
    }
    &:after{
        content: "";
        position: absolute;
        right:5%;
        top:0%;
        transform: translate(0,-50%);
        background: ${props => props.decoBg};
        width: 12%;
        padding-bottom: 4%;
        z-index: 0;
    }
`