import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import colors from "../../components/styles/colors";
import BackgroundImage from "gatsby-background-image";
import Form from '../../components/form';
import useGrados from '../../hooks/useGrados';
import Cta from "../../components/cta";

const CarreraForm = ({ carrera, facultad }) =>{
    
    const {
        imagenFormulario
    } = carrera;

    const [grado] = useGrados().filter( (grado) => grado.id  === carrera.grado.id );

    const formIds = grado.formularios.hsFormularios.map( formulario => formulario.idFormulario);

    const googleForm = grado.formularios.googleFormulario;

    return grado.formularios.tipo?(
        <BGSection spaceNone>
            <BackgroundImage fluid={imagenFormulario.localFile.childImageSharp.fluid} >
                <Container>
                    <Row >
                        <Col size="auto" css={css`background-color: ${colors.gray.light};`}> 
                            <Wrapper>
                                <Title>Solicitud de admisión</Title>
                                {
                                    grado.formularios.tipo === "hubspot"?(
                                        <Form formIds={formIds} cardStyle={false} />
                                    ) : grado.formularios.tipo === "google"?(
                                        <Cta to={googleForm} target="_blank">Solicitar</Cta>
                                    ): null
                                }
                            </Wrapper>
                        </Col>
                    </Row>
                </Container>
            </BackgroundImage>
        </BGSection>
    ):null;

}

export default CarreraForm;

const BGSection = styled(Section)`
    background: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

`;

const Wrapper = styled.div`
    max-width: 40rem;
    min-height: 50rem;
    padding: 2rem 0;
    ${mq.md}{
        padding: 4rem;
    }
`;

const Title = styled.h2`
    text-transform: uppercase;
    margin-bottom: 3rem;
`;