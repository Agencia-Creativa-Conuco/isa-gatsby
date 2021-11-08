import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from "../../components/styles/colors";
import Form from "../../components/form";
import useFiles from '../../hooks/useFiles';

const HomeContact = () =>{

    const images = useFiles();
    
    const title = "Contáctanos"
    
    return (
        <Section spaceNone>
            <Container fluid>
                <Row alignCenter reverseLG>
                    <Col size={12} sizeLG={6} noGutters>
                        <Image
                            media={images.home.contacto}
                            alt={title}
                            size="56.25%"
                            sizeLG="120%"
                            sizeXL="100%"
                            bg={colors.blue.base}
                            bgColor={colors.gray.light}
                        />
                    </Col>
                    <Col size={12} sizeLG={6}>
                        <Content bgDeco={colors.primary.light}>
                            <SectionTitle> {title} </SectionTitle>
                            <Form formId="386740ac-0068-4408-b0ad-1b7b62a5c417"/>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </Section>
    );

}

export default HomeContact;

const Content = styled.div`
    ${({bgDeco="lightblue"})=>css`
        margin: 4rem 0;
        &::after{
            content:"";
            background: ${bgDeco};
            width: 8%;
            padding: 8%;
            position: absolute;
            right: 0;
            bottom: 0;
        }
    `}
`;

const SectionTitle = styled.h2`
    margin: 6rem auto;
    text-align: center;
`;

const Image = styled(FeaturedMedia)`
    ${mq.md}{
        margin-top: 10%;
        &::after{
            padding: 20px;
            bottom: 0;
            transform: translateX(-4rem);
        }
    }

    ${mq.lg}{
        margin-top: 0;
        &::after{
            padding: 40px;
            transform: translateX(-8rem);
        }
    }
`;