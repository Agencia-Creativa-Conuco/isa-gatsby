import React from 'react'
import styled from '@emotion/styled'
import { Section, Container, Row, Col, mq } from '../../components/layout/index'
import FeaturedMedia from '../../components/featured-media'
import colors from '../../components/styles/colors'

const FacultyCover = ({ facultad }) => {
  const { nombre, imagenPortada, color, mision, copy } = facultad

  return (
    <Section spaceNone>
      <Container fluid>
        <Row>
          <ColStyles
            order={2}
            orderLG={1}
            size={12}
            // sizeLG={6}
            color={color || colors.primary.dark}
          >
            <Container noGutters>
              <Row>
                <Col>
                  <Wrapper as="div">
                    <br />
                    <Title color={colors.white}> {nombre}</Title>
                    <Content dangerouslySetInnerHTML={{ __html: copy }} />
                    {mision ? (
                      <>
                        <SubTitle>Misión</SubTitle>
                        <Paragraph>{mision}</Paragraph>
                      </>
                    ) : null}
                    <br />
                  </Wrapper>
                </Col>
              </Row>
            </Container>
          </ColStyles>

          {/* <Col size={12} sizeLG={6} order={1} orderLG={2} noGutters>
            <FeaturedMedia
              media={imagenPortada}
              size="56.25%"
              sizeLG="80%"
              heightLG="100%"
              bgColor
              loading="eager"
            />
          </Col> */}
        </Row>
      </Container>
    </Section>
  )
}

export default FacultyCover

const ColStyles = styled(Col)`
  background-color: ${(props) => props.color};
`

const Wrapper = styled(Section)`
  ${mq.lg} {
    padding: 4rem 0;
  }
  ${mq.xl} {
    max-width: 70rem;
    margin-left: auto;
    margin-right: auto;
    padding: rem 0;
  }
`

const Title = styled.h1`
  color: white;
  margin-bottom: 4rem;
`

const SubTitle = styled.h2`
  color: white;
  margin-bottom: 2rem;
  margin-top: 4rem;
  text-transform: uppercase;
`

const Paragraph = styled.p`
  color: white;
`

const Content = styled.div`
  position: relative;
  color: white;
`
