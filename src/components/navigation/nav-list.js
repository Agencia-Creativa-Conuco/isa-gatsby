import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import NavItem from "./nav-item";

const NavList = ({
  state, libraries, actions, 
  items, isMain = false,
  itemColor, itemBg, itemBgCurrent, itemBorderColor, itemBorderAll, itemFontWeight, itemFontWeightAll,
  itemExpandColor,
  ...props
}) => {

    return (
      <List {...{isMain, ...props}}>
      {
        items.map((item, index) => {
          return (
            <NavItem 
              key={index} 
              {...{item,isMain}}
              color={itemColor}
              bg={itemBg}
              bgCurrent={itemBgCurrent}
              borderColor={itemBorderColor}
              borderAll={itemBorderAll}
              fontWeight={itemFontWeight}
              fontWeightAll={itemFontWeightAll}
              expandColor={itemExpandColor}
            />
          );
        })
      }
      </List>
    );
}

export default NavList;

const List = styled.ul`
  ${({isMain}) => css`
    ${isMain?css`
      padding: 0;
      margin: 0;
    `:css`
      margin: 0;
      margin-left: 1.5rem;
    `}
  `}
`;