import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";
import useFiles from "../../../hooks/useFiles";
import { container, mq } from "../../../components/layout/new/";

const ServiciosEstudiantilesPsicologia = () => {
  const images = useFiles();

  const title = "Orientación e Inclusión Estudiantil",
    content = `
            <p>Orientación e inclusión estudiantil es un servicio orientado a propiciar el bienestar estudiantil y potenciar, en todas sus dimensiones, el desarrollo integral del estudiante mediante los servicios de orientación académica, personal, social y profesional.</p>
            <p>Su objetivo principal es valorar y propugnar por el desarrollo integral de los estudiantes, aportándole la asesoría y respaldo en su proceso de formación académica, personal y social, contribuyendo a la formación de agentes autónomos que se integrarán a la sociedad.</p>
            <p>
            <b> Horario de Asistencia </b>
              <br/></br>
              <b> Lunes a Viernes.  </b> <br/>
              8:00 a.m.-12:00 m. / 1:00 a 5:00 p.m.
              <br/>
             <b> Contactos </b>
              <br/>
              Tel: 809.247.2000 <br/>
              Edificio Kellogg, 2do. Nivel. Universidad ISA.             
            </p>
        `,
    image = images["servicios-estudiantiles"].orientacion_estudiantil,
    cta = null;

  return (
    <Section spaceNone zIndex={2} id="section_3" fluid>
      <FeaturedMedia media={image} size="56.25%" heightMD="100%" bgColor />
      <DivTitle>
        <SectionTitle> {title} </SectionTitle>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {cta ? (
          <Cta to={cta.url} target={cta.target}>
            {cta.title}
          </Cta>
        ) : null}
      </DivTitle>
    </Section>
  );
};

export default ServiciosEstudiantilesPsicologia;

const Section = styled.section`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  z-index: 55;

  ${mq.md} {
    grid-template-columns: 50% 50%;
    div:first-of-type {
      order: 2;
    }
  }
`;

const DivTitle = styled.div`
  max-width: 57rem;
  margin: 0 auto;
  padding: 1.5rem 1.5rem;
  ${mq.sm} {
    padding: 4rem 1.5rem;
  }
  ${mq.md} {
    padding: 10% 1.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    padding: 1.3%;
    bottom: 0;
    left: 0;
    background: ${colors.blue.dark};
    opacity: 0.8;
  }
`;

const SectionTitle = styled.h2``;
