import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from "../../components/styles/colors";
import Cta from "../../components/cta";

const HomeContact = ({ page }) =>{
    
    const {
        home: {
            form: {
                title,
                image
            }
        }
    }=page;

    return (
        <Section spaceNone>
            <Container fluid notFluidXL sizeXL="192rem">
                <Row alignCenter reverseLG>
                    <Col size={12} sizeLG={6} noGutters>
                        <Image
                            media={image}
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
                            <Form method="POST" action="/">
                                <Input type="text" placeholder="Nombre"/>
                                <Input type="email" placeholder="Correo Electronico"/>
                                <Input type="tel" placeholder="Numero de telefono"/>
                                <Input type="text" placeholder="Mensaje"/>
                                <StyledLink to="#" cta>ENTRAR</StyledLink>
                            </Form>
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

const Form = styled.form`
    margin: 0 auto;
    text-align: center;
`;

const Input = styled.input`
    border-radius: 1.2rem;
    display: block;
    border: none;
    padding: 2rem 4rem;
    margin: 1.5rem auto;
    box-shadow: lightGray 0 0 10px;
    max-width: 100%;

    ${mq.lg}{
        padding: 2rem 6rem;
    }
`;


const StyledLink = styled(Cta)`
    margin-top: 2rem;
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