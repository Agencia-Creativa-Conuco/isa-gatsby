import React from 'react'
import styled from '@emotion/styled'
import container, { gap } from '../../components/layout/new/container'
import colors from '../../components/styles/colors'
import useFiles from '../../hooks/useFiles'
import FeaturedMedia from '../../components/featured-media'
import mq from '../../components/layout/new/mq'

const EgresadosCover = (props) => {
  const images = useFiles()

  const data = {
    titulo: 'Egresados',
    copy:
      'Mantiene una comunicación permanente con los egresados facilitando su actualización profesional y el fortalecimiento de su vínculo con la Universidad.',
    imagenPortada: images.egresados.cover,
  }

  return (
    <Cover spaceNone fluid bgDeco={colors.primary.dark}>
      <Media>
        <Deco />
        <CoverImage
          media={data.imagenPortada}
          alt={data.titulo}
          bgColor
          size="100%"
          sizeXL="80%"
          position="30% 0%"
          loading="eager"
          height="50%"
        />
      </Media>
      <Content bg={colors.blue.dark}>
        <Title>{data.titulo}</Title>
        <Copy>{data.copy}</Copy>
      </Content>
    </Cover>
  )
}

export default EgresadosCover

const Cover = styled.section`
  ${container}
  display: grid;
  justify-content: end;
  grid-template-columns: 17% 1fr 1fr;
  padding: 0;
  grid-template-areas:
    'col col_1 col_1'
    'col_2  col_2  col_2';
  ${mq.md} {
    align-items: center;
    grid-template-columns: 50% 1fr;
    grid-template-areas: 'col_2 col_1';
  }
`

const Content = styled.div`
  padding: 4rem ${gap};
  position: relative;
  z-index: 1;
  justify-self: center;
  grid-area: col_2;
  max-width: 54rem;

  ${mq.md} {
    order: 1;
    max-width: 36rem;
  }
  ${mq.lg} {
    order: 1;
    max-width: 48rem;
  }
  ${mq.lg} {
    order: 1;
    max-width: 57rem;
  }
`

const Title = styled.h2`
  margin-top: 0;
  ${mq.lg} {
  }
`

const Copy = styled.div``

const Media = styled.div`
  position: relative;
  grid-area: col_1;
  &:after {
    content: '';
    position: absolute;
    left: 2%;
    bottom: 0;
    transform: translate(-88%, 0);
    background-color: ${colors.primary.light};
    width: 17%;
    padding-bottom: 17%;
    z-index: 1;
    clip-path: ellipse(100% 100% at 100% 100%);
  }
`

const CoverImage = styled(FeaturedMedia)`
  z-index: 2;
  clip-path: ellipse(100% 100% at right);
`

const Deco = styled.div`
  position: absolute;
  left: 3.5%;
  bottom: 0;
  background-color: ${colors.primary.dark};
  width: 17%;
  padding-bottom: 17%;
  z-index: 1;
  /* position: relative; */

  &:before {
    content: '';
    position: absolute;
    left: -40%;
    top: -40%;
    background-color: ${colors.primary.dark};
    width: 40%;
    padding-bottom: 40%;
    z-index: 2;
  }
  &:after {
    content: '';
    position: absolute;
    left: -65%;
    top: -65%;
    background-color: ${colors.primary.light};
    width: 30%;
    padding-bottom: 30%;
    z-index: 2;
    border-radius: 50%;
  }
`
