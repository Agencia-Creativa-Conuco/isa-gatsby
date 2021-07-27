import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "./link";
import {Container,Row, Col, mq} from "./layout/index";
import {fadeIn, fadeOut, slideDown} from "./styles/animations";
import {LeftArrowIcon} from "./icons";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({
  state, actions, className, libraries, hideXS, hideSM, 
  hideMD, hideLG, hideXL, showXS, showSM, showMD, showLG, showXL
}) => {

  const menu = state.theme.menu.main;
  const { layout, colors } = state.theme;
  const {hideMenu} = actions.theme;
  const {itemActive} = state.theme.menu;

  //Show submenu
  const menuToggle = (item, event) =>{
    if(itemActive && item.ID === itemActive.ID){
      actions.theme.hideMenu();
    }
    else if(item.child_items){
      actions.theme.showMenu(item);
    }
  }


  const getURL = (url) =>{
    const localURL = new URL(state.frontity.url);
    let link = url;

    if(url.startsWith("http")){
      const incomingURL = new URL(url);
      const parsedURL = libraries.source.parse(url);

      if(incomingURL.domain === localURL.domain){
        const {path,page,query,hash} = parsedURL;
        link = libraries.source.stringify({
          ...{path,page,query,hash}
        })
      }
      else{
        link = url;
      }
    }

    return link;
  }


  return (
    <NavContainer {...{className, hideXS, hideSM, hideMD, hideLG, hideXL, showXS, showSM, showMD, showLG, showXL}}>
      <ButtonBox {...{layout,colors}}>
        <Row>
          <Col>
            <ButtonBack {...{colors, layout}} hidden={state.theme.menu.isMenuVisible?false:true} onClick={hideMenu} >
              <LeftArrowIcon />
            </ButtonBack>
          </Col>
        </Row>
      </ButtonBox>
      <MenuContainer as="ul" layout={state.theme.layout} hidden={itemActive}>
      {menu.items.map( (item) => {
        const link = getURL(item.url);
        // Check if the link matched the current page url
        const isCurrentPage = state.router.link === link;
        return (
          <NavItem key={item.ID} colors={state.theme.colors} bold>
            {/* If link url is the current page, add `aria-current` for a11y */}
            {
              item.child_items && (
                <NavItemTag 
                  aria-current={isCurrentPage ? "page" : undefined}
                  onClick={(e)=>{menuToggle(item,e)}}>
                  {item.title}
                </NavItemTag>
              ) || (
                <NavItemLink 
                  link={link} 
                  aria-current={isCurrentPage ? "page" : undefined}
                  onClick={(e)=>{menuToggle(item,e)}}>
                  {item.title}
                </NavItemLink>
              )
            }
          </NavItem>
        );
      })}
      </MenuContainer>
      
      {/* <MenuBox hidden={state.theme.menu.isMenuVisible?false:true}> */}
      <MenuBox as="section" hidden={state.theme.menu.isMenuVisible?false:true}>
        {
          menu.items.map( (itemP, index) =>{

            return itemP.child_items ? (
              <Row key={index} as="section" visible={itemActive && itemP.ID === itemActive.ID} css={rowStyles}>
              {
                itemP.child_items.map( (item) => {
                  const link = getURL(item.url);
                    // Check if the link matched the current page url
                  const isCurrentPage = state.router.link === link;
                  return (
                    <Col key={item.ID} size={12} sizeSM={6} sizeMD={4} as="section">
                      <NavItem colors={state.theme.colors} align="left" bold={item.child_items?true:false}>
                        {/* If link url is the current page, add `aria-current` for a11y */}
                        {
                          item.title != "#"?(
                            link==="#"?(
                              <NavItemTag 
                                aria-current={isCurrentPage ? "page" : undefined}
                              >
                                {item.title}
                              </NavItemTag>
                            ) : (
                              <NavItemLink 
                                link={link} 
                                aria-current={isCurrentPage ? "page" : undefined}
                              >
                                {item.title}
                              </NavItemLink>
                            )
                          ):null
                        }
                        {
                          item.child_items?(
                            <Row>
                            {
                              item.child_items.map( (item) => {
                                const link = getURL(item.url);
                                // Check if the link matched the current page url
                                const isCurrentPage = state.router.link === link;
                                return (
                                  <Col key={item.ID} size="12">
                                    <NavItem colors={state.theme.colors} align="left">
                                      {/* If link url is the current page, add `aria-current` for a11y */}
                                      {
                                        link === "#" && (
                                          <NavItemTag 
                                            aria-current={isCurrentPage ? "page" : undefined}
                                          >
                                            {item.title}
                                          </NavItemTag>
                                        ) || (
                                          <NavItemLink 
                                            link={link} 
                                            aria-current={isCurrentPage ? "page" : undefined}
                                          >
                                            {item.title}
                                          </NavItemLink>
                                        )
                                      }
                                    </NavItem>
                                  </Col>
                                );
                              })
                              }
                            </Row>
                          ):null
                        }
                      </NavItem>
                    </Col>
                  );
                }) 
              }
              </Row>
            ):null
          })
        }
      </MenuBox>
    </NavContainer>
  )
};

export default Nav;

const rowStyles = ({visible=true}) => css`
  display: ${visible? "flex": "none"};
`;

const NavContainer = styled.nav`
  ${props =>css`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    ${
      props.hideXS && `${mq.xs}{display: none;}` ||
      props.hideSM && `${mq.sm}{display: none;}` ||
      props.hideMD && `${mq.md}{display: none;}` ||
      props.hideLG && `${mq.lg}{display: none;}` ||
      props.hideXL && `${mq.xl}{display: none;}` 
    }
    ${
      props.showXS && `${mq.xs}{display: flex;}` ||
      props.showSM && `${mq.sm}{display: flex;}` ||
      props.showMD && `${mq.md}{display: flex;}` ||
      props.showLG && `${mq.lg}{display: flex;}` ||
      props.showXL && `${mq.xl}{display: flex;}` 
    }
  `}

`;

const MenuContainer = styled(Container)`
  ${({hidden})=>css`
    height: 100%;
    overflow: auto;
    /* ${!hidden?css`
      animation: ${fadeIn} 0.3s;
    `:css`
      animation: ${fadeOut} 0.3s;
    `} */
  `}
`;

const NavItem = styled.div`
  ${ ({colors, align="left", bold=false, thin}) => css`
    cursor: pointer;
    flex: 0 0 auto;
    list-style: none;
    color: ${colors.blue.base};
    font-weight: ${bold? "bold" : "normal"};
    text-align: ${align};
    margin: 0;
    padding: 0;
    /* animation: ${slideDown} 0.3s ease-in-out; */
  `}
`;

const NavItemTag = styled.span`
  display: block;
  padding: 5px 15px;

`;
const NavItemLink = styled(Link)`
  display: block;
  padding: 5px 15px;
  text-decoration: none;
`;

const MenuBox = styled(Container)`
  ${({hidden})=>css`
    width: 100%;
    height: 100%;
    background: white;
    overflow: auto;
    ${!hidden?css`
      animation: ${fadeIn} 0.3s;
    `:css`
      animation: ${fadeOut} 0.3s;
    `}
  `}
`;

const ButtonBox = styled(Container)`
  ${({colors, layout})=>css`
  padding-top: calc(1*${layout.header_height.xs});
  padding-bottom: 15px;
  ${mq.sm}{
    padding-top: calc(1*${layout.header_height.sm});
  }
  ${mq.md}{
    padding-top: calc(1*${layout.header_height.md});
  }
  `}
`;

const ButtonBack = styled.button`
  ${({colors, hidden})=>css`
    color: ${colors? colors.blue.base: "white"};
    width: 40px;
    height: 40px;
    background-color: ${colors.gray.light};
    color: ${colors.blue.base};
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    border: initial;
    outline: initial;
    ${!hidden?css`
      animation: ${fadeIn} 0.3s;
    `:css`
      animation: ${fadeOut} 0.3s;
    `}
    svg{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
    }
  `}
`;
