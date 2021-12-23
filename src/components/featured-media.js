import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Image from 'gatsby-image/withIEPolyfill'
import { mq } from './layout/index'
import colors from './styles/colors'

const FeaturedMedia = ({
  state,
  media,
  position,
  className,
  bgColor,
  height,
  heightSM,
  heightMD,
  heightLG,
  heightXL,
  size,
  sizeSM,
  sizeMD,
  sizeLG,
  sizeXL,
  loading = 'lazy',
  fit = 'cover',
  maxWidth,
  mxAuto,
  zIndex,
  rounded = false,
  alt,
  ...props
}) => {
  if (
    Array.isArray(media) ||
    !(
      typeof media === 'object' ||
      typeof media === 'number' ||
      typeof media === 'string'
    )
  ) {
    return null
  }

  // const isCustom = typeof media === "object";

  const isSized =
    height ||
    heightSM ||
    heightMD ||
    heightLG ||
    heightXL ||
    size ||
    sizeSM ||
    sizeMD ||
    sizeLG ||
    sizeXL

  if (!media) return null

  const fluidMedia =
    media?.childImageSharp?.fluid || media?.localFile?.childImageSharp?.fluid

  const normalMedia =
    media?.publicURL || media?.localFile?.publicURL || media.full_url

  console.log(media)
  return (
    <Wrapper {...{ maxWidth, mxAuto, rounded, ...props }}>
      <Container
        {...{
          height,
          heightSM,
          heightMD,
          heightLG,
          heightXL,
          size,
          sizeSM,
          sizeMD,
          sizeLG,
          sizeXL,
          position,
          className,
          zIndex,
          //asigna color gris si se pasa bgColor sin valor
          bgColor: bgColor === true ? colors.gray.light : bgColor,
        }}
      >
        {fluidMedia ? (
          <StyledImage
            fluid={fluidMedia}
            alt={alt || media.altText || media.name}
            isSized={isSized}
            loading={loading}
            objectPosition={position}
            objectFit={fit}
          />
        ) : (
          <NormalImage
            {...media}
            alt={alt || media.alt}
            src={normalMedia}
            srcSet={media.srcset}
            isSized={isSized}
            loading={loading}
            position={position}
            fit={fit}
            //Los valores de width y height fueron colocados arbitrariamente para fines de evitar errores de optimización para SEO
            width={500}
            height={500}
          />
        )}
      </Container>
    </Wrapper>
  )
}

export default FeaturedMedia

const Wrapper = styled.div`
  ${({ maxWidth, mxAuto, rounded }) => css`
    max-width: ${maxWidth};
    width: 100%;
    height: 100%;
    ${mxAuto
      ? css`
          margin: 0 auto;
        `
      : ''};
    ${rounded
      ? css`
          border-radius: 50%;
          overflow: hidden;
        `
      : ''}
  `}
`

const Container = styled.div`
  ${({
    height,
    heightSM,
    heightMD,
    heightLG,
    heightXL,
    size,
    sizeSM,
    sizeMD,
    sizeLG,
    sizeXL,
    bgColor,
    zIndex,
  }) => css`
    position: relative;
    ${
      bgColor
        ? css`
            background-color: ${bgColor};
          `
        : css``
    }
    z-index: ${zIndex};
    ${
      size && size !== true
        ? css`
            padding-bottom: ${size};
          `
        : ''
    }
    ${mq.sm} {
      ${
        sizeSM && sizeSM !== true
          ? css`
              padding-bottom: ${sizeSM};
            `
          : ''
      }
    }
    ${mq.md} {
      ${
        sizeMD && sizeMD !== true
          ? css`
              padding-bottom: ${sizeMD};
            `
          : ''
      }
    }
    ${mq.lg} {
      ${
        sizeLG && sizeLG !== true
          ? css`
              padding-bottom: ${sizeLG};
            `
          : ''
      }
    }
    ${mq.xl} {
      ${
        sizeXL && sizeXL !== true
          ? css`
              padding-bottom: ${sizeXL};
            `
          : ''
      }
    }
    ${
      height && height !== true
        ? css`
            height: ${height};
          `
        : ''
    }
    ${mq.sm} {
      ${
        heightSM && heightSM !== true
          ? css`
              height: ${heightSM};
            `
          : ''
      }
    }
    ${mq.md} {
      ${
        heightMD && heightMD !== true
          ? css`
              height: ${heightMD};
            `
          : ''
      }
    }
    ${mq.lg} {
      ${
        heightLG && heightLG !== true
          ? css`
              height: ${heightLG};
            `
          : ''
      }
    }
    ${mq.xl} {
      ${
        heightXL && heightXL !== true
          ? css`
              height: ${heightXL};
            `
          : ''
      }
    }
  `}
`

const StyledImage = styled(Image)`
  ${({ isSized, position, fit = 'cover' }) => css`
    ${
      isSized
        ? css`
            position: absolute !important;
            left: 0;
            top: 0;
            right: 0;
            left: 0;
          `
        : css`
            /* position: absolute !important; */
          `
    }

    display: block;
    height: 100%;
    width: 100%;
    /* object-fit: ${fit}; */
    ${
      fit === 'initial'
        ? css`
            width: auto;
            height: auto;
          `
        : css``
    }
    ${
      position && position !== true
        ? css`
            object-position: ${position} !important;
          `
        : css``
    }
  `}
`

const NormalImage = styled.img`
  ${({ isSized, position, fit = 'cover' }) => css`
    ${
      isSized
        ? css`
            position: absolute !important;
            left: 0;
            top: 0;
          `
        : css`
            /* position: absolute !important; */
          `
    }

    display: block;
    height: 100%;
    width: 100%;
    /* object-fit: ${fit}; */
    ${
      fit === 'initial'
        ? css`
            width: auto;
            height: auto;
          `
        : css``
    }
    ${
      position && position !== true
        ? css`
            object-position: ${position};
          `
        : css``
    }
  `}
`
