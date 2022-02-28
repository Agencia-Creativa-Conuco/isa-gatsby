import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";
import useFiles from "../../../hooks/useFiles";
import { container, mq } from "../../../components/layout/new/";

const ServiciosEstudiantilesClinica = () => {
  const images = useFiles();

  const title = "Salud y Enfermería",
    content = `
            <p>Incentiva la salud y ofrece servicios de atención primaria a la comunidad universitaria. </p>
            <p>La Unidad de Salud y Enfermería se enfoca en atender y orientar las necesidades de salud y emergencias que puedan surgir durante el desarrollo de la actividad académica y administrativa de la Universidad, ofreciendo servicios de atención primaria, primeros auxilios ambulatorios y de urgencia a la comunidad universitaria.</p>
            <p>Esta unidad promueve además, campañas orientadas a fomentar hábitos de conductas sanas y riesgos de enfermedades, con el objetivo primordial de contribuir al desarrollo integral, tanto de los estudiantes, como de los empleados, mediante la prevención, mantenimiento y promoción de la salud. </p>
            <p><strong>Horarios</strong><br>
            Lunes a viernes de 8:00 a.m. a 7:00 p.m.<br>
            Sábados de 8:00 a.m. a 5:00 p.m.</p>
        `,
    image = images["servicios-estudiantiles"].enfermeria,
    cta = null;

  return (
    <Section id="section_4">
      <DecoLogo>
        <Media media={image} size="56.25%" sizeMD="135%" sizeLG="70%" bgColor />
      </DecoLogo>

      <ContentCol>
        <DivTitle>
          <SectionTitle>{title}</SectionTitle>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          {cta ? (
            <Cta to={cta.url} target={cta.target}>
              {cta.title}
            </Cta>
          ) : null}
        </DivTitle>
      </ContentCol>
    </Section>
  );
};

export default ServiciosEstudiantilesClinica;

const Section = styled.section`
  ${container}
  padding: 0;
  margin-top: 5.5rem;
  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    margin-top: 9.6rem;
    margin-bottom: 9.6rem;
    grid-template-columns: 59% 46%;
  }
`;

const ContentCol = styled.div`
  z-index: 1;
  position: relative;
  /* padding-bottom: 4rem; */
  padding: 0 1.5rem 4rem 1.5rem;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.primary.light};
    opacity: 0.3;
    z-index: -1;
    transform-origin: 50% 100%;
    ${mq.md} {
      transform: scale(1.2, 2);
    }
  }
`;

const Media = styled(FeaturedMedia)`
  z-index: 2;

  // ${mq.md}{
  //     transform: translateX(2rem);
  // }

  // ${mq.lg}{
  //     transform: translateX(4rem);
  // }
`;

const DivTitle = styled.div``;

const SectionTitle = styled.h2`
  margin-bottom: 2rem;
`;

const DecoLogo = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -4%;
    background: ${colors.blue.dark};
    width: 15%;
    padding-bottom: 7%;
    z-index: 5;
    // transform: translate(50%,0);
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: -4%;
    background: ${colors.cta.base};
    width: 45%;
    padding-bottom: 7%;
    z-index: 4;
    // transform: translate(50%,0);
  }
`;
