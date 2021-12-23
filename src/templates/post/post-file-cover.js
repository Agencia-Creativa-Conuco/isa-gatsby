import React from 'react'
import styled from '@emotion/styled'
import { Section, Container, Row, Col, mq } from '../../components/layout/index'
import FeaturedMedia from '../../components/featured-media'
import Cta from '../../components/cta'
import colors from '../../components/styles/colors'

const FileCover = ({ post }) => {
  const { title, content, featuredImage, archivo } = post

  return (
    <Section large>
      <Wrapper>
        <Container>
          <Row>
            <Col size="auto" sizeSM>
              <ImageContainer>
                <Image>
                  <FeaturedMedia
                    media={featuredImage}
                    size="129%"
                    bgColor
                    loading="eager"
                  />
                </Image>
              </ImageContainer>
            </Col>
            <Col size="auto" sizeSM={7} sizeLG={8}>
              <Content>
                <Title>{title}</Title>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </Content>
              <CTABox>
                <Cta to={archivo} download>
                  Descargar
                </Cta>
              </CTABox>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Section>
  )
}

export default FileCover

const Wrapper = styled.div`
  margin-top: 12rem;
  padding: 1rem;
`

const ImageContainer = styled.div`
  position: relative;
  max-width: 25rem;
  width: 25rem;
  padding-bottom: 129%;
  background-color: gray;
  ${mq.sm} {
    max-width: 40rem;
    width: initial;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 45%;
    height: 0;
    padding-bottom: 45%;
    background-color: ${colors.secondary.light};
    transform: translate(-10%, -10%);
    z-index: -1;
    opacity: 0.5;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    height: 0;
    padding-bottom: 30%;
    background-color: ${colors.secondary.light};
    transform: translate(8%, 8%);
    z-index: -1;
    opacity: 0.5;
  }
`

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Content = styled.div``

const CTABox = styled.div`
  margin-top: 2rem;
  ${mq.md} {
    margin-top: 4rem;
  }
`

const Title = styled.h1`
  margin-bottom: 0.5rem;
`
