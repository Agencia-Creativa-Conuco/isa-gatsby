import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import colors from "../../components/styles/colors";
import BackgroundImage from "gatsby-background-image";
import CTA from '../../components/cta';

const CareerForm = ({ career }) =>{
    
    const {
        faculty,
        form: {
            title,
            image
        }
    } = career;

    const facultyColor = faculty.color;
    
    return (
        <BGSection spaceNone>
            <BackgroundImage fluid={image.localFile.childImageSharp.fluid} >
                <Container>
                    <Row >
                        <Col size="auto" css={css`background-color: ${facultyColor};`}> 
                                <Form method="POST" action="/">
                                    <SectionTitle color={colors.white}>{title}</SectionTitle>
                                    <Input type="text" placeholder="Nombre"/>
                                    <Input type="email" placeholder="Correo Electronico"/>
                                    <Input type="tel" placeholder="Numero de telefono"/>
                                    <Input type="text" placeholder="Cuidad de reciencia"/>
                                    <Input type="textarea" placeholder="Programa de interes"/>
                                    <CTA to="#" cta>ENVIAR</CTA>
                                </Form>
                        </Col>
                    </Row>
                </Container>
            </BackgroundImage>
        </BGSection>
    );

}

export default CareerForm;

const BGSection = styled(Section)`
    background: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

`;

const Form = styled.form`
    padding: 5rem;
    text-align: left;
`;


const SectionTitle = styled.h2`
    color: ${props => props.color};
    margin-bottom: 6rem;
    text-align: left;
    font-weight: 1000;
    ${mq.md}{
        max-width: 26rem;
    }
`;

const Input = styled.input`
    border-radius: 1.2rem;
    display: block;
    border: none;
    margin: 1.5rem auto;
    max-width: 100%;
    padding: 2rem 6rem;
`;
