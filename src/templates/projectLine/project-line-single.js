import React from 'react';
import styled from '@emotion/styled';
import { Section, Container, Row, Col } from '../../components/layout/index';
import Link from '../../components/link';
import FeaturedMedia from '../../components/featured-media';
import useProjects from '../../hooks/useProjects';
import colors from '../../components/styles/colors';

const ProjectLines = ({line}) => {

    const projects = useProjects().filter( project => line.projects.map( project => project.id ).includes( project.id ) );

    return (
        <Section as="article" spaceNone>
            <Cover bgColor={colors.primary.base} spaceNone>
                <Section as="div">
                    <Container>
                        <Row>
                            <Col>
                                <Title>{line.title}</Title>
                            </Col>
                        </Row>
                    </Container>   
                </Section>
            </Cover>
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
        </Section>
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
`;

const SubTitle = styled.h2``;

const Project = styled(Container)`
    padding: 1.5rem;
    background-color: #FAFAFA;
    margin: .5rem 0;
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