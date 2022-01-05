import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import {
  Container,
  Row,
  Col,
  Section,
  mq,
} from '../../../components/layout/index'
import Carousel from 'react-slick'
import FeaturedMedia from '../../../components/featured-media'
import useFiles from '../../../hooks/useFiles'
import colors from '../../../components/styles/colors'
import { LeftArrowIcon, RightArrowIcon } from '../../../components/icons'

const Arrows = (props) => {
  const Arrow = styled.div`
    ${({ bgColor = 'blue', color = 'white' }) => css`
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

const Galeria = () => {
  const images = useFiles()[
    'centro-de-educacion-tecnica-huascar-rodriguez-herrera'
  ]

  return (
    <Section spaceNone>
      <Container fluid>
        <Row>
          <Col noGutters size={12}>
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
              autoplay
              pauseOnHover
            >
              {Object.values(images)
                .filter((image) => image.name.includes('galeria'))
                .map((image, index) => {
                  return (
                    <FeaturedMedia
                      key={index}
                      media={image}
                      size="56.25%"
                      sizeMD="40%"
                      sizeXL="40%"
                      bgColor
                    />
                  )
                })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Galeria
