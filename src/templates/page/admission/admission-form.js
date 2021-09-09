import React from 'react';
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col, mq} from "../../../components/layout/index";
import colors from '../../../components/styles/colors';
import BackgroundImage from "gatsby-background-image";
import Form from '../../../components/form';

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
                            <Form 
                                formId="69ce8ab3-acc5-438e-bd13-b5bb7a7c7ebf" 
                                formIds={["69ce8ab3-acc5-438e-bd13-b5bb7a7c7ebf","80f9144a-c033-4af4-a60e-b628a3d8e2c1", "8ccea767-afc6-4f73-a829-a7b4e44bb189","d5d2a0fe-39bc-4782-b7a3-62a689979c4f"]} 
                                cardStyle={false} 
                            />
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