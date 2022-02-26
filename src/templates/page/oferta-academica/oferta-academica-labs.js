import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../../components/featured-media";
import Carousel from "react-slick";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";
import useFiles from "../../../hooks/useFiles";
import { h4 } from "../../../components/styles/tipography";
import { container, mq } from "../../../components/layout/new/";

const OfferLabs = () => {
  const images = useFiles();

  const title = "Estudiar en la Universidad ISA, es aprender haciendo",
    content = `
            <p>La estrategia metodológica para la enseñanza de los programas, está basada en la técnica de  ̈ aprender haciendo¨, con un enfoque de interacción entre los estudiantes y los profesores en las aulas y la realización de investigaciones individuales y en grupo sobre temas relevantes  de los cursos.</p>
        `,
    subTitle = "Áreas prácticas",
    sports = [
      {
        name: "Laboratorios",
        image: images["oferta-academica"].laboratorios,
      },
      {
        name: "Planta de procesamiento",
        image: images["oferta-academica"].planta_de_procesamiento,
      },
      {
        name: "Clínica Veterinaria",
        image: images["oferta-academica"].clinica_veterinaria,
      },
      {
        name: "Producción animal",
        image: images["oferta-academica"].produccion_animal,
      },
      {
        name: "Producción agrícola",
        image: images["oferta-academica"].produccion_agricola,
      },
    ],
    cta = null;

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState([]);
  const [slider2, setSlider2] = useState([]);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return (
    <Section id="section_3">
      <div>
        <Carousel
          asNavFor={nav2}
          pauseOnHover
          ref={(slider) => setSlider1(slider)}
        >
          {sports
            ? sports.map((item, index) => {
                return (
                  <Logo key={index} media={item.image} size="56.25%" bgColor />
                );
              })
            : null}
        </Carousel>
        <Carousel
          autoplay
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}
          slidesToShow={3}
          pauseOnHover
          centerMode={true}
        >
          {sports
            ? sports.map((item, index) => {
                return (
                  <Dot key={index} onClick={(e) => nav2.slickGoTo(index)}>
                    <Logo media={item.image} size="56.25%" bgColor />
                  </Dot>
                );
              })
            : null}
        </Carousel>
      </div>
      <ContentCol>
        <DivTitle color={colors.primary.dark}>
          <SectionTitle>{title}</SectionTitle>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <Title>{subTitle}</Title>
          <Container>
            {sports
              ? sports.map((item, index) => {
                  return <Sport key={index}>{item.name}</Sport>;
                })
              : null}
          </Container>
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

export default OfferLabs;

const Section = styled.section`
  ${container}
  padding: 0;
  margin: 9.6rem auto;
  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`;

const ContentCol = styled.div`
  z-index: -1;
  position: relative;

  padding: 0 1.5rem 4rem;
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
      transform: scale(1.2, 1.7);
    }
  }
`;

const Dot = styled.div`
  padding: 0.5rem;
`;

const Logo = styled(FeaturedMedia)``;

const SectionTitle = styled.h2`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    grid-template-columns: auto auto;
  }
`;
const DivTitle = styled.div``;

const Sport = styled.p`
  font-weight: bold;
  margin-bottom: 0.2rem;
  text-transform: capitalize;
`;

const Title = styled.h3`
  ${h4}
  font-weight: 700;
`;
