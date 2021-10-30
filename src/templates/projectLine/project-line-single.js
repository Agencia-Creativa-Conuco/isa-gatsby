import React from 'react';
import styled from '@emotion/styled';
import { Section, Container, Row, Col } from '../../components/layout/index';
import Link from '../../components/link';
import FeaturedMedia from '../../components/featured-media';
import useInvestigaciones from '../../hooks/useInvestigaciones';
import colors from '../../components/styles/colors';

const ProjectLines = ({line}) => {

    const projects = useInvestigaciones().filter( project => line.projects.map( project => project.id ).includes( project.id ) );

    return (
        <Section as="article" spaceNone>
            <Cover bgColor={colors.primary.base} spaceNone>
                <Section as="div" spaceBottomNone>
                    <Container>
                        <Row>
                            <Col>
                                <Title>{line.title}</Title>
                            </Col>
                        </Row>
                    </Container>   
                </Section>
            </Cover>
            {
                projects.length?(
                    <List thin>
                        <Container>
                            <Row>
                                <Col>
                                    <SubTitle>Proyectos de investigación</SubTitle>
                                </Col>
                            </Row>
                            <Row>
                            {
                                projects.map( project => {
                                    return (
                                        <Col key={project.id} size={12} sizeMD={6}>
                                            <SLink to={project.uri}>
                                                <Project>
                                                    <Row>
                                                        {
                                                        project.featuredImage?(
                                                            <Col size="auto" noRGutters>
                                                                <ProjectMedia>
                                                                    <FeaturedMedia 
                                                                        media={project.featuredImage} 
                                                                        size="100%"
                                                                    />
                                                                </ProjectMedia>
                                                            </Col>
                                                        ):null
                                                        }
                                                        <Col>
                                                            <ProjectTitle>{project.title}</ProjectTitle>
                                                        </Col>
                                                    </Row>
                                                </Project>
                                            </SLink>
                                        </Col>
                                    )
                                })
                            }
                            </Row>
                        </Container>
                    </List>
                ):null
            }
        </Section>
    )
}

export default ProjectLines;

const Cover = styled(Section)`
    overflow: hidden;
`;

const List = styled(Section)`
    margin-bottom: 20rem !important;
`;

const Title = styled.h1`
    text-align: center;
    color: white;
    margin-bottom: 4rem;
    margin-top: 4rem;
`;

const SubTitle = styled.h2`
    font-weight: 300;
`;

const Project = styled(Container)`
    padding: 1.5rem;
    background-color: #FAFAFA;
    transition: all 0.25s ease-in-out;
    margin: .5rem 0;
    &:hover{
        background-color: #F5F5F5;
    }
`;

const ProjectTitle = styled.h3`
    margin: 0;
    text-transform: uppercase;
`;

const ProjectMedia = styled.div`
    width: 8rem;
`;

const SLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;