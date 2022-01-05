import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Container, Section, Row, Col, mq } from '../../components/layout/index'
import Carousel from 'react-slick'
import colors from '../../components/styles/colors'
import Cta from '../../components/cta'
import useFiles from '../../hooks/useFiles'
import FeaturedMedia from '../../components/featured-media'

const HomeCover = ({ slides }) => {
  const images = useFiles()

  const items = slides.length
    ? slides
    : [
        {
          titulo: '¡Bienvenidos a UNIVERSIDAD ISA!',
          copy:
            'Entra y descubre todas las ofertas académicas que tenemos disponibles para ti e inicia a aprender para servir y a servir para construir.',
          imagenPortada: images.home.cover,
          cta: {
            url: '/admisiones',
            target: null,
            title: 'Estudia con nosotros',
          },
        },
      ]

  return (
    <StyledSection spaceNone bgDeco={colors.primary.dark}>
      <Carousel fade autoplay pauseOnHover>
        {items.map((item, index) => {
          const { titulo, copy, imagenPortada, cta } = item

          return (
            <Slide key={index}>
              <Container fluid>
                <Row alignCenter>
                  <Col
                    size={10}
                    sizeMD={6}
                    sizeLG={6}
                    orderMD={2}
                    noGutters
                    css={mediaColStyles}
                  >
                    <Media>
                      <SlideImage
                        media={imagenPortada}
                        alt={titulo}
                        bgColor
                        size="100%"
                        sizeMD="100%"
                        sizeXL="80%"
                        position="30% 0%"
                        loading={index > 0 ? 'lazy' : 'eager'}
                      />
                    </Media>
                  </Col>
                  <Col
                    size={12}
                    sizeMD={6}
                    sizeLG={6}
                    orderMD={1}
                    mxAuto
                    css={contentColStyles}
                  >
                    <Content bg={colors.blue.dark}>
                      <Title>{titulo}</Title>
                      <Copy>{copy}</Copy>
                      {cta ? (
                        <LinkBox>
                          <Cta to={cta.url} target={cta.target}>
                            {cta.title}
                          </Cta>
                        </LinkBox>
                      ) : null}
                    </Content>
                  </Col>
                </Row>
              </Container>
            </Slide>
          )
        })}
      </Carousel>
    </StyledSection>
  )
}

export default HomeCover

const mediaColStyles = css`
  margin-left: auto;
  ${mq.md} {
    margin-left: initial;
  }
`

const contentColStyles = css`
  max-width: 54rem;
  ${mq.md} {
    max-width: 36rem;
  }
  ${mq.lg} {
    max-width: 48rem;
  }
  ${mq.xl} {
    max-width: 57rem;
  }
`

const StyledSection = styled(Section)`
  ${({ bgDeco = 'darkblue' }) => css`
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      background: ${bgDeco};
      width: 8%;
      padding: 8%;
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 100%;
      transform: translate(-50%, 50%);
      z-index: 2;
    }
  `}
`

const Slide = styled.div`
  position: relative;
  /* list-style-type: none;
    overflow: hidden;
    position: relative; */
`

const Content = styled.div`
  padding: 4rem 0;
  position: relative;
  z-index: 1;
`

const Title = styled.h2`
  margin-top: 0;
  ${mq.lg} {
    /* font-size: 2vw; */
  }
`

const Copy = styled.div``

const LinkBox = styled.div`
  margin: 3rem 0;
`

const Media = styled.div`
  ${({ bgColorBefore = '#CCEDFA', bgColorAfter = '#001F56' }) => css`
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translate(-125%, 0);
      background-color: ${bgColorBefore};
      width: 15%;
      padding-bottom: 15%;
      z-index: 1;
      clip-path: ellipse(100% 100% at 100% 100%);
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translate(-25%, -100%);
      background-color: ${bgColorAfter};
      width: 15%;
      padding-bottom: 15%;
      z-index: 1;
    }
  `}
`

const SlideImage = styled(FeaturedMedia)`
  z-index: 2;
  clip-path: ellipse(100% 100% at right);
`
