import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import mq from "./mq";

const Section = ({
  thin, small, medium, large, 
  mediumTop, mediumBottom,
  spaceTopNone, spaceTopNoneMD, spaceBottomNone, spaceNone,
  zIndex, zIndexSM, zIndexMD, zIndexLG, zIndexXL, bgColor,
  ...props
}) => {

  return (
    <SectionComponent {...{
      thin, small, medium, large, 
      mediumTop, mediumBottom,
      spaceTopNone, spaceTopNoneMD, spaceBottomNone, spaceNone,
      zIndex, zIndexSM, zIndexMD, zIndexLG, zIndexXL, bgColor,
      ...props
    }} />
  );
}

export default Section;

const SectionComponent = styled.section`
  display: block;
  width: 100%;
  position: relative;
  ${({
    thin, small, medium, large, 
    mediumTop, mediumBottom, smallTop, smallBottom,
    spaceTopNone, spaceTopNoneMD, spaceBottomNone, spaceNone,
    zIndex, zIndexSM, zIndexMD, zIndexLG, zIndexXL, bgColor
  }) => css`
    ${ bgColor?css`background-color: ${bgColor}`:css``}
    ${thin? css`
      margin-bottom: 3.2rem;
      margin-top: 3.2rem;
      ${mq.md}{
          margin-bottom: 6.4rem;
          margin-top: 6.4rem;
      }`:""}
    ${small || (!thin && !medium && !large) ? css`
      margin-bottom: 5.5rem;
      margin-top: 5.5rem;
      ${mq.md}{
          margin-bottom: 9.6rem;
          margin-top: 9.6rem;
      }`:""}
    ${medium? css`
      margin-bottom: 6.4rem;
      margin-top: 6.4rem;
      ${mq.md}{
          margin-bottom: 12.8rem;
          margin-top: 12.8rem;
      }`:""}
    ${large? css`
      margin-bottom: 8rem;
      margin-top: 8rem;
      ${mq.md}{
          margin-bottom: 16rem;
          margin-top: 16rem;
      }`:""}

    ${smallTop? css`
      ${mq.xs}{
        margin-top: 5.5rem;
        ${mq.md}{
            margin-top: 9.6rem;
        }
      }
    `:""}

    ${smallBottom? css`
      ${mq.xs}{
        margin-bottom: 5.5rem;
        ${mq.md}{
            margin-bottom: 9.6rem;
        }
      }
    `:""}
    
    ${mediumTop? css`
      ${mq.xs}{
        margin-top: 6.4rem;
        ${mq.md}{
            margin-top: 12.8rem;
        }
      }
    `:""}

    ${mediumBottom? css`
      ${mq.xs}{
        margin-bottom: 6.4rem;
        ${mq.md}{
            margin-bottom: 12.8rem;
        }
      }
    `:""}
    

    ${spaceTopNone? css`
      ${mq.xs}{
        margin-top: initial;
      }
    `:""}

    ${spaceTopNoneMD? css`
      ${mq.md}{
        margin-top: initial;
      }
    `:""}

    ${spaceBottomNone? css`
      ${mq.xs}{
        margin-bottom: initial;
      }
    `:""}

    ${spaceNone? css`
      ${mq.xs}{
        margin: initial;
      }
    `:""}

    ${zIndex ? css`
        z-index:${zIndex};
    ` : ""}
    ${zIndexSM ? css`
        ${mq.sm}{
            z-index:${zIndexSM};
        }
    ` : ""}
    ${zIndexMD ? css`
        ${mq.md}{
            z-index:${zIndexMD};
        }
    ` : ""}
    ${zIndexLG ? css`
        ${mq.lg}{
            z-index:${zIndexLG};
        }
    ` : ""}
    ${zIndexXL ? css`
        ${mq.xl}{
            z-index:${zIndexXL};
        }
    ` : ""}
  `}
`;