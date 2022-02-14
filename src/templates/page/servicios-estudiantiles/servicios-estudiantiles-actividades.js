import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import {
  Container,
  Row,
  Col,
  Section,
  mq,
} from '../../../components/layout/index'
import Carousel from 'react-slick'
import FeaturedMedia from '../../../components/featured-media'
import { h2 } from '../../../components/styles/tipography'
import colors from '../../../components/styles/colors'
import Cta from '../../../components/cta'
import useFiles from '../../../hooks/useFiles'

const ServiciosEstudiantilesActividades = () => {
  const images = useFiles()

  const title = 'Grupos y clubes estudiantiles',
    actividadesExtracurriculares = [
      {
        title: 'CAISA',
        copy:
          'El Club Ambiental del ISA (CAISA) es un voluntariado que promueve la conservación, preservación y estudio del medio ambiente; conformado por estudiantes, profesores y personal de apoyo de la Institución, interesados en realizar actividades en fomento y conservación de los recursos naturales en la República Dominicana.',
        cta: null,
        image: images['servicios-estudiantiles'].caisa,
        position: '50% 50%',
      },
      {
        title: 'Club de Astronomía',
        copy: 'Es un club integrado por estudiantes de múltiples disciplinas con el interés en común por conocer y divulgar los conocimientos sobre astronomía. En el club se proporciona un ambiente y los materiales adecuados para desarrollar las aptitudes relacionadas con las ciencias espaciales.',
        cta: null,
        image: images['servicios-estudiantiles'].astronomia,
        position: '50% 70%',
      },
      {
        title: 'Club de Lectura',
        copy: 'Es un espacio donde los miembros tienen la oportunidad de reunirse con personas que comparten su pasión por la literatura, con el fin de fortalecer a la comunidad lectora para explotar el máximo potencial de cada uno de los integrantes.',
        cta: null,
        image: images['servicios-estudiantiles'].lectura,
        position: '50% 50%',
      },
      {
        title: 'Pastoral Juvenil',
        copy:
          'Desarrolla acciones encaminadas a fomentar valores, permitiendo a los jóvenes descubrir habilidades de crecimiento personal, fomentar la solidaridad y el respeto, comprometiéndose con Jesucristo y su mensaje.',
        cta: null,
        image: images['servicios-estudiantiles'].pastoral_juvenil,
        position: '50% 40%',
      },
      // {
      //   title: 'Club De Danza',
      //   copy:
      //     'En períodos de tiempo razonables (una vez a la semana, cada quince días, mensual) los participantes se exponen a películas de contenido relevante y al final generan un debate.',
      //   cta: null,
      //   image: images['servicios-estudiantiles'].club_de_danza,
      //   position: '50% 30%',
      // },
      {
        title: 'Club De Ciencias',
        copy:
          'Tiene como misión el contribuir con el fortalecimiento de la enseñanza- aprendizaje de las ciencias en la República Dominicana a través del desarrollo intelectual, científico, cultural y social de los profesores de ciencias de la naturaleza en el país.',
        cta: null,
        image: images['servicios-estudiantiles'].club_de_ciencias,
        position: '50% 30%',
      },
      {
        title: 'Cine Foro',
        copy:
          'En períodos de tiempo razonables (una vez a la semana, cada quince días, mensual) los participantes se exponen a películas de contenido relevante y al final generan un debate.',
        cta: null,
        image: images['servicios-estudiantiles'].cine_foro,
        position: '50% 50%',
      },
      {
        title: 'Club de fotografía',
        copy:
          'Es un grupo formado por estudiantes apasionados por la fotografía, con el objetivo de aprender más acerca del mundo de este fantástico arte y poder desarrollar sus habilidades sin importar que equipo tenga.',
        cta: null,
        image: images['servicios-estudiantiles'].cine_foro,
        position: '50% 50%',
      },
      {
        title: 'CINECLUB',
        copy:
          'Pretende vincular experiencias compartidas a través de un diálogo con el cine, descubrir, observar y debatir de forma crítica la representación cinematográfica. Además de ofrecer un espacio dinámico y creativo que más allá del rol del espectador pasivo, potencie una reflexión colectiva entre compañeros.',
        cta: null,
        image: images['servicios-estudiantiles'].cine_foro,
        position: '50% 50%',
      },
    ]

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState([])
  const [slider2, setSlider2] = useState([])

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])

  return actividadesExtracurriculares ? (
    <Section spaceBottomNone id="section_1">
      <Container>
        <Row>
          <Col>
            <SectionTitle>{title}</SectionTitle>
          </Col>
        </Row>
      </Container>
      <InfoContainer>
        <ImageWrapper>
          <ImageCarousel
            arrows={false}
            asNavFor={nav2}
            autoplay
            autoplaySpeed={5000}
            pauseOnHover
            ref={(slider) => setSlider1(slider)}
          >
            {actividadesExtracurriculares.map((item, index) => {
              const { image, position } = item

              return (
                <FeaturedMedia
                  key={index}
                  media={image}
                  size="56.25%"
                  sizeXL="35%"
                  position={position}
                  bgColor
                />
              )
            })}
          </ImageCarousel>
        </ImageWrapper>
        <ContentWrapper>
          <ContentCarousel
            arrows={false}
            fade
            dots
            appendDots={(dots) => (
              <Dots>
                {dots.map((item, index) => {
                  return <Dot key={index}>{item}</Dot>
                })}
              </Dots>
            )}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {actividadesExtracurriculares.map((item, index) => {
              const { title, copy, cta } = item

              return (
                <Slide key={index}>
                  <Container noGutters>
                    <Row>
                      <Col>
                        <Content>
                          <Title color={colors.shadow.base}>{title}</Title>
                          <Copy color={colors.shadow.text}>{copy}</Copy>
                          {cta ? (
                            <Cta to={cta.url} target={cta.target}>
                              {cta.title}
                            </Cta>
                          ) : null}
                        </Content>
                      </Col>
                    </Row>
                  </Container>
                </Slide>
              )
            })}
          </ContentCarousel>
        </ContentWrapper>
      </InfoContainer>
    </Section>
  ) : null
}

export default ServiciosEstudiantilesActividades

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
`

const InfoContainer = styled.div`
  overflow: hidden;
  position: relative;
  font-size: 0;
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 5rem 1.5rem;
  &:before {
    content: '';
    background-color: ${colors.primary.base};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${mq.lg} {
      opacity: 0.75;
    }
  }
  ${mq.lg} {
    position: absolute;
    top: 0;
    right: 2%;
    height: 100%;
    margin-left: auto;
    padding: 5rem;
    max-width: 40rem;
  }
  ${mq.xl} {
    right: 5%;
    max-width: 57rem;
  }
`

const ImageWrapper = styled.div``

const ImageCarousel = styled(Carousel)``

const ContentCarousel = styled(Carousel)`
  height: 100%;
  padding-bottom: 5rem;
`

const Dots = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2rem;
`

const Dot = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
  button {
    margin: 0 !important;
    padding: 0 !important;
    width: 1.5rem !important;
    height: 1.5rem !important;
    border-radius: 50% !important;
    background-color: white !important;
    opacity: 0.5;
    &:before {
      content: none !important;
    }
    &:after {
      content: none;
    }
  }
  .slick-active {
    button {
      opacity: 1;
    }
  }
`

const Slide = styled.div``

const Content = styled.div`
  font-size: 1.6rem;
  ${mq.md} {
    text-align: right;
  }
`

const Title = styled.h3`
  color: white;
  text-transform: uppercase;
  text-shadow: ${(props) => props.color};
  margin-bottom: 4rem;
  font-weight: 900;
  ${h2}
`

const Copy = styled.p`
  color: white;
  text-shadow: ${(props) => props.color};
`
