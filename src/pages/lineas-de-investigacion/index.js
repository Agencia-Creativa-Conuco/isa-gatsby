import React from 'react';
import styled from '@emotion/styled';
import { Section, Container, Row, Col } from '../../components/layout/index';
import Link from '../../components/link';
import Layout from '../../components/layout';
import useFaculties from '../../hooks/useFaculties';
import useProjectLines from '../../hooks/useProjectLines';
import useDepartaments from '../../hooks/useDepartaments';
import colors from '../../components/styles/colors';

const ProjectLines = (props) => {

    const projectLines = useProjectLines();

    const departaments = useDepartaments().filter( departament => projectLines.map( line => line.departament.id ).includes( departament.id ) );

    const faculties = useFaculties().filter( faculty => departaments.map( departament => departament.faculty.id ).includes( faculty.id ) );

    return (
        <Layout {...props}>
            <Section as="article" spaceNone>
                <Cover bgColor={colors.primary.base} spaceNone>
                    <Section as="div" spaceBottomNone>
                        <Container>
                            <Row>
                                <Col>
                                    <Title>Líneas de investigación</Title>
                                </Col>
                            </Row>
                        </Container>   
                    </Section>
                </Cover>
                <List thin>
                    <Container>
                        <Row>
                        {
                            faculties.map( faculty => {
                                return (
                                    <Col key={faculty.id} size={12}>
                                        <Section as="div" spaceTopNone>
                                            <Faculty>
                                                {faculty.title}
                                            </Faculty>
                                            <Row>
                                            {
                                                departaments.filter( departament => departament.faculty.id === faculty.id )
                                                .map( departament => {
                                                    return (
                                                        <Col key={departament.id} size={12}>
                                                            <Departament>{departament.title}</Departament>
                                                            <Row>
                                                            {
                                                                projectLines.filter( line => line.departament.id === departament.id )
                                                                .map( line => {
                                                                    return (
                                                                        <Col key={line.id} size={12} sizeMD={6} >
                                                                            <SLink to={line.uri}>
                                                                                <Line>{line.title}</Line>
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
    text-shadow: 0px 0px 6px #484848;
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