import React from 'react';
import styled from '@emotion/styled';
import { Section, Container, Row, Col } from '../../../components/layout/index';
import Link from '../../../components/link';
import Layout from '../../../components/layout';
import useFacultades from '../../../hooks/useFacultades';
import useLineasInvestigacion from '../../../hooks/useLineasInvestigacion';
import useDepartamentos from '../../../hooks/useDepartamentos';
import colors from '../../../components/styles/colors';

const ProjectLines = (props) => {

    const lineasDeInvestigacion = useLineasInvestigacion();
    
    const departamentos = useDepartamentos().filter( departamento => lineasDeInvestigacion.map( line => line.departamento.id ).includes( departamento.id ) );
    
    const facultades = useFacultades().filter( facultad => departamentos.map( departamento => departamento.facultad.id ).includes( facultad.id ) );
     
    return (
        <Layout {...props}>
            <Section as="article" spaceNone>
                <Cover bgColor={colors.primary.base} spaceNone>
                    <Section as="div" spaceBottomNone>
                        <Container>
                            <Row>
                                <Col>
                                    <Title color={colors.shadow.base}>Líneas de investigación</Title>
                                </Col>
                            </Row>
                        </Container>   
                    </Section>
                </Cover>
                <List thin>
                    <Container>
                        <Row>
                        {
                            facultades.map( facultad => {
                                return (
                                    <Col key={facultad.id} size={12}>
                                        <Section as="div" spaceTopNone>
                                            <Faculty>
                                                {facultad.nombre}
                                            </Faculty>
                                            <Row>
                                            {
                                                departamentos.filter( departamento => departamento.facultad.id === facultad.id )
                                                .map( departamento => {
                                                    return (
                                                        <Col key={departamento.id} size={12}>
                                                            <Departament>{departamento.nombre}</Departament>
                                                            <Row>
                                                            {
                                                                lineasDeInvestigacion.filter( line => line.departamento.id === departamento.id )
                                                                .map( line => {
                                                                    return (
                                                                        <Col key={line.id} size={12} sizeMD={6} >
                                                                            <SLink to={line.uri}>
                                                                                <Line>{line.nombre}</Line>
                                                                            </SLink>
                                                                        </Col>
                                                                    )
                                                                })
                                                            }
                                                            </Row>
                                                        </Col>
                                                    )
                                                })
                                            }
                                            </Row>
                                        </Section>
                                    </Col>
                                )
                            })
                        }
                        </Row>
                    </Container>
                </List>
            </Section>
        </Layout>
    )
}

export default ProjectLines;

const Cover = styled(Section)`
    overflow: hidden;
`;

const List = styled(Section)``;

const Title = styled.h1`
    text-align: center;
    color: white;
    margin-bottom: 4rem;
    margin-top: 4rem;
    text-shadow:${props => props.color};
`;

const Faculty = styled.h2`
    text-align: center;
    font-weight: 300;
`;

const Departament = styled.h3`
    text-transform: uppercase;
`;

const Line = styled.h4`
    font-weight: normal;
    padding: 1.5rem;
    background-color: #FAFAFA;
    transition: all 0.25s ease-in-out;
    margin: .5rem 0;
    &:hover{
        background-color: #F5F5F5;
    }
`;

const SLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;