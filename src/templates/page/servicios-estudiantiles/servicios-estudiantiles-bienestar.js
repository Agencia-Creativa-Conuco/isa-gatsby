import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";
import useFiles from "../../../hooks/useFiles";
import { container, mq } from "../../../components/layout/new/";

const ServiciosEstudiantilesBienestar = ({ page }) => {
  const images = useFiles();

  const title = "Bienestar Estudiantil",
    content = `
            <p>Implementa estrategias para garantizar el bienestar y facilitar el desarrollo integral de los/las estudiantes. Este departamento, a su vez, está estructurado por diferentes unidades: Orientación e Inclusión Estudiantil, Arte, Cultura y Valores, Articulación Estudiante entorno, conformado por comités estudiantiles. </p>
        `,
    image = images["servicios-estudiantiles"].bienestar_estudiantil,
    cta = null;

  return (
    <Section spaceNone zIndex={20} id="section_2" fluid>
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

export default ServiciosEstudiantilesBienestar;

const Section = styled.section`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    grid-template-columns: 50% 50%;
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
    text-align: right;
    padding: 10% 1.5rem;
  }
  &::before {
    content: "";
    position: absolute;
    padding: 1.3%;
    top: 0;
    right: 0;
    background: ${colors.blue.dark};
    opacity: 0.8;
  }
`;

const SectionTitle = styled.h2``;
