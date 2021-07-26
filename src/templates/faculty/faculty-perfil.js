import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from "../../components/styles/colors";

const FacultyPerfil = ({ faculty }) =>{

    const {
        color,
        perfil: {
            name,
            jobtitle,
            content,
            photo
        }
    } = faculty;

    return (
        <BgSection color={colors.gray.light} spaceNone>
            <Section as="div">
                <Container>
                    <Row alignCenter>
                        <Col 
                        size={10} 
                        sizeLG={5} 
                        mxAuto
                        >
                            <CubeDecano  decoBg={ color || colors.primary.dark }>
                                <FeaturedMedia
                                    media={ photo.localFile }
                                    size="100%"
                                    rounded
                                    zIndex="1"
                                    bgColor
                                />
                                <CubeDecano2 decoBg={ color || colors.primary.dark }/>
                            </CubeDecano>
                        </Col>
                        <Col
                            size={12} 
                            sizeLG={6}
                        >
                            <Content>
                                <Title color={ color || colors.primary.dark }>
                                    <JobTitle>{jobtitle}</JobTitle>
                                    <Name>{name}</Name>
                                </Title>
                                <div dangerouslySetInnerHTML={{__html: content}} />
                            </Content>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </BgSection>
    );

}

export default FacultyPerfil;

const BgSection = styled(Section)`
    background: ${props => props.color};
    overflow: hidden;
    padding-bottom: 10rem;
`;

const Content = styled.div``;

const Title = styled.h2`
    color: ${props => props.color};
    line-height: 1;
`;

const JobTitle = styled.span`
    color: inherit;
    font-weight: 300;
    display: block;
    transform-origin: 0% 50%;
    transform: scale(0.6);
    line-height: inherit;
`;

const Name = styled.span`
    color: inherit;
    font-weight: inherit;
    display: block;
    line-height: inherit;
`;

const CubeDecano = styled.div`
        position: relative;
        max-width: 50rem;
        margin: 0 auto;
        margin-top: 4rem;
        margin-bottom: 2rem;
        &::before{
            content: "";
            position: absolute;
            left: -7%;
            top: 16%;
            padding: 11%;
            background: ${props => props.decoBg};
            z-index: 1;
            box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.5);
            opacity: 0.5;
        }  
`;

const CubeDecano2 = styled.div`
    position:relative;
    &::before{
        content: "";
        position: absolute;
       padding: 15%;
        background: ${props => props.decoBg};
        opacity:0.3;
        right: 0;
        bottom: 0;
        transform: translate( 35%, -67% );
    }
    &::after{
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        background: ${props => props.decoBg};
        transform: translate(34%, -203%);
        padding: 7%;
        z-index: 2;
    }
`