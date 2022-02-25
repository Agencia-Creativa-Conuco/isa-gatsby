import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import colors from "../../../components/styles/colors";
import Form from "../../../components/form";
import ctas from "../../../components/styles/cta";
import useGrados from "../../../hooks/useGrados";
import useFiles from "../../../hooks/useFiles";
import FeaturedMedia from "../../../components/featured-media";
import { container, mq } from "../../../components/layout/new/";

const AdmisionesForm = ({ ...props }) => {
  //Consultar y optener logo.svg
  const image = useFiles().admisiones.form;

  const [active, setActive] = useState(0);

  const forms = useGrados()
    //Solo muestra los grados que tienen formulario
    .sort((a, b) => a.order - b.order)
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

  return forms.length > 1 ? (
    <Section id="form" style={{ overflow: "hidden" }}>
      <Container fluid id="section_3">
        <Media media={image} size="56.25%" position="40% 40%"></Media>

        <Wrapper
          css={css`
            background-color: ${colors.gray.light};
          `}
        >
          <Title>Solicitud de admisión</Title>
          <Buttons>
            {forms.map((form, index) => {
              const { name, action } = form;

              return (
                <div key={index}>
                  <Grade
                    color={colors.primary.dark}
                    hidden={index === 0 || index !== active}
                  >
                    {name}
                  </Grade>
                  {form.tipo === "google" ? (
                    <Link
                      href={form.googleFormulario}
                      target="_blank"
                      hidden={index === active || (active >= 1 && index >= 1)}
                    >
                      {name}
                    </Link>
                  ) : (
                    <Cta
                      key={index}
                      onClick={action}
                      hidden={index === active || (active >= 1 && index >= 1)}
                    >
                      {name}
                    </Cta>
                  )}
                </div>
              );
            })}
          </Buttons>
          <Displayer>
            {forms
              .filter(
                (form, index) => index === active && form.tipo === "hubspot"
              )
              .map((form, index) => {
                const formIds = form.hsFormularios.map(
                  (item) => item.idFormulario
                );

                return <Form key={index} formIds={formIds} cardStyle={false} />;
              })}
          </Displayer>
        </Wrapper>
      </Container>
    </Section>
  ) : null;
};

export default AdmisionesForm;

const Section = styled.section``;

const Container = styled.div`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  justify-content: flex-start;
`;

const Media = styled(FeaturedMedia)`
  width: 100%;
  height: 100%;
  ${mq.md} {
    height: 100%;

    position: absolute;
  }
`;

const Wrapper = styled.div`
  background-color: ${colors.gray.light};
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 4rem 2rem 8rem;
  z-index: 5;
  ${mq.md} {
    padding: 4rem;
    max-width: 40rem;
    min-height: 65rem;
    margin-left: 8rem;
  }
  ${mq.xl} {
    margin-left: 15rem;
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
    padding: 0.5rem;
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
