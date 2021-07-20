import React from "react";

import { Global, css } from "@emotion/react";

import MontserratBlack from "../../fonts/montserrat/Montserrat-Black.ttf";
import MontserratBold from "../../fonts/montserrat/Montserrat-Bold.ttf";
import MontserratLight from "../../fonts/montserrat/Montserrat-Light.ttf";
import MontserratRegular from "../../fonts/montserrat/Montserrat-Regular.ttf";
import MontserratThin from "../../fonts/montserrat/Montserrat-Thin.ttf";
import SourceSansProBlack from "../../fonts/sourcesanspro/SourceSansPro-Black.ttf";
import SourceSansProSemiBold from "../../fonts/sourcesanspro/SourceSansPro-SemiBold.ttf";
import SourceSansProBold from "../../fonts/sourcesanspro/SourceSansPro-Bold.ttf";
import SourceSansProLight from "../../fonts/sourcesanspro/SourceSansPro-Light.ttf";
import SourceSansProRegular from "../../fonts/sourcesanspro/SourceSansPro-Regular.ttf";
import SourceSansProThin from "../../fonts/sourcesanspro/SourceSansPro-ExtraLight.ttf";

const fonts = {
  // "us-ascii": [InterMediumUS, InterSemiBoldUS, InterBoldUS],
  // latin: [InterMediumLatin, InterSemiBoldLatin, InterBoldLatin],
  // all: [InterMedium, InterSemiBold, InterBold],
  all: [
    ["Montserrat",MontserratThin,"normal",100,"swap","woff2"],
    ["Montserrat",MontserratLight,"normal",300,"swap","woff2"],
    ["Montserrat",MontserratRegular,"normal",400,"swap","woff2"],
    ["Montserrat",MontserratBold,"normal",700,"swap","woff2"],
    ["Montserrat",MontserratBlack,"normal",900,"swap","woff2"],
    ["Source Sans Pro",SourceSansProThin,"normal",100,"swap","woff2"],
    ["Source Sans Pro",SourceSansProLight,"normal",300,"swap","woff2"],
    ["Source Sans Pro",SourceSansProRegular,"normal",400,"swap","woff2"],
    ["Source Sans Pro",SourceSansProSemiBold,"normal",600,"swap","woff2"],
    ["Source Sans Pro",SourceSansProBold,"normal",700,"swap","woff2"],
    ["Source Sans Pro",SourceSansProBlack,"normal",900,"swap","woff2"],
  ],
};

const FontFace = ({ state }) => {
  const font = fonts["all"];

  return (
    <Global
      styles={font.map((font)=>{
          const [family,url,style,weight,display,format] = font;
          return (
            css`
              @font-face {
                font-family: ${family};
                font-style: ${style};
                font-weight: ${weight};
                font-display: ${display};
                src: url(${url}) format("${format}");
              }
            `
          )
        })
      }
    />
  );
};

export default FontFace;
