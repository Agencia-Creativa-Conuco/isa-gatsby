import React from "react";
import styled from "@emotion/styled";
import mq from "./mq";

const Section = ({
  thin, small, medium, large, 
  mediumTop, mediumBottom,
  spaceTopNone, spaceTopNoneMD, spaceBottomNone, spaceNone,
  zIndex, zIndexSM, zIndexMD, zIndexLG, zIndexXL,
  ...props
}) => {

  return (
    <SectionComponent {...{
      thin, small, medium, large, 
      mediumTop, mediumBottom,
      spaceTopNone, spaceTopNoneMD, spaceBottomNone, spaceNone,
      zIndex, zIndexSM, zIndexMD, zIndexLG, zIndexXL,
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
    mediumTop, mediumBottom,
    spaceTopNone, spaceTopNoneMD, spaceBottomNone, spaceNone,
    zIndex, zIndexSM, zIndexMD, zIndexLG, zIndexXL
  }) => `
    ${thin? `
      margin-bottom: 3.2rem;
      margin-top: 3.2rem;
      ${mq.md}{
          margin-bottom: 6.4rem;
          margin-top: 6.4rem;
      }`:""}
    ${small || (!thin && !medium && !large) ? `
      margin-bottom: 5.5rem;
      margin-top: 5.5rem;
      ${mq.md}{
          margin-bottom: 9.6rem;
          margin-top: 9.6rem;
      }`:""}
    ${medium? `
      margin-bottom: 6.4rem;
      margin-top: 6.4rem;
      ${mq.md}{
          margin-bottom: 12.8rem;
          margin-top: 12.8rem;
      }`:""}
    ${large? `
      margin-bottom: 8rem;
      margin-top: 8rem;
      ${mq.md}{
          margin-bottom: 16rem;
          margin-top: 16rem;
      }`:""}
    
    ${mediumTop? `
      ${mq.xs}{
        margin-top: 6.4rem;
        ${mq.md}{
            margin-top: 12.8rem;
        }
      }
    `:""}

    ${mediumBottom? `
      ${mq.xs}{
        margin-bottom: 6.4rem;
        ${mq.md}{
            margin-bottom: 12.8rem;
        }
      }
    `:""}

    ${spaceTopNone? `
      ${mq.xs}{
        margin-top: initial;
      }
    `:""}

    ${spaceTopNoneMD? `
      ${mq.md}{
        margin-top: initial;
      }
    `:""}

    ${spaceBottomNone? `
      ${mq.xs}{
        margin-bottom: initial;
      }
    `:""}

    ${spaceNone? `
      ${mq.xs}{
        margin: initial;
      }
    `:""}

    ${zIndex ? `
        z-index:${zIndex};
    ` : ""}
    ${zIndexSM ? `
        ${mq.sm}{
            z-index:${zIndexSM};
        }
    ` : ""}
    ${zIndexMD ? `
        ${mq.md}{
            z-index:${zIndexMD};
        }
    ` : ""}
    ${zIndexLG ? `
        ${mq.lg}{
            z-index:${zIndexLG};
        }
    ` : ""}
    ${zIndexXL ? `
        ${mq.xl}{
            z-index:${zIndexXL};
        }
    ` : ""}
  `}
`;