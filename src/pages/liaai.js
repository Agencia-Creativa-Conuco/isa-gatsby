import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Carousel from 'react-slick'
import { Section, Container, Row, Col, mq } from '../components/layout/index'
import Layout from '../components/layout'
import FeaturedMedia from '../components/featured-media'
import useFiles from '../hooks/useFiles'
import colors from '../components/styles/colors'
import { LeftArrowIcon, RightArrowIcon } from '../components/icons'
import { useStaticQuery, graphql } from 'gatsby'

const Arrows = (props) => {
  const Arrow = styled.div`
    ${({ bgColor = 'white', color = colors.primary.dark }) => css`
      border-radius: 50%;
      background-color: ${bgColor};
      color: ${color};
      margin: 0 3rem;
      z-index: 2;
      position: absolute;
      top: 50%;

      ${mq.md} {
        display: block !important;
        width: 5rem;
        height: 5rem;
        padding: 1rem;
        margin: 0;
        box-shadow: 0px 0px 1px #b7b8b9;
      }
      &:focus {
        background-color: ${bgColor};
        color: ${color};
      }
      &:hover {
        background-color: ${bgColor};
        color: ${color};
      }
      &:before {
        content: initial;
      }
    `}
  `

  return <Arrow {...props} />
}

const LIAAI = (props) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: ["liaai"] } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  const images = useFiles()['liaai']

  const metaData = {
    title: 'LIAAI',
    description:
      'El Laboratorio de Inocuidad de Alimentos y Análisis Industrial (LIAAI), es una dependencia de carácter científico y tecnológico, con autonomía administrativa, adscrito a la Universidad ISA.  El LIAAI nace con la intención de responder a la necesidad del sector agrícola e industrial de tener a la  disposición un laboratorio, con personal altamente capacitado, tecnología especializada, capaz de ofrecer servicios de análisis destinados a confirmar la calidad de los productos según los requerimientos nacionales e internacionales.',
  }

  const imagesSlider = allFile.nodes.reduce((obj, item) => {
    return {
      ...obj,
      [item.name]: item,
    }
  }, {})

  return (
    <Layout {...props} {...metaData}>
      <Section medium spaceBottomNone zIndex={3}>
        <Container>
          <Overlay>
            <Row>
              <Col>
                <Logo>
                  <FeaturedMedia media={images.logo} />
                </Logo>
                <Title>
                  Laboratorio de Análisis Industrial e Inocuidad de los
                  Alimentos
                </Title>
                <p>
                  El Laboratorio de Inocuidad de Alimentos y Análisis Industrial
                  (LIAAI), es una dependencia de carácter científico y
                  tecnológico, con autonomía administrativa, adscrito a la
                  Universidad ISA. El LIAAI nace con la intención de responder a
                  la necesidad del sector agrícola e industrial de tener a la
                  disposición un laboratorio, con personal altamente capacitado,
                  tecnología especializada, capaz de ofrecer servicios de
                  análisis destinados a determinar la calidad de los productos
                  según los requerimientos nacionales e internacionales.
                </p>
              </Col>
            </Row>
          </Overlay>
        </Container>
      </Section>
      <SPoliticas spaceBottomNone>
        <SSection
          as="div"
          bgColor={colors.primary.dark}
          color="white"
          spaceTopNone
          css={css`
            padding-top: 5%;
          `}
        >
          <Section as="div" spaceBottomNone>
            <Container>
              <Row>
                <Col>
                  <SubTitle color="white">Políticas de Gestión LIAAI</SubTitle>
                </Col>
              </Row>
              <ListPolíticas>
                <li>
                  El Laboratorio de Inocuidad de Alimentos y Análisis Industrial
                  (LIAAI) tiene como política garantizar la competencia técnica
                  en sus actividades, así como la validez técnica de los
                  resultados de ensayos microbiológicos, químicos, físicos y
                  físicoquímicos, cumpliendo, permanentemente, los
                  requerimientos de nuestros clientes, las reglamentaciones
                  aplicables de los organismos normativos en el ámbito nacional
                  e internacional y los requisitos de las organizaciones que
                  otorgan reconocimiento.
                </li>
                <li>
                  La Alta Gerencia asegura la provisión de los recursos
                  necesarios (personal, equipos, instalaciones, trazabilidad
                  metrológica, información y seguridad) para gestionar riesgos y
                  lograr que las operaciones se desarrollen en forma coherente,
                  confiable, imparcial y confidencial.
                </li>
                <li>
                  El personal y la Alta Gerencia del LIAAI están totalmente
                  comprometidos con el cumplimiento del sistema de gestión y la
                  implementación de mejoras e innovación de todos los procesos,
                  según la Norma ISO/IEC/17025.
                </li>
              </ListPolíticas>
            </Container>
          </Section>
        </SSection>
      </SPoliticas>
      <SectionSlider spaceTopNone>
        <Container>
          <Row>
            <Col noGutters size={12}>
              <Carousel
                prevArrow={
                  <Arrows>
                    <LeftArrowIcon />
                  </Arrows>
                }
                nextArrow={
                  <Arrows>
                    <RightArrowIcon />
                  </Arrows>
                }
                autoplay={false}
                pauseOnHover
              >
                {Object.values(imagesSlider)
                  .filter((image) => image.name.includes('liaai'))
                  .map((image, index) => {
                    return (
                      <FeaturedMedia
                        key={index}
                        media={image}
                        size="56.25%"
                        bgColor
                      />
                    )
                  })}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </SectionSlider>
      <SSection>
        <Container>
          <Row>
            <Col>
              <SubTitle>Servicios que ofrece</SubTitle>
            </Col>
          </Row>
          <Row>
            <Col size={12} sizeMD={6}>
              <h3>Análisis Microbiológicos</h3>
              <ul>
                <li>Aerobio Mesófilos</li>
                <li>Echericha coli</li>
                <li>Coliformes Fecales</li>
                <li>Coliformes Totales</li>
                <li>Enterobacteria</li>
                <li>Listeria</li>
                <li>Pseudomona</li>
                <li>Recuent E.c</li>
                <li>Salmonella</li>
                <li>Staphylococcus aureus</li>
                <li>CPP Aerobios Mesófilos</li>
                <li>CPP E. coli</li>
                <li>CPP Enterobacterias</li>
                <li>CPP Coliformes Totales</li>
                <li>CPP Salmonella</li>
                <li>CPP Staphylococcus aureus</li>
                <li>NMP E. coli</li>
                <li>NMP Coliformes Fecales</li>
                <li>NMP Coliformes Totales</li>
                <li>NMP Pseudomonas</li>
              </ul>
            </Col>
            <Col size={12} sizeMD={6}>
              <h3>Análisis Físicos, Químicos y Fisico-Químicos</h3>
              <ul>
                <li>Pesticidas en frutas y vegetales.</li>
                <li>
                  Fisico-Quimicos: pH, conductividad eléctrica, turbidez,
                  salinidad, dureza y sólidos totales disueltos.
                </li>
                <li>Nitritos.</li>
                <li>% Ceniza total.</li>
                <li>Residuos de pesticidas (frutas, vegetales, suelos) </li>
                <li>pH en alimentos </li>
                <li>pH en agua </li>
                <li>pH en suelos </li>
                <li>Turbidez </li>
                <li>Sólidos Totales Disueltos ( STD) </li>
                <li>Conductividad eléctrica (CE) </li>
                <li>Demanda Bioquímica de Oxígeno (DBO) </li>
                <li>Demanda Química de Oxígeno (DQO) </li>
                <li>Fosfato reactivo (ortofosfato) </li>
                <li>Dureza Salinidad </li>
                <li>Porcentaje de Cenizas Totales </li>
                <li>Humedad </li>
                <li>Actividad de Agua </li>
                <li>Materia Seca </li>
                <li>Sólidos Solubles</li>
                <li>Nitritos (En Embutidos) </li>
                <li>Acidez Titulable </li>
                <li>Viscosidad </li>
                <li>Consistencia</li>
                <li>Índice de solubilidad en agua </li>
                <li>Índice de absorción de agua </li>
                <li>Poder de hinchamiento </li>
                <li>Densidad aparente (alimentos y forraje)</li>
                <li>Granulometría/tamaño de partículas Materia volátil </li>
                <li>Poder calorífico superior </li>
                <li>Carbono fijado </li>
                <li>Carbono orgánico total (suelos) </li>
                <li>Materia orgánica total (suelos) </li>
                <li>Textura (suelos)</li>
                <li>Materia grasa en leche (Gerber) </li>
                <li>Materia grasa en carne y embutidos (Soxhlet) </li>
                <li>Índice de refracción </li>
                <li>Capacidad de retención de agua (carne y embutidos) </li>
                <li>Contenido de metoxilos (pectinas)</li>
                <li>Contenido Ácido galacturónico (pectinas) </li>
                <li>Grado de Esterificación (pectinas) </li>
                <li>
                  Pectina soluble en agua y pectina total Ácidos Grasos Libres
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </SSection>
    </Layout>
  )
}

export default LIAAI

const Overlay = styled.div`
  padding: 5%;
  position: relative;
  background-color: white;
  margin-bottom: -10%;
  border-radius: 2rem;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70%;
    box-shadow: 0 0 3.5rem rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
`
const SectionSlider = styled(Section)`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: 0;
    background: ${colors.primary.dark};
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 50%;
    right: 0;
    width: 10%;
    padding-bottom: 10%;
    height: 0;
    background-color: ${colors.primary.base};
    transform: translate(50%, 50%);
    z-index: -1;
  }
`

const SPoliticas = styled.section`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5%;
    padding-bottom: 5%;
    height: 0;
    background-color: ${colors.primary.base};
    transform: translate(50%, -50%);
    z-index: 1;
  }
  /* &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10%;
    padding-bottom: 10%;
    height: 0;
    background-color: ${colors.primary.base};
    transform: translate(50%, 50%);
    z-index: 1;
  } */
`

const Logo = styled.div`
  max-width: 25rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  ${mq.md} {
    max-width: 35rem;
  }
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 4rem;
`

const SSection = styled(Section)`
  ${({ bgColor = 'initial', color }) => css`
    background-color: ${bgColor};
    color: ${color};
    overflow: hidden;
  `}
`

const SubTitle = styled.h2`
  ${({ color }) => css`
    color: ${color};
    margin-top: 0;
    margin-bottom: 3rem;
  `}
`

const ListPolíticas = styled.ul`
  display: grid;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  margin: 0;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`
