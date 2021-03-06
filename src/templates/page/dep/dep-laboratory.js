import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../../components/featured-media";
import Cta from "../../../components/cta";
import useFiles from "../../../hooks/useFiles";
import { container, mq } from "../../../components/layout/new";

const DEPLaboratory = () => {
  const images = useFiles();

  const dataLaboratory = [
    {
      title: "Laboratorio de Energía Renovables",
      copy: "El LER, está orientado a contribuir con el desarrollo social, económico y la protección ambiental, a través de las energías renovables enfocadas en el desarrollo de investigaciones estratégicas y proyectos, así como de tecnologías apropiadas para las condiciones de diferentes zonas y sectores que representen alternativas a la provisión de energía en el marco de un desarrollo sostenible, difundir conocimientos científicos y tecnológicos especializados, relacionados con el aprovechamiento de las energías renovables y el medio ambiente y ofrecer propuestas de formación y asesorías que satisfagan la demanda de capacitación en temas de energía renovable. Otros de sus objetivos es buscar soluciones a las problemáticas energéticas y ambientales, además de integrar la sinergia de estas soluciones para el sector productivo, social y ambiental, así como impulsar la transferencia de las tecnologías resultantes.",
      image: images["direccion-extension-y-proyectos"].ler,
      cta: null,
    },
    {
      title: "Laboratorio de Análisis Industrial e Inocuidad de los Alimentos",
      copy: "El Laboratorio de Inocuidad de Alimentos y Análisis Industrial (LIAAI), es una dependencia de carácter científico y tecnológico, con autonomía administrativa, adscrito a la Universidad ISA. El LIAAI nace con la intención de responder a la necesidad del sector agrícola e industrial de tener a la disposición un laboratorio, con personal altamente capacitado, tecnología especializada, capaz de ofrecer servicios de análisis destinados a confirmar la calidad de los productos según los requerimientos nacionales e internacionales.",
      image: images["direccion-extension-y-proyectos"].liaai,
      cta: {
        url: "/liaai",
        title: "Conoce más",
      },
    },
  ];

  return (
    <Section spaceTopNone id="section_5">
      {dataLaboratory.map((item, index) => {
        const { title, copy, image, cta } = item;

        return (
          <Container fluid key={index}>
            <FeaturedMedia media={image} size="56.25%" heightMD="100%" />
            <Content orderMD={index % 2 ? 2 : 1}>
              <Title>{title}</Title>
              <Copy>{copy}</Copy>
              {cta ? (
                <Cta to={cta.url} target={cta.target}>
                  {cta.title}
                </Cta>
              ) : null}
            </Content>
          </Container>
        );
      })}
    </Section>
  );
};

export default DEPLaboratory;

const Section = styled.section`
  margin-bottom: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.6rem;
  }
`;

const Container = styled.div`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  background-color: #fafafa;
  ${mq.md} {
    grid-template-columns: 50% 50%;
    div:first-of-type {
      order: 2;
    }
  }
`;

const Content = styled.div`
  margin: 4rem auto;
  padding: 0 1.5rem;

  order: ${(props) => props.orderMD};
  ${mq.lg} {
    margin: 0 auto;
    padding: 5%;
    box-sizing: content-box;
  }
`;

const Title = styled.h2`
  margin-bottom: 3rem;
`;

const Copy = styled.p`
  position: relative;
`;

// const ServiceLink = styled(link)`
//         font-size: 2.3rem;
//         text-decoration: none;
//         color: ${props => props.color};
// `;
