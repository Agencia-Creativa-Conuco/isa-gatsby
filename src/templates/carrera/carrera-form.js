import React from "react";
import styled from "@emotion/styled";
import colors from "../../components/styles/colors";
import BackgroundImage from "gatsby-background-image";
import Form from "../../components/form";
import useGrados from "../../hooks/useGrados";
import Cta from "../../components/cta";
import { container, mq } from "../../components/layout/new/";

const CarreraForm = ({ carrera, facultad }) => {
  const { imagenFormulario } = carrera;

  const [grado] = useGrados().filter((grado) => grado.id === carrera.grado.id);

  const formIds = grado.formularios.hsFormularios.map(
    (formulario) => formulario.idFormulario
  );

  const googleForm = grado.formularios.googleFormulario;

  return grado.formularios.tipo ? (
    <Section>
      <BackgroundImage
        fluid={imagenFormulario?.localFile?.childImageSharp?.fluid}
      >
        <Container>
          <Wrapper>
            <Title>Solicitud de admisión</Title>
            {grado.formularios.tipo === "hubspot" ? (
              <Form formIds={formIds} cardStyle={false} />
            ) : grado.formularios.tipo === "google" ? (
              <Cta to={googleForm} target="_blank">
                Solicitar
              </Cta>
            ) : null}
          </Wrapper>
        </Container>
      </BackgroundImage>
    </Section>
  ) : null;
};

export default CarreraForm;

const Section = styled.section`
  /* background: url(${(props) => props.bg}); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Container = styled.div`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  max-width: 40rem;
  min-height: 50rem;
  padding: 2rem 0;
  background-color: ${colors.gray.light};
  ${mq.md} {
    padding: 4rem;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 3rem;
`;
