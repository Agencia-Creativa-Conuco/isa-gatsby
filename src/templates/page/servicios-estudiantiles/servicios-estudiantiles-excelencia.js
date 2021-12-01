import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Container,
  Section,
  Row,
  Col,
  mq,
} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";
import useFiles from "../../../hooks/useFiles";
import Carousel from "react-slick";



const ServiciosEstudiantilesExcelencia = () => {
  const images = useFiles();

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState([]);
  const [slider2, setSlider2] = useState([]);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const title = "Programa Premiación a la Excelencia",
    content = `
            <p>El programa de premiación a la excelencia académica, es una actividad donde la institución, a través de la implementación de un proceso de reconocimiento periódico, público y continuo, exalta los esfuerzos exitosos logrados por los estudiantes al final del período académico cursado y al cierre del año académico. Esta celebración se realiza una vez al año.</p>
            <p><b>Objetivos</b></p>
            <ul>
                <li>Mantener presente, en el estudiantado, el valor de la excelencia como base y principio que guía las acciones de la Universidad.</li>
                <li>Fortalecer el espíritu de competencia sana entre estudiantes para alcanzar mejores rendimientos académicos, contribuyendo así en la creación de una cultura amplia, alentadora y compartida hacia la excelencia académica.</li>
                <li>Fortalecer la relación entre estudiantes fomentando los valores de respeto, responsabilidad, solidaridad, colaboración, y servicio en el acontecer académico cotidiano.</li>
            </ul>
        `,
    // image = images["servicios-estudiantiles"].excelencia,
    cta = null;

  const excelencia = [
    {
      image: images["servicios-estudiantiles"].excelencia,
    },
    {
      image: images["servicios-estudiantiles"].excelencia,
    },
    {
      image: images["servicios-estudiantiles"].excelencia,
    },
    {
      image: images["servicios-estudiantiles"].excelencia,
    },
    {
      image: images["servicios-estudiantiles"].excelencia,
    },
  ];

  return (
    <Section>
      <Container>
        <Row>
          <Col size={12} sizeLG={7} zIndex={2} noGutters>
            <DecoLogo decoBg={colors.blue.dark} decoBgA={colors.cta.base}>
              <Row>
                <Col size={12} sizeMD={10}>
                  <Carousel
                    asNavFor={nav2}
                    pauseOnHover
                    ref={(slider) => setSlider1(slider)}
                  >
                    {excelencia
                      ? excelencia.map((item, index) => {
                          return (
                            <Logo
                              key={index}
                              media={item.image}
                              size="56.25%"
                              bgColor
                            />
                          );
                        })
                      : null}
                  </Carousel>
                </Col>
                <Col sizeMD={2} alignMDSelf="center">
                  <Carousel
                    autoplay
                    asNavFor={nav1}
                    ref={(slider) => setSlider2(slider)}
                    slidesToShow={4}
                    pauseOnHover
                    centerMode={true}
                    vertical={true}
                    verticalSwiping={true}
                    responsive ={
                   [
                        {
                          breakpoint:768,
                          settings: {
                            vertical:false
                          }
                        },
       

                      ]
                    }
                  >
                    {excelencia
                      ? excelencia.map((item, index) => {
                          return (
                            <Dot
                              key={index}
                              onClick={(e) => nav2.slickGoTo(index)}
                            >
                              <Logo media={item.image} size="56.25%" bgColor />
                            </Dot>
                          );
                        })
                      : null}
                  </Carousel>
                </Col>
              </Row>
            </DecoLogo>
          </Col>
          <ContentCol bgColor={colors.primary.light}>
            <DivTitle color={colors.blue.dark}>
              <SectionTitle>{title}</SectionTitle>
              <div dangerouslySetInnerHTML={{ __html: content }} />
              {cta ? (
                <Cta to={cta.url} target={cta.target}>
                  {cta.title}
                </Cta>
              ) : null}
            </DivTitle>
          </ContentCol>
        </Row>
      </Container>
    </Section>
  );
};

export default ServiciosEstudiantilesExcelencia;

const ContentCol = styled(Col)`
  ${({ bgColor = "lightblue" }) => css`
    z-index: 1;
    position: relative;
    padding-bottom: 4rem;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${bgColor};
      opacity: 0.3;
      z-index: -1;
      transform-origin: 50% 100%;
      ${mq.lg} {
        transform: scale(1.2, 2);
      }
    }
  `}
`;

const Media = styled(FeaturedMedia)`
  // ${mq.md}{
  //     transform: translateX(2rem);
  // }

  // ${mq.lg}{
  //     transform: translateX(4rem);
  // }
`;

const Dot = styled.div`
  padding: 0.5rem;
`;

const Logo = styled(FeaturedMedia)``;

const DivTitle = styled.div`
  margin-left: 1rem;
`;

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
    background: ${(props) => props.decoBg};
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
    background: ${(props) => props.decoBgA};
    width: 45%;
    padding-bottom: 7%;
    z-index: 4;
    // transform: translate(50%,0);
  }
`;
