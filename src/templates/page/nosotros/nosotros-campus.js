import React, { useState, Fragment } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import {
  Container,
  Section,
  Row,
  Col,
  mq,
} from '../../../components/layout/index'
import FeaturedMedia from '../../../components/featured-media'
import Carousel from 'react-slick'
import { LeftArrowIcon, RightArrowIcon } from '../../../components/icons'
import colors from '../../../components/styles/colors'
import { useStaticQuery, graphql } from 'gatsby'
import useGlobalOption from '../../../hooks/useGlobalOption'
import ReactPlayer from 'react-player'

const Arrows = (props) => {
  const Arrow = styled.div`
    ${({ bgColor = 'blue', color = 'white' }) => css`
      padding: 1rem;
      border-radius: 50%;
      background-color: ${bgColor};
      color: ${color};
      width: 5rem;
      height: 5rem;
      margin: 0 3rem;
      z-index: 2;
      position: absolute;
      top: 50%;
      display: none !important;

      ${mq.lg} {
        display: block !important;
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

const NosotrosCampus = () => {
  //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: ["nosotros"] } }) {
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
  const [isPlaying, setIsPlaying] = useState(false)

  const [{ videoInstitucional }] = useGlobalOption()

  // Convierte arreglo de imágenes en objeto cuya llave es el nómbre del archivo
  // Esto para facilitar la búsqueda de la imagenes en los componentes hijos.
  const images = allFile.nodes.reduce((obj, item) => {
    return {
      ...obj,
      [item.name]: item,
    }
  }, {})

  const title = 'Nuestro campus'

  return Object.values(images).length ? (
    <Section spaceNone id="section_4">
      <Container fluid noGutters>
        <Row>
          <Col sizeLG={6} mlAuto>
            <SectionTitle>{title}</SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel
              prevArrow={
                <Arrows bgColor={'white'} color={colors.primary.dark}>
                  <LeftArrowIcon />
                </Arrows>
              }
              nextArrow={
                <Arrows bgColor={'white'} color={colors.primary.dark}>
                  <RightArrowIcon />
                </Arrows>
              }
              afterChange={() => setIsPlaying(false)}
              infinite={false}
            >
              {videoInstitucional ? (
                <>
                  <Playing onClick={() => setIsPlaying(!isPlaying)} />
                  <DivVideo>
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      css={reactPlayer}
                      controls
                      url={videoInstitucional}
                      playing={isPlaying}
                      onPause={() => setIsPlaying(false)}
                      onPlay={() => setIsPlaying(true)}
                    />
                  </DivVideo>
                </>
              ) : null}

              {Object.values(images)
                .filter((item) => item.name.includes('campus'))
                .sort((a, b) => {
                  if (a.name > b.name) {
                    return 1
                  }
                  if (a.name < b.name) {
                    return -1
                  }
                  // a must be equal to b
                  return 0
                })
                .map((item, index) => {
                  return (
                    <FeaturedMedia
                      key={index}
                      media={item}
                      size="56.25%"
                      sizeXL="40%"
                      bgColor={colors.gray.light}
                      alt={`Campus Universidad ISA - ${index}`}
                    />
                  )
                })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Section>
  ) : null
}

export default NosotrosCampus

const SectionTitle = styled.h2`
  text-align: center;
  margin-top: 4rem;
  ${mq.lg} {
    margin-top: -5rem;
    margin-bottom: 0;
    z-index: 200;
  }
`

const Playing = styled.div`
  width: 25%;
  position: absolute;
  height: calc(100% - 23.7%);
  z-index: 2;

  ${mq.sm} {
    height: calc(100% - 13.7%);
  }
  ${mq.md} {
    height: calc(100% - 10.7%);
  }

  ${mq.lg} {
    height: calc(100% - 12.2%);
  }
  ${mq.xl} {
    height: calc(100% - 9.2%);
  }
`

const DivVideo = styled.div`
  position: relative;
  padding-top: 56.25%;
  ${mq.xl} {
    padding-top: 40.25%;
  }
`

const reactPlayer = css`
  position: absolute;
  top: 0;
  left: 0;
`
