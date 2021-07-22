import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";
import colors from '../../styles/colors';

const AboutRector = ({ page }) =>{

    const {
        about: {
            perfil: {
                photo,
                name,
                jobtitle,
                content,
            }
        }
    } = page;

    console.log(page)

    return (
        <BgSection id="rector" decoBg={colors.blue.base} spaceTopNone>
            <Container >
                <Row alignCenter>
                    <Col 
                    size={12} 
                    sizeLG={6} 
                    >
                        <CubeRector decoBg={colors.blue.base}>
                            <FeaturedMedia
                                media={photo?.localFile}
                                size="100%"
                                rounded
                                zIndex="1"
                                bgColor={colors.gray.light}
                            />
                            <CubeRector2 decoBg={colors.blue.base}/>
                        </CubeRector>
                    </Col>

                    <Col
                     size={12} 
                     sizeLG={6}
                      >
                        <Content decoBg={colors.blue.base} >
                            <SectionTitle decoBg={colors.blue.base}> 
                                <TitleText >{name}</TitleText>
                                <TitleText >{jobtitle}</TitleText>
                            </SectionTitle>
                            <div dangerouslySetInnerHTML={{__html: content}} />
                        </Content>
                    </Col>
                </Row>
            </Container>
        </BgSection>
    );

}

export default AboutRector;

const BgSection = styled(Section)`
&::before{
    content: "";
    position: absolute;
    width: 7%;
    padding-bottom: 7%;
    background: ${props => props.decoBg};
    right: 0;
    top: -1%;
    box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.25);
    } 
`;

const Content = styled.div``;

const SectionTitle = styled.h2`
    margin-top: 10rem;
`;

const TitleText = styled.span`
    display: block;
    &:last-of-type{
        transform-origin: 0 0;
        transform: scale(0.7);
    }
`;

const CubeRector = styled.div`
        position: relative;
        max-width: 50rem;
        margin: 0 auto;
        margin-top: 4rem;
        &::before{
            content: "";
            position: absolute;
            left: 8%;
            top: 8%;
            width: 13%;
            padding-bottom: 13%;
            background: ${props => props.decoBg};
            z-index: 2;
            box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.5);
        }
         &::after{
            content: "";
            position: absolute;
            width: 5%;
            padding-bottom: 5%;
            background: ${props => props.decoBg};
            left: 2%;
            top: 2%;
            opacity: 0.6;
        }   
`;

const CubeRector2 = styled.div`
    position:relative;
    &::before{
        content: "";
        position: absolute;
        width: 45%;
        padding-bottom: 35%;
        background: ${props => props.decoBg};
        opacity:0.3; 
        right: 0;
        bottom: 0;
        transform: translate(-40%, 20%);
    }
    &::after{
        content: "";
        position: absolute;
        width: 30%;
        padding-bottom: 15%;
        background: ${props => props.decoBg};
        opacity:0.3;
        right: 0;
        bottom: 0;
        transform: translate(-10%, 47%);
    }
`