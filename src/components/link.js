import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ctas from "./styles/cta";
import { Link } from "gatsby";
import colors from "./styles/colors";

const LinkComponent = ({
  state,
  actions,
  link,
  className,
  children,
  rel,
  cta,
  color,
  bgColor,
  noDecoration,
  download=false,
  "aria-current": ariaCurrent,
  onClick: onClickProp,
}) => {

  return (
    <A
      // ref={ref}
      to={link}
      className={className}
      aria-current={ariaCurrent}
      colors = {colors}
      {...{noDecoration, download, bgColor, color, cta}}
    >
      {children}
    </A>
  );
};

export default LinkComponent;

const A = styled(Link)`
  ${({cta}) => cta? ctas : null}
  ${({noDecoration}) => noDecoration? 
    css`
      text-decoration: none;
      color: inherit;
    ` : css``}
`;