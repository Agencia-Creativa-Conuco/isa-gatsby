import React from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { CloseIcon } from "./menu-icon";
import MenuModal from "./menu-modal";
import { mq } from "./layout/index";
import { MenuIcon } from "./icons";
import colors from "./styles/colors";

const MobileMenu = ({ items, isMobileMenuOpen, toggleMobileMenu }) => {
  
  return (
    <>
      <MenuToggle 
        aria-label="Click para abrir el menu..."
        onClick={(e)=>{
        e.stopPropagation();
        toggleMobileMenu(!isMobileMenuOpen);     
      }}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: "hidden" } }} />
            
            <IconContainer colors={ colors }> 
              <CloseIcon />
            </IconContainer>
          </>
        ) : (
          <IconContainer colors={ colors }>
            <MenuIcon />
          </IconContainer>
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal items={ items } />}
    </>
  );
}

const MenuToggle = styled.button`
  position: relative;
  background: transparent;
  border: 0;
  color: white;
  z-index: 5;
  font-size: 0;
  padding: initial;
  outline: initial;
  border: initial;
  margin: 0 5px;
  ${mq.lg} {
    display: none;
  }
`;
const IconContainer = styled.div`
  ${({colors})=>css`
    color: ${colors? colors.blue.base: "white"};
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: ${colors.blue.base};
    color: white;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    svg{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
    }
  `}
`;

export default MobileMenu;
