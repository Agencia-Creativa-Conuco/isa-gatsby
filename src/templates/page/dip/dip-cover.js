import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Container, Section, Row, Col } from '../../../components/layout/index'
import FeaturedMedia from '../../../components/featured-media'
import colors from '../../../components/styles/colors'
import useFiles from '../../../hooks/useFiles'

const DIPCover = () => {
  const images = useFiles()

  const title = 'Investigación',
    copy =
      'La Vicerrectoría de Investigaciones es la unidad operativa de la Universidad ISA que tiene como misión institucional normar, dirigir y desarrollar las actividades de investigación de la institución.',
    featuredImage = images.investigacion.cover

  return (
    <StyledSection spaceNone decoBg={colors.cta.base}>
      <Container fluid>
        <Row alignCenter>
          <Col size={12} sizeMD={5} sizeLG={6} order={2} orderMD={1}>
            <Content as="div">
              <Title> {title} </Title>
              <Copy>{copy}</Copy>
            </Content>
          </Col>
          <Col
            size={11}
            sizeSM={10}
            sizeMD={7}
            sizeLG={6}
            order={1}
            orderMD={2}
            mlAuto
            noGutters
          >
            <DecoLogo decoBg={colors.blue.dark}>
              <Logo
                media={featuredImage}
                size="100%"
                sizeMD="100%"
                sizeXL="90%"
                bgColor
                loading="eager"
              />
            </DecoLogo>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default DIPCover

const StyledSection = styled(Section)`
  ${({ decoBg = 'blue' }) => css`
    &:before {
      content: '';
      position: absolute;
      top: 10%;
      left: 0%;
      width: 30%;
      padding-bottom: 30%;
      border-radius: 50%;
      background: ${decoBg};
      transform: translate(-90%, 0);
    }
  `}
`

const Content = styled(Section)`
  max-width: 57rem;
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.h1`
  margin-top: 0;
`

const Copy = styled.p``

const Logo = styled(FeaturedMedia)`
  clip-path: ellipse(100% 100% at right);
`

const DecoLogo = styled.div`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: -8%;
    bottom: 15%;
    padding: 8%;
    clip-path: circle(50% at 50% 50%);
    background: ${(props) => props.decoBg};
  }
`
