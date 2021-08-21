import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import NavList from "./nav-list";
import { Container, Row, Col} from "../layout/index";
/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Navigation = ({ 
  split = false, isMain = false,
  items = [], noGutters = false,
  labelColor="#FFFFFF",
  itemColor="#FFFFFF", itemBg="#75C15133", itemBgCurrent="#FFE50033", itemBorderColor="#FFE500", itemBorderAll=false,
  itemFontWeight="initial", itemFontWeightAll=false, itemExpandColor="inherit",
  fluid, size, sizeSM, sizeMD, sizeLG, sizeXL, mxAuto,
  justifyContent, justifySMContent, justifyMDContent, justifyLGContent, justifyXLContent,
  ...props
}) => {

  return (
    <Menu {...props}>
      <Container {...{fluid, noGutters}}>
        <Row {...{justifyContent, justifySMContent, justifyMDContent, justifyLGContent, justifyXLContent}}>
        {
          !split?(
            <StyledCol>
              <>
                <NavList 
                  items={items} 
                  {...{isMain}}
                  {...{itemColor, itemBg, itemBgCurrent, itemBorderColor, itemBorderAll, itemFontWeight, itemFontWeightAll, itemExpandColor}}
                />
              </>
            </StyledCol>
          ):(
          items.map( (item, index) => {
            const {children, label, url} = item;
            const isLink = url !== "#";

            return children?(
              <StyledCol key={index} {...{size, sizeSM, sizeMD, sizeLG, sizeXL, mxAuto}}>
                <NavigationLabel {...{labelColor}}>{label}</NavigationLabel>

                <NavList 
                  items={children} 
                  {...{isMain}}
                  {...{itemColor, itemBg, itemBgCurrent, itemBorderColor, itemBorderAll, itemFontWeight, itemFontWeightAll, itemExpandColor}}
                />
              </StyledCol>
            ): null})
          )
        }
        </Row>
      </Container>
    </Menu>
  );
};

export default Navigation;

const StyledCol = styled(Col)`
  margin-bottom: 2rem;
`;

const Menu = styled.ul`
  margin: 0;
`;

const NavigationLabel = styled.span`
  ${({labelColor})=>css`
    color: ${labelColor};
    font-weight: bold;
    text-transform: uppercase;
  `}
`