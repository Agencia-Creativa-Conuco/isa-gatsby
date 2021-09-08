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
        <BackgroundImage Tag="section" fluid={image?.childImageSharp.fluid}>
            <Container>
                <Row>
                    <Col size="auto" css={css`background-color: ${colors.gray.light};`}>
                        <Wrapper>
                            <Title>Solicitud de admisión</Title>
                            <Form formId="69ce8ab3-acc5-438e-bd13-b5bb7a7c7ebf" cardStyle={false} />
                        </Wrapper>
                    </Col>
                </Row>
            </Container>
        </BackgroundImage>
    );

}

export default AdmissionForm;

const Wrapper = styled.div`
    max-width: 40rem;
    padding: 2rem 0;
    ${mq.md}{
        padding: 4rem;
    }
`;

const Title = styled.h2`
    text-transform: uppercase;
    margin-bottom: 3rem;
`;