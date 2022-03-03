import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Carousel from 'react-slick'
import FeaturedMedia from '../../../components/featured-media'
import useFiles from '../../../hooks/useFiles'
import colors from '../../../components/styles/colors'
import { LeftArrowIcon, RightArrowIcon } from '../../../components/icons'
import { container,mq } from '../../../components/layout/new';


const Arrows = (props) => {
  const Arrow = styled.div`
      border-radius: 50%;
      background-color: white;
      color: ${colors.primary.dark};
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
        background-color: white;
        color: ${colors.primary.dark};
      }
      &:hover {
        background-color: white;
        color: ${colors.primary.dark};
      }
      &:before {
        content: initial;
      }
  `

  return <Arrow {...props} />
}

const Galeria = () => {
  const images = useFiles()[
    'centro-de-educacion-tecnica-huascar-rodriguez-herrera'
  ]

  return (
    <Section fluid>
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
                  );
                })}
            </Carousel>

    </Section>
  )
}

export default Galeria

const Section = styled.div`
${container}
padding: 0;
display: grid;
grid-template-columns: 100%;
`;