import React from 'react';
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col, mq} from "../../layout/index";
import colors from '../../styles/colors';
import BackgroundImage from "gatsby-background-image";
import CTA from "../../cta";

const AdmissionForm = ({ state,libraries }) =>{

    //Consultar y optener logo.svg
    const { image } = useStaticQuery( graphql`
        query {
            image: file(relativePath: {eq: "admisiones/form.jpg"}) {
                childImageSharp {
                    fluid( maxWidth: 1200 ) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <BackgroundImage Tag="section" fluid={image?.childImageSharp?.fluid}>
            <Container>
                <Row>
                    <Col size="auto" css={css`background-color: ${colors.blue.dark};`}>
                        <Form method="POST" action="/">
                            <SectionTitle color={colors.white}>Formulario de inscripción</SectionTitle>
                            <Input type="text" placeholder="Nombre"/>
                            <Input type="email" placeholder="Correo Electronico"/>
                            <Input type="tel" placeholder="Numero de telefono"/>
                            <Input type="text" placeholder="Mensaje"/>
                            <StyledCTA to="#" cta>ENTRAR</StyledCTA>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </BackgroundImage>
    );

}

export default AdmissionForm;

const Form = styled.form`
    padding: 2rem;
`;


const SectionTitle = styled.h2`
    color: ${props => props.color};
    margin-bottom: 3rem;
`;

const Input = styled.input`
    border-radius: 1.2rem;
    display: block;
    border: none;
    padding: 2rem 4rem;
    margin: 1.5rem 0;
    max-width: 100%;

    ${mq.lg}{
        padding: 2rem 6rem;
    }
`;


const StyledCTA = styled(CTA)`

    ${mq.md}{
        margin-top: 3rem;
    }
`;
