import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from '../../components/styles/colors';
import Cta from '../../components/cta';
import useFiles from '../../hooks/useFiles';

const DEPCede = () =>{

    const images = useFiles();

    const 
        title = "El Centro De Emprendimiento y Desarrollo Empresarial De La Universidad ISA (CEDE)",
        copy = "El Centro de Emprendimiento y Desarrollo Empresarial de la Universidad ISA (CEDE) es un centro dedicado a promover el desarrollo de una cultura de innovación tecnológica y la creación de una mentalidad empresarial entre los estudiantes, académicos y los grupos de interés vinculados a la Universidad, mediante un acompañamiento de un asesor de emprendimiento, para que los mismos puedan desarrollar su idea de negocios y plasmarlo en un plan, que posteriormente le permita poder acceder a fuentes de financiamiento y participar en competencias de emprendimiento e innovación.",
        image = images["direccion-extension-y-proyectos"].cede,
        cta = null;

    return (
        <Section spaceTopNone>
            <Container>
                <Row>
                    <Col size={12} sizeLG={6} noGutters zIndex={2}>
                        <Media>
                            <FeaturedMedia
                                media={ image }
                                size="56.25%"
                                zIndex="2"
                            />
                        </Media>
                    </Col>
                    <Col css={css`background-color: ${colors.blue.dark};`}>
                        <Content>
                            <Title color={colors.white}> { title } </Title>
                            <Copy> { copy  } </Copy>
                            {cta ? (
                                <Cta to={cta.url} target={cta.target}>
                                    {cta.title}
                                </Cta>
                            ) : null}
                        </Content>
                    </Col>
                </Row>
            </Container>
        </Section>
    );

}

export default DEPCede;

const Title = styled.h2`
    color: inherit;
`;

const Content = styled.div`
    color: white;
    padding-top: 0rem;
    padding-bottom: 2rem;
    ${mq.md}{
        padding-top: 3rem;
        padding-bottom: 4rem;
        padding-left: 3rem;
        padding-right: 3rem;
    }
`;

const Copy = styled.p``;

const Media = styled.div`
    ${mq.md}{
        transform: translate(3rem, 3rem);
    }
`;
