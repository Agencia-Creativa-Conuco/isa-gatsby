import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';
import Cta from '../../../components/cta';
import useFiles from '../../../hooks/useFiles';

const ServiciosEstudiantilesBienestar = ({ page }) =>{

    const images = useFiles();
    
    const   
        title = "Departamento de Desarrollo y Bienestar Estudiantil",
        content = `
            <p>El departamento de Desarrollo y Bienestar Estudiantil está orientado a facilitar y eficientizar el avance académico y personal de los estudiantes, mediante los servicios que ofrece, liderados por un equipo especializado que pone en acción sus conocimientos, destrezas, y empeño con el propósito de contribuir al crecimiento intelectual, académico, espiritual, emocional, social y vocacional del estudiante, así como también a la plena realización de sus potencialidades.</p>
            <p>Desarrollo y Bienestar Estudiantil, es un canal activo y de relación con los estudiantes y sus actividades, brinda el apoyo necesario en la concretización de sus iniciativas, promoviendo el liderazgo e incentivando el desarrollo de servicios de apoyo social, educacional, deportivo y cultural.</p>
        `,
        image = images["servicios-estudiantiles"].bienestar_estudiantil,
        cta = null

    return (
        <Section spaceNone zIndex={20} id="section_2">
            <Container fluid>
                <Row>
                <Col size={12} sizeMD={6} noGutters>
                    <FeaturedMedia
                        media={ image }
                            size="56.25%"
                            heightMD="100%"
                            bgColor
                        />
                    </Col>
                    <Col size={12} sizeMD={6}>
                        <DivTitle decoBg = {colors.blue.dark}>
                            <SectionTitle > { title } </SectionTitle>
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
        </Section>
    );

}

export default ServiciosEstudiantilesBienestar;

const DivTitle = styled.div`
    max-width: 57rem;
    margin: 0 auto;
    padding: 1.5rem 0;
    ${mq.sm}{
        padding: 4rem 0;
    }
    ${mq.md}{
        text-align: right;
        padding: 10% 0;
    }
    &::before{
        content: "";
        position: absolute;
        padding: 2.2%;
        top:0;
        right:0;
        background: ${props => props.decoBg};
        opacity: 0.8;
    }
`;


const SectionTitle = styled.h2`
`;
