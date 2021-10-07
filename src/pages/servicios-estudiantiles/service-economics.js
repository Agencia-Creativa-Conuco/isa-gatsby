import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from "../../components/styles/colors";
import Cta from "../../components/cta";
import useFiles from '../../hooks/useFiles';

const ServiceEconomics = () =>{

    const images = useFiles();

    const 
        title = "Asistencia Económica Estudiantil",
        content = `
            <p>El Programa de Residencia Estudiantil, es un servicio que ofrece la Universidad ISA a sus estudiantes, principalmente a aquellos provenientes de zonas alejadas a la provincia de Santiago, con el objetivo de propiciar un ambiente que les permita la dedicación a sus estudios y a la vez, lograr un buen desempeño académico.</p>
            <p>Los estudiantes que desean conservar el derecho al servicio de residencia estudiantil, deben mantener un rendimiento académico en condición normal (2.0/4.0); y el respeto a las normas y reglamentos institucionales.</p>
        `,
        image = images["servicios-estudiantiles"].asistencia_economica,
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

export default ServiceEconomics;


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