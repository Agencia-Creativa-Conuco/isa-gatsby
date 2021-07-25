import React from "react";
import styled from "@emotion/styled";
import {Section, Container, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";


const PostCover = ({ post })=>{

    const {
        title,
        featuredImage,
    } = post;


    return (
        <Section spaceNone>
            <Container fluid>
                <Row alignItems="flex-end"> 
                    <Col 
                        size={12}
                        sizeLG={10}
                        sizeXL={9}
                        orderLG={2}
                        noGutters
                    >
                        <ImageContainer>
                            <Image>
                                <FeaturedMedia 
                                    media={ featuredImage.node.localFile }
                                    height ="100%"
                                    bgColor
                                    loading="eager"
                                    />
                            </Image>
                        </ImageContainer>
                    </Col>
                    <Col size={12} sizeLG={1} mlLGAuto>
                        <Container noGutters>
                            <Row>
                                <Col  sizeSM={7} sizeLG={12}>
                                    <Content>
                                        <Title>{ title }</Title>    
                                    </Content>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
             </Container>  
        </Section>
    );
}

export default PostCover;


const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0%;
    ${mq.lg}{
        padding-bottom: 56.25%;
    }
`;


const Image = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;


const Content = styled.div`
    margin-bottom: 4rem;
    margin-top: -2rem;
    ${mq.lg}{
        margin: 10rem 0;
        width: 57rem;
    }
`;

const Title = styled.h1`
    position: relative;
    font-weight: 900;
    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.5);
    filter: drop-shadow(0 1.5rem 0.5rem rgba(0, 0, 0, 0.15));
    text-transform: uppercase;
    background-color: white;
    display: inline;
    z-index: 2;
`;
