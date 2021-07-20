import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import mq from "./mq";

const ContainerComponent = ({
  fluid=false, fluidMD=false, fluidLG=false, fluidXL=false, notFluidMD=false, notFluidLG=false, notFluidXL=false,
  noGutters=false, space=false, sizeSM="540px", sizeMD="720px", sizeLG="960px", sizeXL="1140px", 
  ...props
}) =>{

  return <Container {...{
    fluid, fluidMD, fluidLG, fluidXL, notFluidMD, notFluidLG, notFluidXL,
    noGutters, space, sizeSM, sizeMD, sizeLG, sizeXL, 
    ...props
  }} />
  
} 

export default ContainerComponent;

const spaceSizes = {
  s: "2rem",
  m: "4rem",
  l: "6rem",
}

const Container = styled.div`
  ${({
    fluid, fluidMD, fluidLG, fluidXL, notFluidMD, notFluidLG, notFluidXL,
    noGutters, space, sizeSM, sizeMD, sizeLG, sizeXL
  })=>css`
    width: 100%;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    ${!fluid && "margin: 0 auto"};
    ${!fluid? css`
      ${mq.sm}{
        max-width: ${sizeSM};
      }
      ${mq.md}{
          max-width: ${sizeMD};
      }
      ${mq.lg}{
          max-width: ${sizeLG};
      }
      ${mq.xl}{
          max-width: ${sizeXL};
      }
      `:null
    };

    ${notFluidMD? css`
      ${mq.sm}{
        max-width: ${sizeSM};
        margin: 0 auto;
      }
      ${mq.md}{
          max-width: ${sizeMD};
          margin: 0 auto;
      }
      ${mq.lg}{
          max-width: ${sizeLG};
          margin: 0 auto;
      }
      ${mq.xl}{
          max-width: ${sizeXL};
          margin: 0 auto;
      }
      `:null
    };

    ${fluidMD? css`
      ${mq.md}{
          max-width: 100%;
      }
      ${mq.lg}{
          max-width: 100%;
      }
      ${mq.xl}{
          max-width: 100%;
      }
      `:null
    };

    ${notFluidLG? css`
      ${mq.lg}{
          max-width: ${sizeLG};
          margin: 0 auto;
      }
      ${mq.xl}{
          max-width: ${sizeXL};
          margin: 0 auto;
      }
      `:null
    };

    ${fluidLG? css`
      ${mq.lg}{
          max-width: 100%;
      }
      ${mq.xl}{
          max-width: 100%;
      }
      `:null
    };

    ${notFluidXL? css`
      ${mq.xl}{
          max-width: ${sizeXL};
          margin: 0 auto;
      }
      `:null
    };

    ${fluidXL? css`
      ${mq.xl}{
          max-width: 100%;
      }
      `:null
    };

    // Adds container top and bottom space
    ${ 
      space==="small"? css`margin-top: ${spaceSizes.s}; margin-bottom: ${spaceSizes.s};`:
      space==="medium"? css`margin-top: ${spaceSizes.m}; margin-bottom: ${spaceSizes.m};`: 
      space==="large"? css`margin-top: ${spaceSizes.l}; margin-bottom: ${spaceSizes.l};`:
      ``
    }
    
    // Remove container gutters
    ${noGutters && "padding: 0;" }
  `}
`;