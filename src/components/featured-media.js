import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "gatsby-image";
import {mq} from "./layout/index";
import colors from "./styles/colors";
import { getImage } from "gatsby-plugin-image";


const FeaturedMedia = ({ 
  state, media, position, className, bgColor,
  height, heightSM, heightMD, heightLG, heightXL,
  size, sizeSM, sizeMD, sizeLG, sizeXL, loading="lazy", fit="cover",
  maxWidth,mxAuto, zIndex, rounded = false, ...props
}) => {

  if(
    Array.isArray(media) || 
    !(typeof media === "object" || typeof media === "number" || typeof media === "string")  
  ){
    return null;
  }

  const isCustom = typeof media === "object";
  
  const isSized = height || heightSM || heightMD || heightLG || heightXL || size || sizeSM || sizeMD || sizeLG || sizeXL;

  if (!media) return null;

  return (
    <Wrapper {...{maxWidth, mxAuto, rounded, ...props}}>
      <Container {...{
        height, heightSM, heightMD, heightLG, heightXL, 
        size, sizeSM, sizeMD, sizeLG, sizeXL, 
        position, className, zIndex,
        //asigna color gris si se pasa bgColor sin valor
        bgColor: bgColor == true? colors.gray.light: bgColor,
      }}>
        {
          media?.childImageSharp? (
            <StyledImage
              fluid={media.childImageSharp.fluid}
              alt={"texto alternativo"}
              position={position}
              isSized={isSized}
              loading={loading}
              fit={fit}
            />
          ) : media?.publicURL? (
            <NormalImage
              {...media}
              alt={ media.alt }
              src= { media.publicURL }
              srcSet={ media.srcset }
              position={position}
              isSized={isSized}
              loading={loading}
              fit={fit}
            />
          ) : (
            <NormalImage
              {...media}
              alt={ media.alt }
              src= { media.full_url }
              srcSet={ media.srcset }
              position={position}
              isSized={isSized}
              loading={loading}
              fit={fit}
            />
          )
        }
      </Container>
    </Wrapper>
  );
};

export default FeaturedMedia;


const Wrapper = styled.div`
${({
  maxWidth,mxAuto, rounded
})=>css`
    max-width: ${maxWidth};
    height: 100%;
    ${mxAuto?`margin: 0 auto`:""};
    ${rounded?`
      border-radius: 50%;
      overflow: hidden;
    `:""}
`}
`;


const Container = styled.div`
${({
  height, heightSM, heightMD, heightLG, heightXL,
  size, sizeSM, sizeMD, sizeLG, sizeXL, bgColor, zIndex
})=> css`
    position: relative;
    ${bgColor? css`background-color: ${bgColor};`:css``}
    z-index: ${zIndex};
    ${size && size != true? `padding-bottom: ${size};`: ""}
    ${mq.sm}{
      ${sizeSM && sizeSM != true? `padding-bottom: ${sizeSM};`: ""}
    }
    ${mq.md}{
      ${sizeMD && sizeMD != true? `padding-bottom: ${sizeMD};`: ""}
    }
    ${mq.lg}{
      ${sizeLG && sizeLG != true? `padding-bottom: ${sizeLG};`: ""}
    }
    ${mq.xl}{
      ${sizeXL && sizeXL != true? `padding-bottom: ${sizeXL};`: ""}
    }
    ${height && height != true? `height: ${height};`: ""}
    ${mq.sm}{
      ${heightSM && heightSM != true? `height: ${heightSM};`: ""}
    }
    ${mq.md}{
      ${heightMD && heightMD != true? `height: ${heightMD};`: ""}
    }
    ${mq.lg}{
      ${heightLG && heightLG != true? `height: ${heightLG};`: ""}
    }
    ${mq.xl}{
      ${heightXL && heightXL != true? `height: ${heightXL};`: ""}
    }
  `}
`;

const StyledImage = styled(Image)`
  ${({isSized, position, fit="cover"}) => css`
    
    ${ isSized ? 
      css`
        position: absolute !important;
        left: 0;
        top: 0;
        `: 
      css`
        position: absolute !important;
      `
    }

    display: block;
    height: 100%;
    width: 100%;
    object-fit: ${fit};
    ${fit == 'initial'? css`width: auto; height: auto;`:css``}
    ${position && position !=true? css`object-position: ${position};`: css``}
  `}
`;

const NormalImage = styled.img`
  ${({isSized, position, fit="cover"}) => css`
    
    ${ isSized ? 
      css`
        position: absolute !important;
        left: 0;
        top: 0;
        `: 
      css`
        position: absolute !important;
      `
    }

    display: block;
    height: 100%;
    width: 100%;
    object-fit: ${fit};
    ${fit == 'initial'? css`width: auto; height: auto;`:css``}
    ${position && position !=true? css`object-position: ${position};`: css``}
  `}
`;
