import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import mq from "./mq";

const RowComponent = ({
    alignCenter=false, alignSMCenter=false, alignMDCenter=false, alignLGCenter=false, alignXLCenter=false,
    alignItems=false, alignSMItems=false, alignMDItems=false, alignLGItems=false, alignXLItems=false, 
    reverse=false, reverseSM=false, reverseMD=false, reverseLG=false, reverseXL=false,
    alignContent=false, alignSMContent=false, alignMDContent=false, alignLGContent=false, alignXLContent=false,
    justifyContent=false, justifySMContent=false, justifyMDContent=false, justifyLGContent=false, justifyXLContent=false,
    ...props
}) => {

  return <Row {...{
    alignCenter, alignSMCenter, alignMDCenter, alignLGCenter, alignXLCenter,
    alignItems, alignSMItems, alignMDItems, alignLGItems, alignXLItems, 
    reverse, reverseSM, reverseMD, reverseLG, reverseXL,
    alignContent, alignSMContent, alignMDContent, alignLGContent, alignXLContent,
    justifyContent, justifySMContent, justifyMDContent, justifyLGContent, justifyXLContent,
    ...props
  }} />

}

export default RowComponent;

const Row = styled.div`
  ${({
    alignCenter, alignSMCenter, alignMDCenter, alignLGCenter, alignXLCenter,
    alignItems, alignSMItems, alignMDItems, alignLGItems, alignXLItems, 
    reverse, reverseSM, reverseMD, reverseLG, reverseXL,
    alignContent, alignSMContent, alignMDContent, alignLGContent, alignXLContent,
    justifyContent, justifySMContent, justifyMDContent, justifyLGContent, justifyXLContent,
  })=>css`
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;

    // Alignment
    ${alignCenter? css`align-items: center;`: ""}
    ${alignSMCenter? css`
      ${mq.sm}{
        align-items: center;
      }
    `: ""}
    ${alignMDCenter? css`
        ${mq.md}{
        align-items: center;
      }
    `: ""}
    ${alignLGCenter? css`
        ${mq.lg}{
        align-items: center;
      }
    `: ""}
    ${alignXLCenter? css`
        ${mq.xl}{
        align-items: center;
      }
    `: ""}

    ${alignItems? css`
      align-items: ${alignItems};
    `: ""}
    ${alignSMItems? css`
      ${mq.sm}{
        align-items: ${alignSMItems};
      }
    `: ""}
    ${alignMDItems? css`
      ${mq.md}{
        align-items: ${alignMDItems};
      }
    `: ""}
    ${alignLGItems? css`
      ${mq.lg}{
        align-items: ${alignLGItems};
      }
    `: ""}
    ${alignXLItems? css`
      ${mq.xl}{
        align-items: ${alignXLItems};
      }
    `: ""}

    ${alignContent? css`
      align-content: ${alignContent};
    `: ""}
    ${alignSMContent? css`
      ${mq.sm}{
        align-content: ${alignSMContent};
      }
    `: ""}
    ${alignMDContent? css`
      ${mq.md}{
        align-content: ${alignMDContent};
      }
    `: ""}
    ${alignLGContent? css`
      ${mq.lg}{
        align-content: ${alignLGContent};
      }
    `: ""}
    ${alignXLContent? css`
      ${mq.xl}{
        align-content: ${alignXLContent};
      }
    `: ""}

    ${justifyContent? css`
      justify-content: ${justifyContent};
    `: ""}
    ${justifySMContent? css`
      ${mq.sm}{
        justify-content: ${justifySMContent};
      }
    `: ""}
    ${justifyMDContent? css`
      ${mq.md}{
        justify-content: ${justifyMDContent};
      }
    `: ""}
    ${justifyLGContent? css`
      ${mq.lg}{
        justify-content: ${justifyLGContent};
      }
    `: ""}
    ${justifyXLContent? css`
      ${mq.xl}{
        justify-content: ${justifyXLContent};
      }
    `: ""}

    ${reverse? css`
      flex-direction: row-reverse;
    `: ""}
    ${reverseSM? css`
      ${mq.sm}{
        flex-direction: row-reverse;
      }
    `: ""}
    ${reverseMD? css`
      ${mq.md}{
        flex-direction: row-reverse;
      }
    `: ""}
    ${reverseLG? css`
      ${mq.lg}{
        flex-direction: row-reverse;
      }
    `: ""}
    ${reverseXL? css`
      ${mq.xl}{
        flex-direction: row-reverse;
      }
    `: ""}
  `}
`;