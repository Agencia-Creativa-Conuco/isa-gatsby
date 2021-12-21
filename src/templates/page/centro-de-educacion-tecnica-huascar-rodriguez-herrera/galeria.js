import React from 'react'
import { Container, Row, Col, Section } from '../../../components/layout/index'
import Carousel from 'react-slick'
import FeaturedMedia from '../../../components/featured-media'
import useFiles from '../../../hooks/useFiles'

const Galeria = () => {
  const images = useFiles()[
    'centro-de-educacion-tecnica-huascar-rodriguez-herrera'
  ]

  return (
    <Section spaceNone>
      <Container fluid>
        <Row>
          <Col noGutters size={12}>
            <Carousel arrows={false} autoplay pauseOnHover>
              {Object.values(images)
                .filter((image) => image.name.includes('galeria'))
                .map((image, index) => {
                  return (
                    <FeaturedMedia
                      key={index}
                      media={image}
                      size="56.25%"
                      sizeXL="45%"
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
