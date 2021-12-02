import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Container,
  Section,
  Row,
  Col,
  mq,
  mqVal,
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
          <Col>
            <Wrapper>
              <MediaContainer>
                <DecoMedia decoBg={colors.blue.dark} decoBgA={colors.cta.base}>
                  <VisualCarousel>
                    <Carousel
                      asNavFor={nav2}
                      pauseOnHover
                      arrows={false}
                      ref={(slider) => setSlider1(slider)}
                    >
                      {excelencia.map((item, index) => {
                        return (
                          <Logo
                            key={index}
                            media={item.image}
                            size="56.25%"
                            sizeLG="100%"
                            bgColor
                          />
                        );
                      })}
                    </Carousel>
                  </VisualCarousel>

                  <ThumbnailCarousel>
                    <Carousel
                      autoplay
                      asNavFor={nav1}
                      ref={(slider) => setSlider2(slider)}
                      slidesToShow={3}
                      pauseOnHover
                      vertical={true}
                      verticalSwiping={true}
                      arrows={false}
                      responsive={[
                        {
                          breakpoint: mqVal.lg,
                          settings: {
                            vertical: false,
                            verticalSwiping: false,
                            slidesToShow: 4,
                            arrows: false,
                            dots: false,
                            centerMode: true,
                          },
                        },
                      ]}
                    >
                      {excelencia
                        ? excelencia.map((item, index) => {
                            return (
                              <Dot
                                key={index}
                                onClick={(e) => nav2.slickGoTo(index)}
                              >
                                <Logo
                                  media={item.image}
                                  size="56.25%"
                                  sizeLG="100%"
                                  bgColor
                                />
                              </Dot>
                            );
                          })
                        : null}
                    </Carousel>
                  </ThumbnailCarousel>
                </DecoMedia>
              </MediaContainer>

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
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default ServiciosEstudiantilesExcelencia;

const Wrapper = styled.div`
  ${mq.lg} {
    border-radius: 50px;
    padding: 5%;
    display: grid;
    grid-template-columns: 47.75% 47.75%;
    column-gap: 5%;
  }
`;

const ContentCol = styled(Col)`
  ${({ bgColor = "lightblue" }) => css`
    z-index: 1;
    position: relative;
    padding: 5%;
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

const Dot = styled.div``;

const Logo = styled(FeaturedMedia)``;

const DivTitle = styled.div`
  margin-left: 1rem;
`;

const SectionTitle = styled.h2`
  font-weight: 900;
  font-size: 2rem;
  margin-top: 0;
  ${mq.md} {
    font-size: 3rem;
  }
`;


const MediaContainer = styled.div`
  position: relative;
  ${mq.lg} {
    height: 0;
    padding-bottom: 73%;
  }
`;

const DecoMedia = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 1.5rem;
  
  &:before {
    content: "";
    position: absolute;
    left: 5%;
    top: 0%;
    transform: translate(0, -50%);
    background: ${colors.primary.base};
    width: 23%;
    padding-bottom: 4%;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    left: 5%;
    top: 0%;
    transform: translate(0, -50%);
    background: ${colors.primary.dark};
    width: 12%;
    padding-bottom: 4%;
    z-index: -1;
  }

  ${mq.lg} {
      grid-template-columns: 73.75% 23.75%;
      column-gap: 2.5%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
`;

const VisualCarousel = styled.div`
  font-size: 0;
`;

const ThumbnailCarousel = styled.div`
  font-size: 0;
  width: 100%;
  display: block;

  .slick-list {
    padding: 0 !important;
  }

  .slick-slide {
    padding: 0 0.75rem;
  }

  ${mq.lg} {
    height: 100%;
    position: relative;

    .slick-slider {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
    }

    .slick-list {
      height: 100% !important;
    }

    .slick-slide {
      padding: 0;
      padding-bottom: 10%;
      overflow: hidden;
    }
  }
`;
