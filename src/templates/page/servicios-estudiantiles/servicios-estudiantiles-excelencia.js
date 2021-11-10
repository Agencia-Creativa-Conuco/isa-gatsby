import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';
import Cta from '../../../components/cta';
import useFiles from '../../../hooks/useFiles';

const ServiciosEstudiantilesExcelencia = () =>{
    
    const images = useFiles();
    
    const 
        title = "Programa Premiación a la Excelencia", 
        content = `
            <p>El programa de premiación a la excelencia académica, es una actividad donde la institución, a través de la implementación de un proceso de reconocimiento periódico, público y continuo, exalta los esfuerzos exitosos logrados por los estudiantes al final del período académico cursado y al cierre del año académico. Esta celebración se realiza una vez al año.</p>
            <p><b>Objetivos</b></p>
            <ul>
                <li>Mantener presente, en el estudiantado, el valor de la excelencia como base y principio que guía las acciones de la Universidad.</li>
                <li>Fortalecer el espíritu de competencia sana entre estudiantes para alcanzar mejores rendimientos académicos, contribuyendo así en la creación de una cultura amplia, alentadora y compartida hacia la excelencia académica.</li>
                <li>Fortalecer la relación entre estudiantes fomentando los valores de respeto, responsabilidad, solidaridad, colaboración, y servicio en el acontecer académico cotidiano.</li>
            </ul>
        `,
        image = images["servicios-estudiantiles"].excelencia,
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

export default ServiciosEstudiantilesExcelencia;

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