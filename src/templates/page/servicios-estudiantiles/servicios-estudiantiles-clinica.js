import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';
import Cta from '../../../components/cta';
import useFiles from '../../../hooks/useFiles';

const ServiciosEstudiantilesClinica = () =>{
    
    const images = useFiles();
    
    const 
        title = "Servicio de Enfermería", 
        content = `
            <p>En la unidad de servicios de enfermería, está enfocada atender y orientar las necesidades de salud y emergencias que puedan surgir durante el desarrollo de la actividad académica y administrativa de la Universidad, ofreciendo un servicio de apoyo oportuno y de alta calidad en la atención de primeros auxilios ambulatorios y de urgencia.</p>
            <p>Esta unidad promueve además, campañas orientadas a fomentar hábitos de conductas sanas y evitar riesgos de enfermedades, con el objetivo primordial de contribuir al desarrollo integral, tanto de los estudiantes, como de los empleados, mediante la prevención, mantenimiento y promoción de la salud.</p>
            <p><strong>Horarios</strong><br>
            Lunes a viernes de 8:00 a.m. a 7:00 p.m.<br>
            Sábados de 8:00 a.m. a 5:00 p.m.</p>
        `,
        image = images["servicios-estudiantiles"].enfermeria,
        cta = null

    return (
        <Section>
            <Container>
                <Row>
                    <Col size={12} sizeMD={7} zIndex={2} noGutters>
                        <DecoLogo
                            decoBg={colors.blue.dark}
                            decoBgA={colors.cta.base}
                        >
                        <Media
                            media={  image }
                            size="56.25%"
                            bgColor
                        />
                        </DecoLogo>
                    </Col>
                    <ContentCol bgColor={colors.primary.light}>
                        <DivTitle color={colors.blue.dark}>
                            <SectionTitle>{  title }</SectionTitle>
                            <div dangerouslySetInnerHTML={{__html: content}} />
                            {
                                cta?(
                                    <Cta to={cta.url} target={cta.target}>{cta.title}</Cta>
                                ):null
                            }
                        </DivTitle>
                    </ContentCol>
                </Row>
            </Container>
        </Section>
    );

}

export default ServiciosEstudiantilesClinica;

const ContentCol = styled(Col)`
    ${({bgColor="lightblue"})=>css`
        z-index: 1;
        position: relative;
        padding-bottom: 4rem;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${bgColor};
            opacity: 0.3;
            z-index: -1;
            transform-origin: 50% 100%;
            ${mq.md}{
                transform: scale(1.2, 2);
            }
        }
    `}
`;

const Media = styled(FeaturedMedia)`
    // ${mq.md}{
    //     transform: translateX(2rem);
    // }

    // ${mq.lg}{
    //     transform: translateX(4rem);
    // }
`;

const DivTitle = styled.div`
`;


const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;

const DecoLogo = styled.div`
    position: relative;
    &::before{
        content: "";
        position: absolute;
        left:0;
        top:-4%;
        background: ${props => props.decoBg};
        width: 15%;
        padding-bottom: 7%;
        z-index: 5;
        // transform: translate(50%,0);
    }
    &::after{
        content: "";
        position: absolute;
        left:0;
        top:-4%;
        background: ${props => props.decoBgA};
        width: 45%;
        padding-bottom: 7%;
        z-index: 4;
        // transform: translate(50%,0);
    }
`