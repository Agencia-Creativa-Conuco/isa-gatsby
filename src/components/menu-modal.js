import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "./layout/index";
import { fadeIn } from "./styles/animations";
import Navigation from "./navigation/navigation";
import colors from "./styles/colors";
import SocialBox from "./social-box";



const MenuModal = ({ items = [] }) => {


  return (
    <>
      <MenuOverlay color={colors.blue.dark}>
        <Navigation
          hideLG
          items={items}
          noGutters
          itemColor={colors.text_main}
          labelColor={colors.text_main}
          itemBg="rgba(255,255,255,0.05)"
          itemBgCurrent="rgba(255,255,255,0.05)"
          itemBorderColor="white"
          isMain
          size={12}
          sizeSM={6}
          sizeXL={4}
        />
        <SocialBox/>


      </MenuOverlay>
    </>
  );
};

const MenuOverlay = styled.div`
  ${({ color }) => css`
    background-color: ${color};
    width: 100vw;
    height: 100vh;
    overflow: hidden auto;
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    padding: 8rem 2rem;
    /* animation: ${fadeIn} 0.3s; */
    ${mq.lg} {
      display: none;
    }
  `}
`;

export default MenuModal;
