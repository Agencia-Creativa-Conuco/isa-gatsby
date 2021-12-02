import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import {
  Container,
  Section,
  Row,
  Col,
  mq,
  mqVal,
} from '../../../components/layout/index'
import FeaturedMedia from '../../../components/featured-media'
import colors from '../../../components/styles/colors'
import Cta from '../../../components/cta'
import useFiles from '../../../hooks/useFiles'
import Carousel from 'react-slick'

const ServiciosEstudiantilesAGISA = () => {
  const images = useFiles()

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState([])
  const [slider2, setSlider2] = useState([])

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])

  const title = 'Asociación De Graduados De ISA (AGISA)'
  const content = `
    <p>Es una institución privada, sin fines de lucros que agrupa y promueve el mejoramiento de los profesionales graduados de los diversos programas de estudio del ISA. AGISA surge mediante el decreto número 455 del año 1990 con los objetivos de promover:</p>
    <ul>
        <li>El desarrollo institucional del Instituto Superior de Agricultura, y el acercamiento entre el ISA y sus egresados.</li>
        <li>El desarrollo social, cultural, científico y económico de sus miembros.</li>
        <li>El establecimiento de lazos de amistad, cooperación y compañerismo entre los miembros de la asociación.</li>
        <li>La Cooperación y acercamiento entre las instituciones cívicoculturales, del sector agropecuario y asociaciones que tengan relación o afinidad con AGISA.</li>
        <li>La divulgación de informaciones científicas del sector agropecuario entres sus miembro y a nivel público.</li>
        <li>La difusión de ideas no comprometidas en el orden político-partidista, que conlleven a la búsqueda de soluciones a los grandes problemas de la agricultura dominicana.</li>
    </ul>
  `
  const cta = null

  const agisa = [
    {
      image: images['servicios-estudiantiles'].agisa,
    },
    {
      image: images['servicios-estudiantiles'].agisa,
    },
    {
      image: images['servicios-estudiantiles'].agisa,
    },
    {
      image: images['servicios-estudiantiles'].agisa,
    },
    {
      image: images['servicios-estudiantiles'].agisa,
    },
  ]

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
                      {agisa.map((item, index) => {
                        return (
                          <Logo
                            key={index}
                            media={item.image}
                            size="56.25%"
                            sizeLG="100%"
                            bgColor
                          />
                        )
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
                      {agisa
                        ? agisa.map((item, index) => {
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
                            )
                          })
                        : null}
                    </Carousel>
                  </ThumbnailCarousel>
                  {/* <Row>
                        <Col size={12} sizeMD={9} orderLG={2} noGutters>
                        </Col>
                        <Col sizeMD={3} alignMDSelf="center" noGutters>
                        </Col>
                      </Row> */}
                  {/* <DecoMedia2                          
                                              decoBg={colors.blue.dark}
                                              decoBgA={colors.cta.base}
                                          /> */}
                </DecoMedia>
              </MediaContainer>
              <Content color={colors.blue.dark}>
                <SectionTitle> {title} </SectionTitle>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                {cta ? (
                  <StyledLink to={cta.url} target={cta.target}>
                    {cta.title}
                  </StyledLink>
                ) : null}
              </Content>
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default ServiciosEstudiantilesAGISA

const Wrapper = styled.div`
  box-shadow: silver 0 15px 20px;
  border-radius: 0 0 60px 60px;
  background-color: white;

  ${mq.lg} {
    border-radius: 50px;
    padding: 5%;
    display: grid;
    grid-template-columns: 47.75% 47.75%;
    column-gap: 5%;
  }
`

const Dot = styled.div``

const Logo = styled(FeaturedMedia)``

const Content = styled.div`
  color: ${(props) => props.color};
  padding: 1.5rem;
  ${mq.sm} {
    padding: 5%;
  }
  ${mq.lg} {
    padding: 0;
    order: 1;
  }
`

const SectionTitle = styled.h2`
  font-weight: 900;
  font-size: 2rem;
  margin-top: 0;
  ${mq.md} {
    font-size: 3rem;
  }
`

const StyledLink = styled(Cta)`
  margin-top: 1rem;

  ${mq.md} {
    margin-top: 2.5rem;
  }
`

const MediaContainer = styled.div`
  position: relative;
  ${mq.lg} {
    height: 0;
    padding-bottom: 73%;
    order: 2;
  }
`

const DecoMedia = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 1.5rem;


  &:before {
    content: '';
    position: absolute;
    right: 5%;
    top: 0%;
    transform: translate(0, -50%);
    background: ${colors.primary.base};
    width: 23%;
    padding-bottom: 4%;
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    right: 5%;
    top: 0%;
    transform: translate(0, -50%);
    background: ${colors.primary.dark};
    width: 12%;
    padding-bottom: 4%;
    z-index: -1;
  }

  ${mq.lg} {
    grid-template-columns: 23.75% 73.75%;
    column-gap: 2.5%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &::before{
      z-index: 0;
    }
    &::after{
      z-index: 0;
    }
  }

`

const VisualCarousel = styled.div`
  font-size: 0;

  ${mq.lg} {
    order: 2;
  }
`

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
    order: 1;
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
`
