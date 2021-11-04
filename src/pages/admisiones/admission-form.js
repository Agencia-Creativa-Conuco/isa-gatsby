import React, { useState } from 'react';
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col, mq} from "../../components/layout/index";
import colors from '../../components/styles/colors';
import BackgroundImage from "gatsby-background-image";
import Form from '../../components/form';
import ctas from "../../components/styles/cta";

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

    const [ active, setActive ] = useState(0);

    const forms = [
        {
            name: "Regresar",
            ids: [],
            action: () => {
                setActive(0);
            }
        },
        {
            name: "Grado",
            ids: ["69ce8ab3-acc5-438e-bd13-b5bb7a7c7ebf","80f9144a-c033-4af4-a60e-b628a3d8e2c1", "8ccea767-afc6-4f73-a829-a7b4e44bb189","d5d2a0fe-39bc-4782-b7a3-62a689979c4f"],
            action: () => {
                setActive(1);
            }
        },
        {
            name: "Posgrado",
            ids: ["de559321-c71f-4850-ab19-5c8794a2854b","72ac2cd0-9514-4eef-bda4-20f8a69f6755","7808941e-8863-407a-af36-63ed5770405b","de14d62e-19a6-4d3c-afdc-7d2d8f609bd4"],
            action: () => {
                setActive(2);
            }
        }
    ]


    return (
        <BackgroundImage Tag="section" fluid={image?.childImageSharp.fluid} id="form">
            <Container fluid>
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
                                    forms.map( (form, index )=>{
                                        return(
                                            <div key={index}>
                                                <Grade
                                                    color={colors.primary.dark}
                                                    hidden = { 
                                                        index === 0 || index !== active
                                                    }
                                                >{form.name}</Grade>
                                                <Cta 
                                                    key={index} 
                                                    onClick={form.action}
                                                    hidden = { 
                                                        (index === active) || (active >= 1 && index >= 1)
                                                    }
                                                >
                                                    {form.name}
                                                </Cta>
                                            </div>
                                        )
                                    })
                                }
                            </Buttons>
                            <Displayer>
                                {
                                    forms
                                        .filter( (form, index) => form.ids.length && index === active )
                                        .map( (form, index) => {
                                        return (
                                            <Form
                                                key={index} 
                                                formIds={form.ids} 
                                                cardStyle={false} 
                                            />
                                        )
                                    })
                                }
                            </Displayer>
                        </Wrapper>
                    </Col>
                    <Col size="auto" sizeMD="1" orderMD={1}/>
                </Row>
            </Container>
        </BackgroundImage>
    );

}

export default AdmissionForm;

const Wrapper = styled.div`
    width: 100rem;
    max-width: 60rem;
    margin: 0 auto;
    padding: 2rem 0;
    ${mq.md}{
        padding: 4rem;
        min-height: 92rem;
    }
`;

const Title = styled.h2`
    text-transform: uppercase;
    margin-bottom: 3rem;
`;

const Grade = styled.h3`
    ${({color="darkblue"})=>css`
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

const Buttons = styled.div``;

const Displayer = styled.div``;