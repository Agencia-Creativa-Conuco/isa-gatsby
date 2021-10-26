import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from '../../components/styles/colors';
import Cta from '../../components/cta';
import useFiles from '../../hooks/useFiles';

const ServiceResidence = () =>{

    const images = useFiles();

    const
        title = "Servicio de Alojamiento", 
        content = `
            <p>El Programa de Residencia Estudiantil, es un servicio que ofrece la Universidad ISA a sus estudiantes, principalmente a aquellos provenientes de zonas alejadas a la provincia de Santiago, con el objetivo de propiciar un ambiente que les permita la dedicación a sus estudios y a la vez, lograr un buen desempeño académico.</p>
            <p>Los estudiantes que desean conservar el derecho al servicio de residencia estudiantil, deben mantener un rendimiento académico en condición normal (2.0/4.0); y el respeto a las normas y reglamentos institucionales.</p>
            <p><b>Observaciones</b></p>
            <ul>
                <li>Los estudiantes podrán permanecer en la residencia estudiantil, solo en el período académico que indica el calendario académico cada cuatrimestre.</li>
                <li>Es responsabilidad del estudiante, actualizar el servicio de alojamiento al inicio de cada cuatrimestre.</li>
                <li>Para mantener el servicio, el estudiante debe respetar los estatutos establecidos en el Reglamento Estudiantil.</li>
            </ul>
        `,
        image = images["servicios-estudiantiles"].alojamiento,
        cta = null

    return (
        <Section spaceNone zIndex={2}>
            <Container fluid>
                <Row>
                    <Col size={12} sizeLG={5} css={css`background-color:${colors.blue.dark}; padding: 0;`}>
                        <Container>
                            <Row>
                                <Col>
                                    <DivTitle color={colors.white}>
                                        <SectionTitle color={colors.white}>{ title } </SectionTitle>
                                        <div dangerouslySetInnerHTML={{__html: content}} />
                                        {
                                            cta?(
                                                <Cta to={cta.url} target={cta.target}>{cta.title}</Cta>
                                            ):null
                                        }
                                    </DivTitle>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col size={12} sizeLG={7} noGutters>
                        <FeaturedMedia
                            media={ image }
                            size="56.25%"
                            height="100%"
                            bgColor
                        />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default ServiceResidence;


const DivTitle = styled.div`
    color: ${props => props.color};
    padding: 1.5rem 0;
    ${mq.sm}{
        padding: 4rem 0;
    }
    ${mq.lg}{
        max-width: 57rem;
        margin: 0 auto;
        padding: 10% 0;
    }
`;


const SectionTitle = styled.h2`
    margin: 3rem 0;
    color: ${props => props.color};
`;
