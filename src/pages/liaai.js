import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Carousel from "react-slick";
import { Section, Container, Row, Col, mq } from '../components/layout/index'
import Layout from '../components/layout'
import FeaturedMedia from '../components/featured-media'
import useFiles from '../hooks/useFiles'
import colors from '../components/styles/colors'
import { LeftArrowIcon, RightArrowIcon } from '../components/icons'
import { useStaticQuery, graphql } from 'gatsby'


const Arrows = (props) => {
  const Arrow = styled.div`
    ${({ bgColor ="white", color=colors.primary.dark }) => css`
      border-radius: 50%;
      background-color: ${bgColor};
      color:${color};
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
  `;

  return <Arrow {...props} />
}


const LIAAI = () => {

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

  console.log(imagesSlider)
  return (
    <Layout {...metaData}>
      <Section medium spaceBottomNone zIndex={3}>
        <Container>
          <Overlay>
            <Row>
              <Col>
                <Logo>
                  <FeaturedMedia media={images.logo} />
                </Logo>
                <Title>
                  Laboratorioa de Análisis Industrial e Inocuidad de los
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
                  análisis destinados a confirmar la calidad de los productos
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
                  <SubTitle color="white">Políticas de Calidad LIAAI</SubTitle>
                </Col>
              </Row>
              <ListPolíticas>
                <li>
                  El Laboratorio de Inocuidad de Alimentos y Análisis Industrial
                  (LIAAI) tiene como política cumplir de manera íntegra su
                  misión, valores y objetivos de calidad, aplicando las Buenas
                  Prácticas de Laboratorio (BPL) para garantizar la calidad de
                  los ensayos microbiológicos, químicos, físicos y
                  físico-químicos cumpliendo siempre con los requisitos y
                  expectativas de nuestros clientes.
                </li>
                <li>
                  La alta Gerencia asegura que todo el personal está
                  familiarizado con la documentación del Sistema de Gestión de
                  Calidad y está comprometido con su implementación,
                  mantenimiento y mejora, aplicando las políticas y
                  procedimientos establecidos de manera correcta en todas las
                  actividades que desarrolla para estos fines.
                </li>
                <li>
                  El LIAAI está comprometido con la mejora y el cumplimiento de
                  los procesos, proporcionando un servicio de la más alta
                  calidad, puntualidad y confiabilidad, acorde a los estándares
                  internacionales, basados en los requisitos de las Normas
                  ISO/9001 e ISO/IEC/17025.
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
                  .filter((image) => image.name.includes("galeria"))
                  .map((image, index) => {
                    return (
                      <FeaturedMedia
                        key={index}
                        media={image}
                        size="56.25%"
                        bgColor
                      />
                    );
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
&:before{
  content:'';
  position: absolute;
  top:-50%;
  left: 0;
  background: ${colors.primary.dark};
  width: 100%;
  height: 100%;
z-index:-1;
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
`;

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
