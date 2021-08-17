import React from "react";
import styled from '@emotion/styled';
import {Section, Container, Row, Col} from "../../components/layout/index";
import colors from "../../components/styles/colors";

const ProjectsResume = ({ project })=>{

    const {
        content,
    } = project;

    return (
        <BGSection bg={ colors.gray.light } zIndex='1' >
            <Container>
                <Row>
                    <Col size={12} >
                        <Content>
                            <Section as="div" spaceTopNone>
                                <Copy dangerouslySetInnerHTML={{__html: content }} />
                            </Section>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </BGSection>

    );
}

export default ProjectsResume;

const BGSection = styled(  Section )`
    /* overflow: hidden; */
    &:before{
        content:'';
        position:absolute;
        width:100%;
        bottom:0;
        height: calc(100% + 70rem);
        background-color:  ${props => props.bg};
    }
`;

const Content = styled.div`
    overflow: hidden;
`;


const Copy = styled.p``;