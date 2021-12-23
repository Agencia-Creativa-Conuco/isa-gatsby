import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Container, Section, Row, Col, mq } from '../../components/layout/index'
import FeaturedMedia from '../../components/featured-media'
import colors from '../../components/styles/colors'
import Cta from '../../components/cta'
import useFiles from '../../hooks/useFiles'

const HomeAplication = () => {
  const images = useFiles()
  const title = 'Expande tu horizonte profesional con nosotros'
  const copy =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem cum, voluptatum architecto sint, quasi totam sequi aliquam porro explicabo aspernatur nam distinctio esse asperiores repellat dolore reiciendis voluptate unde vel?'

  return (
    <Section
      spaceNone
      id="section_4"
      css={sectionStyles({
        bgRoundDeco: colors.blue.dark,
        bgSquareDeco: colors.blue.light,
      })}
    >
      <Deco bgColor={colors.gray.light} />
      <Container
        css={css`
          overflow: hidden;
        `}
      >
        <Wrapper>
          <Row alignCenter>
            <Col size={12} sizeSM={10} sizeLG={6} mxAuto>
              <Media bgDeco={colors.primary.dark}>
                <Image
                  media={images.home.application}
                  size="75%"
                  sizeLG="155%"
                  position="50% 10%"
                />
              </Media>
            </Col>
            <Col size={12} sizeLG={6} mlAuto>
              <Content bg={colors.white} decoBg={colors.blue.dark}>
                <Title>{title}</Title>
                <p>{copy}</p>
                <Cta
                  to="/admisiones"
                  aria-label="Click para abrir el..."
                  shadowColor="black"
                >
                  Estudia con nosotros
                </Cta>
              </Content>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default HomeAplication

const sectionStyles = ({
  bgSquareDeco = 'blue',
  bgRoundDeco = 'lightblue',
}) => css`
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background-color: ${bgSquareDeco};
    z-index: 2;
    ${mq.lg} {
      width: 50%;
    }
  }
  &:after {
    content: '';
    background: ${bgRoundDeco};
    position: absolute;
    border-radius: 50%;
    width: 20%;
    padding-bottom: 20%;
    top: 0;
    left: 80%;
    transform: translate(-50%, 0);
    z-index: 1;
    ${mq.lg} {
      left: 50%;
    }
  }
`

const Deco = styled.div`
  ${({ bgColor = 'lightgray' }) => css`
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 50%;
    background-color: ${bgColor};
    z-index: 1;
  `}
`

const Wrapper = styled.div`
  position: relative;
  z-index: 3;
`

const Content = styled.div`
  border-radius: 2rem;
  box-shadow: lightGray 0 0 10px;
  background-color: white;
  margin-bottom: 10%;
  padding: 2rem;
  ${mq.sm} {
    padding: 5rem;
  }
  ${mq.lg} {
    box-sizing: content-box;
    width: 100%;
    margin: 25% 0;
    padding: 10%;
    padding-left: 25%;
    margin-left: -35%;
  }
`

const Title = styled.h2`
  margin-top: 0;
`

// const Description = styled.p``;

const Media = styled.div`
  ${({ bgDeco = 'lightblue' }) => css`
    position: relative;
    padding-top: 4rem;
    ${mq.md} {
      z-index: 2;
    }
    &::before {
      content: '';
      background: ${bgDeco};
      position: absolute;
      border-radius: 50%;
      padding: 8%;
      top: 0;
      left: 0;
      z-index: 3;
      transform: translate(4rem, 10rem);
    }
  `}
`

const Image = styled(FeaturedMedia)``
