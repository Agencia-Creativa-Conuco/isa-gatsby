import React, { useState } from 'react';
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Container, Row, Col, mq } from "../../../components/layout/index";
import colors from '../../../components/styles/colors';
import BackgroundImage from "gatsby-background-image";
import Form from '../../../components/form';
import ctas from "../../../components/styles/cta";
import useGrados from '../../../hooks/useGrados';
import useFiles from '../../../hooks/useFiles';

const AdmisionesForm = ({ ...props }) => {
    
      //Consultar y optener logo.svg
    const image = useFiles().admisiones.form;

    const [active, setActive] = useState(0);

    const forms = useGrados()
        //Solo muestra los grados que tienen formulario
        .filter((grado) => grado.formularios.tipo)
        .map((grado, index) => {
            grado.formularios.action = () => {
                setActive(index + 1);
            };
            grado.formularios.name = grado.nombre;
            return grado.formularios;
        });

    forms.unshift({
        name: "Regresar",
        formularios: [],
        action: () => {
            setActive(0);
        },
    });

    return forms.length > 1?(
        <BackgroundImage Tag="section" fluid={image?.childImageSharp.fluid} id="form">
            <Container fluid id="section_3">
                <Row>
                    <Col
                        size={12}
                        sizeMD="auto"
                        orderMD={2}
                        css={css`background-color: ${colors.gray.light};`}
                    >
                        <Wrapper>
                            <Title>Solicitud de admisión</Title>
                            <Buttons>
                                {
                                    forms.map((form, index) => {
                                        const { name, action } = form;

                                        return (
                                            <div key={index}>
                                                <Grade
                                                    color={colors.primary.dark}
                                                    hidden={
                                                        index === 0 || index !== active
                                                    }
                                                >{name}</Grade>
                                                {
                                                    form.tipo === "google"?(
                                                        <Link 
                                                            href={form.googleFormulario} 
                                                            target="_blank"
                                                            hidden={
                                                                (index === active) || (active >= 1 && index >= 1)
                                                            }    
                                                        >{name}</Link>
                                                    ) : (
                                                        <Cta
                                                            key={index}
                                                            onClick={action}
                                                            hidden={
                                                                (index === active) || (active >= 1 && index >= 1)
                                                            }
                                                        >{name}</Cta>
                                                    )
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </Buttons>
                            <Displayer>
                                {
                                    forms
                                        .filter((form, index) => index === active && form.tipo === "hubspot")
                                        .map((form, index) => {

                                                const formIds = form.hsFormularios.map( item => item.idFormulario);

                                                return (
                                                    <Form
                                                        key={index}
                                                        formIds={formIds}
                                                        cardStyle={false}
                                                    />
                                                )
                                            }
                                        )
                                }
                            </Displayer>
                        </Wrapper>
                    </Col>
                    <Col size="auto" sizeMD="1" orderMD={1} />
                </Row>
            </Container>
        </BackgroundImage>
    ) : null;
}

export default AdmisionesForm;

const Wrapper = styled.div`
    width: 100rem;
    max-width: 60rem;
    margin: 0 auto;
    padding: 2rem 0;
    ${mq.md}{
        padding: 4rem;
        min-height: 65rem;
    }
`;

const Title = styled.h2`
    text-transform: uppercase;
    margin-bottom: 3rem;
`;

const Grade = styled.h3`
    ${({ color = "darkblue" }) => css`
        text-transform: uppercase;
        /* background-color: #F0F0F0; */
        padding: .5rem;
        color: ${color};
        font-weight: 900;
        border-top: 0.2rem solid ${color};
        border-bottom: 0.2rem solid ${color};
    `}
`;

const Cta = styled.button`
    ${ctas}
    display: block;
    margin-bottom: 2rem;
`;

const Link = styled.a`
    ${ctas}
`;

const Buttons = styled.div``;

const Displayer = styled.div``;