import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col} from "../../../components/layout/index";
import BackgroundImage from "gatsby-background-image";

const DEPServices = ({ page }) =>{
    const {
        dep:{
            services:{
                title,
                copy,
                image
            }
        }
    } = page;

    return (
        <BImage Tag="section" fluid={image?.localFile?.childImageSharp?.fluid}>
            <BGSection as="div" spaceNone>
                <Container  >
                    <Row>
                        <Col size={12} sizeMD={8} sizeLG={6} mlAuto>
                            <Content>
                                    <Title>{ title } </Title>
                                    <Copy>{ copy } </Copy> 
                            </Content>
                        </Col>
                    </Row>
                </Container>
            </BGSection>
        </BImage>
    );

}

export default DEPServices;

const BImage = styled(BackgroundImage)`
    overflow: hidden;
`;


const BGSection = styled(Section)`
    background: rgba(0, 0, 0, 0.35);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    min-height: 45rem;
    padding-top: 5rem;
    padding-bottom: 10rem;
`;

const Content = styled.div`
    padding: 3rem 0;
    text-align: right;
    position: relative;
    
    *{
        color: white;
    }
`;

const Title = styled.h2`
        margin-bottom: 4rem;
`;

const Copy = styled.p`
        margin-bottom: 4rem;
`;





